import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from 'src/entities/rgu_usuario.entity';

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
        const usuario = this.usuarioRepository.create(usuarioData);
        return this.usuarioRepository.save(usuario);
    }

    async update(RGU_ID: number, usuarioData: Partial<Usuario>): Promise<Usuario> {
        await this.usuarioRepository.update(RGU_ID, usuarioData);
        return this.usuarioRepository.findOneBy({ RGU_ID });
    }

    async remove(RGU_ID: number): Promise<void> {
        await this.usuarioRepository.delete(RGU_ID);
    }
}
