import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BodegaService } from 'src/service/bodega/bodega.service';
import { Bodega } from 'src/entities/bodega.entity';

@Controller('bodega')
export class BodegaController {
    constructor(private readonly BodegaService: BodegaService) { }
   
    @Get()
    async findAll(): Promise<Bodega[]> {
        return this.BodegaService.findAll();
    }
}
