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

    @Get(':BOD_ID')
    async findOne(@Param('BOD_ID') BOD_ID: number): Promise<Bodega> {
        return this.BodegaService.findOne(BOD_ID);
    }

    @Post()
    async create(@Body() bodegaData: Partial<Bodega>): Promise<Bodega> {
        return this.BodegaService.create(bodegaData);
    }

    @Put(':BOD_ID')
    async update(@Param('BOD_ID') BOD_ID: number, @Body() bodegaData: Partial<Bodega>): Promise<Bodega> {
        return this.BodegaService.update(BOD_ID, bodegaData);
    }

    @Delete(':BOD_ID')
    async remove(@Param('BOD_ID') BOD_ID: number): Promise<void> {
        return this.BodegaService.remove(BOD_ID);
    }
}
