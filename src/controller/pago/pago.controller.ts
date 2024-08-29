import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PagoService } from 'src/service/pago/pago.service';
import { Pago } from 'src/entities/pago.entity';

@Controller('pago')
export class PagoController {
    constructor(private readonly PagoService: PagoService) { }
   
    @Get()
    async findAll(): Promise<Pago[]> {
        return this.PagoService.findAll();
    }

    @Get(':PAGO_ID')
    async findOne(@Param('PAGO_ID') PAGO_ID: number): Promise<Pago> {
        return this.PagoService.findOne(PAGO_ID);
    }

    @Post()
    async create(@Body() pagoData: Partial<Pago>): Promise<Pago> {
        return this.PagoService.create(pagoData);
    }

    @Put(':PAGO_ID')
    async update(@Param('PAGO_ID') PAGO_ID: number, @Body() pagoData: Partial<Pago>): Promise<Pago> {
        return this.PagoService.update(PAGO_ID, pagoData);
    }

    @Delete(':PAGO_ID')
    async remove(@Param('PAGO_ID') PAGO_ID: number): Promise<void> {
        return this.PagoService.remove(PAGO_ID);
    }
}
