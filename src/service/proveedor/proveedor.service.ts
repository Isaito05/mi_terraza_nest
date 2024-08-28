import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proveedor } from 'src/entities/proveedor.entity';

@Injectable()
export class ProveedorService {
    constructor(
        @InjectRepository(Proveedor)
        private usuarioRepository: Repository<Proveedor>,
    ) { }

    async findAll(): Promise<Proveedor[]> {
        return this.usuarioRepository.find();
    }
}
