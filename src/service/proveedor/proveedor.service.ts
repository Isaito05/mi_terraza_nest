import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proveedor } from 'src/entities/proveedor.entity';

@Injectable()
export class ProveedorService {
    constructor(
        @InjectRepository(Proveedor)
        private proveedorRepository: Repository<Proveedor>,
    ) { }

    async findAll(): Promise<Proveedor[]> {
        return this.proveedorRepository.find();
    }

    async findOne(PROV_ID: number): Promise<Proveedor> {
        return this.proveedorRepository.findOneBy({ PROV_ID});
    }

    async create(proveedorData: Partial<Proveedor>): Promise<Proveedor> {
        const Proveedor = this.proveedorRepository.create(proveedorData);
        return this.proveedorRepository.save(Proveedor);
    }

    async update(PROV_ID: number, proveedorData: Partial<Proveedor>): Promise<Proveedor> {
        await this.proveedorRepository.update(PROV_ID, proveedorData);
        return this.proveedorRepository.findOneBy({ PROV_ID });
    }

    async remove(PROV_ID: number): Promise<void> {
        await this.proveedorRepository.delete(PROV_ID);
    }
}
