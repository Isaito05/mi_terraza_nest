import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pago } from 'src/entities/pago.entity';

@Injectable()
export class PagoService {
    constructor(
        @InjectRepository(Pago)
        private pagoRepository: Repository<Pago>,
    ) { }

    async findAll(): Promise<Pago[]> {
        return this.pagoRepository.find({ relations: ['rguUsuario'] });
    }

    async findOne(PAGO_ID: number): Promise<Pago> {
        return await this.pagoRepository.findOne({
            where: { PAGO_ID: PAGO_ID },
            relations: ['rguUsuario'], // Asegúrate de que 'rguUsuario' es la relación correcta
        });
    }

    async create(pagoData: Partial<Pago>): Promise<Pago> {
        const pago = this.pagoRepository.create(pagoData);
        return this.pagoRepository.save(pago);
    }

    async update(PAGO_ID: number, pagoData: Partial<Pago>): Promise<Pago> {
        await this.pagoRepository.update(PAGO_ID, pagoData);
        return this.pagoRepository.findOneBy({ PAGO_ID });
    }

    async remove(PAGO_ID: number): Promise<void> {
        await this.pagoRepository.delete(PAGO_ID);
    }
}
