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
}
