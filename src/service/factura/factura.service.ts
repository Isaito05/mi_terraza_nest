import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Factura } from 'src/entities/factura.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FacturaService {
  constructor(
    @InjectRepository(Factura)
    private facturaRepository: Repository<Factura>,
  ) {}

  async getFacturas(): Promise<Factura[]> {
    return await this.facturaRepository.find();
  }

  async getFacturaById(id: number): Promise<Factura> {
    return await this.facturaRepository.findOne({ where: {FACTURA_ID: id} });
  }

  async createFactura(data: Partial<Factura>): Promise<Factura> {
    const nuevaFactura = this.facturaRepository.create(data);
    return await this.facturaRepository.save(nuevaFactura);
  }

  async updateFactura(id: number, data: Partial<Factura>): Promise<Factura> {
    await this.facturaRepository.update(id, data);
    return this.getFacturaById(id);
  }

  async deleteFactura(id: number): Promise<void> {
    await this.facturaRepository.delete(id);
  }
}
