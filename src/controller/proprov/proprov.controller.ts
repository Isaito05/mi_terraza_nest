import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProprovService } from 'src/service/proprov/proprov.service';
import { Proprov } from 'src/entities/proprov.entity';

@Controller('proprov')
export class ProprovController {
    constructor(private readonly ProprovService: ProprovService) { }
   
    @Get()
    async findAll(): Promise<Proprov[]> {
        return this.ProprovService.findAll();
    }

    @Get(':PROPROV_ID')
    async findOne(@Param('PROPROV_ID') PROPROV_ID: number): Promise<Proprov> {
        return this.ProprovService.findOne(PROPROV_ID);
    }

    @Post()
    async create(@Body() proprovData: Partial<Proprov>): Promise<Proprov> {
        return this.ProprovService.create(proprovData);
    }

    @Put(':PROPROV_ID')
    async update(@Param('PROPROV_ID') PROPROV_ID: number, @Body() proprovData: Partial<Proprov>): Promise<Proprov> {
        return this.ProprovService.update(PROPROV_ID, proprovData);
    }

    @Delete(':PROPROV_ID')
    async remove(@Param('PROPROV_ID') PROPROV_ID: number): Promise<void> {
        return this.ProprovService.remove(PROPROV_ID);
    }
}
