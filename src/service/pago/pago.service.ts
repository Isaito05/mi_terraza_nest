import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pago } from 'src/entities/pago.entity';

@Injectable()
export class PagoService {
    constructor(
        @InjectRepository(Pago)
        private usuarioRepository: Repository<Pago>,
    ) { }

    async findAll(): Promise<Pago[]> {
        return this.usuarioRepository.find();
    }
}
