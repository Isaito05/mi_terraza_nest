import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from 'src/entities/rgu_usuario.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class RguUsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,
    ) { }

    // Encuentra todos los usuarios
    async findAll(): Promise<Usuario[]> {
        return this.usuarioRepository.find();
    }

    // Encuentra un usuario por su ID
    async findOne(RGU_ID: number): Promise<Usuario> {
        const usuario = await this.usuarioRepository.findOneBy({ RGU_ID });
        if (!usuario) {
            throw new NotFoundException('Usuario no encontrado');
        }
        return usuario;
    }

    // Crea un nuevo usuario
    async create(usuarioData: Partial<Usuario>): Promise<Usuario> {
        if (usuarioData.RGU_PASSWORD) {
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(usuarioData.RGU_PASSWORD, salt);
      
            // Reemplaza la contraseña en usuarioData con la versión encriptada
            usuarioData.RGU_PASSWORD = hashedPassword;
        }

        const usuario = this.usuarioRepository.create(usuarioData);
        return this.usuarioRepository.save(usuario);
    }

    // Actualiza un usuario existente
    async update(RGU_ID: number, usuarioData: Partial<Usuario>): Promise<Usuario> {
        const usuario = await this.usuarioRepository.findOneBy({ RGU_ID });
        if (!usuario) {
            throw new NotFoundException('Usuario no encontrado');
        }

        if (usuarioData.RGU_PASSWORD) {
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(usuarioData.RGU_PASSWORD, salt);
    
            usuarioData.RGU_PASSWORD = hashedPassword;
        }
        
        await this.usuarioRepository.update(RGU_ID, usuarioData);
        return this.usuarioRepository.findOneBy({ RGU_ID });
    }

    // Elimina un usuario por su ID
    async remove(RGU_ID: number): Promise<void> {
        const usuario = await this.usuarioRepository.findOneBy({ RGU_ID });
        if (!usuario) {
            throw new NotFoundException('Usuario no encontrado');
        }

        await this.usuarioRepository.delete(RGU_ID);
    }

    // Encuentra un usuario por su correo electrónico
    async findByEmail(RGU_CORREO: string): Promise<Usuario | undefined> {
        const usuario = await this.usuarioRepository.findOne({
            where: { RGU_CORREO },
        });

        if (!usuario) {
            // throw new NotFoundException('Usuario con ese correo no encontrado');
            return null;
        }

        return usuario;
    }

    // Guarda el token de restablecimiento de contraseña
    async saveResetToken(RGU_ID: number, token: string): Promise<void> {
        const usuario = await this.usuarioRepository.findOneBy({ RGU_ID });
        if (!usuario) {
            throw new NotFoundException('Usuario no encontrado');
        }

        usuario.resetToken = token; // Asigna el token al campo resetToken
        await this.usuarioRepository.save(usuario); // Guarda los cambios
    }

    // Actualiza la contraseña de un usuario
    async updatePassword(RGU_ID: number, newPassword: string): Promise<void> {
        const usuario = await this.usuarioRepository.findOneBy({ RGU_ID });
        if (!usuario) {
            throw new NotFoundException('Usuario no encontrado');
        }

        const salt = await bcrypt.genSalt(); // Genera un salt
        const hashedPassword = await bcrypt.hash(newPassword, salt); // Hashea la nueva contraseña
        usuario.RGU_PASSWORD = hashedPassword; // Asigna la nueva contraseña hasheada
        await this.usuarioRepository.save(usuario); // Guarda los cambios en la base de datos
    }
}
