import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proprov } from 'src/entities/proprov.entity';

@Injectable()
export class ProprovService {
    constructor(
        @InjectRepository(Proprov)
        private proprovRepository: Repository<Proprov>,
    ) { }

    async findAll(): Promise<Proprov[]> {
        return this.proprovRepository.find({ relations: ['proveedor'] });
    }

    async findOne(PROPROV_ID: number): Promise<Proprov> {
        return this.proprovRepository.findOne({
            where: { PROPROV_ID: PROPROV_ID },
            relations: ['proveedor'], // Asegúrate de que 'rguUsuario' es la relación correcta
        });
    }

    async create(proprovData: Partial<Proprov>): Promise<Proprov> {
        const Proprov = this.proprovRepository.create(proprovData);
        return this.proprovRepository.save(Proprov);
    }

    async update(PROPROV_ID: number, proprovData: Partial<Proprov>): Promise<Proprov> {
        await this.proprovRepository.update(PROPROV_ID, proprovData);
        return this.proprovRepository.findOneBy({ PROPROV_ID });
    }

    async remove(PROPROV_ID: number): Promise<void> {
        await this.proprovRepository.delete(PROPROV_ID);
    }
}
