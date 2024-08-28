import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proprov } from 'src/entities/proprov.entity';

@Injectable()
export class ProprovService {
    constructor(
        @InjectRepository(Proprov)
        private usuarioRepository: Repository<Proprov>,
    ) { }

    async findAll(): Promise<Proprov[]> {
        return this.usuarioRepository.find({ relations: ['proveedor'] });
    }
}
