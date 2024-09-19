import { Injectable } from '@nestjs/common';
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

    async findAll(): Promise<Usuario[]> {
        return this.usuarioRepository.find();
    }

    async findOne(RGU_ID: number): Promise<Usuario> {
        return this.usuarioRepository.findOneBy({ RGU_ID});
    }

    async create(usuarioData: Partial<Usuario>): Promise<Usuario> {
        if (usuarioData.RGU_PASSWORD) {
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(usuarioData.RGU_PASSWORD, salt);
      
            // Reemplaza la contraseña en el usuarioData con la versión encriptada
            usuarioData.RGU_PASSWORD = hashedPassword;
        }

        const usuario = this.usuarioRepository.create(usuarioData);
        return this.usuarioRepository.save(usuario);
    }

    async update(RGU_ID: number, usuarioData: Partial<Usuario>): Promise<Usuario> {
        if (usuarioData.RGU_PASSWORD) {
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(usuarioData.RGU_PASSWORD, salt);
    
            usuarioData.RGU_PASSWORD = hashedPassword;
        }
        await this.usuarioRepository.update(RGU_ID, usuarioData);
        return this.usuarioRepository.findOneBy({ RGU_ID });
    }

    async remove(RGU_ID: number): Promise<void> {
        await this.usuarioRepository.delete(RGU_ID);
    }

    async findByEmail(RGU_CORREO: string): Promise<Usuario | undefined> {
        return this.usuarioRepository.findOne({
          where: { RGU_CORREO },
        });
      }
    
}
