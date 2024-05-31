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
}
