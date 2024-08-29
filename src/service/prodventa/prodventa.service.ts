import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prodventa } from 'src/entities/prodventa.entity';

@Injectable()
export class ProdventaService {
    constructor(
        @InjectRepository(Prodventa)
        private ProdventaRepository: Repository<Prodventa>,
    ) { }

    async findAll(): Promise<Prodventa[]> {
        return this.ProdventaRepository.find();
    }

    async findOne(PROD_VENTA_ID: number): Promise<Prodventa> {
        return this.ProdventaRepository.findOneBy({ PROD_VENTA_ID});
    }

    async create(ProdventaData: Partial<Prodventa>): Promise<Prodventa> {
        const Prodventa = this.ProdventaRepository.create(ProdventaData);
        return this.ProdventaRepository.save(Prodventa);
    }

    async update(PROD_VENTA_ID: number, ProdventaData: Partial<Prodventa>): Promise<Prodventa> {
        await this.ProdventaRepository.update(PROD_VENTA_ID, ProdventaData);
        return this.ProdventaRepository.findOneBy({ PROD_VENTA_ID});
    }

    async remove(Prodventa_ID: number): Promise<void> {
        await this.ProdventaRepository.delete(Prodventa_ID);
    }
}
