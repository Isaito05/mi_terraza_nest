import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Factura } from 'src/entities/factura.entity';
import { FacturaService } from 'src/service/factura/factura.service';



@Controller('factura')
export class FacturaController {
  constructor(private readonly facturaService: FacturaService) {}

  // Obtener todas las facturas
  @Get()
  async getAllFacturas(): Promise<Factura[]> {
    return await this.facturaService.getFacturas();
  }

  // Obtener una factura por ID
  @Get(':id')
  async getFacturaById(@Param('id') id: number): Promise<Factura> {
    return await this.facturaService.getFacturaById(id);
  }

  // Crear una nueva factura
  @Post()
  async createFactura(@Body() data: Partial<Factura>): Promise<Factura> {
    return await this.facturaService.createFactura(data);
  }

  // Actualizar una factura por ID
  @Put(':id')
  async updateFactura(
    @Param('id') id: number,
    @Body() data: Partial<Factura>,
  ): Promise<Factura> {
    return await this.facturaService.updateFactura(id, data);
  }

  // Eliminar una factura por ID
  @Delete(':id')
  async deleteFactura(@Param('id') id: number): Promise<void> {
    return await this.facturaService.deleteFactura(id);
  }
}
