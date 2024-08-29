import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bodega } from 'src/entities/bodega.entity';

@Injectable()
export class BodegaService {
    constructor(
        @InjectRepository(Bodega)
        private bodegaRepository: Repository<Bodega>,
    ) { }

    async findAll(): Promise<Bodega[]> {
        return this.bodegaRepository.find({ relations: ['proprov'] });
    }

    async findOne(BOD_ID: number): Promise<Bodega> {
        return await this.bodegaRepository.findOne({
            where: { BOD_ID: BOD_ID },
            relations: ['proprov'], // Asegúrate de que 'rguUsuario' es la relación correcta
        });
    }

    //

    async create(bodegaData: Partial<Bodega>): Promise<Bodega> {
        const Bodega = this.bodegaRepository.create(bodegaData);
        return this.bodegaRepository.save(Bodega);
    }

    async update(BOD_ID: number, bodegaData: Partial<Bodega>): Promise<Bodega> {
        await this.bodegaRepository.update(BOD_ID, bodegaData);
        return this.bodegaRepository.findOneBy({ BOD_ID });
    }

    async remove(BOD_ID: number): Promise<void> {
        await this.bodegaRepository.delete(BOD_ID);
    }
}
