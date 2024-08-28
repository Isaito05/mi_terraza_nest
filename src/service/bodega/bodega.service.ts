import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bodega } from 'src/entities/bodega.entity';

@Injectable()
export class BodegaService {
    constructor(
        @InjectRepository(Bodega)
        private usuarioRepository: Repository<Bodega>,
    ) { }

    async findAll(): Promise<Bodega[]> {
        return this.usuarioRepository.find();
    }
}
