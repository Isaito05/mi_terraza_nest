import { Controller, Get, Post, Body, Param, Put, Delete, Res } from '@nestjs/common';
import { RguUsuarioService } from './rgu_usuario.service';
import { Usuario } from 'src/entities/rgu_usuario.entity';

@Controller('rgu-usuario')
export class RguUsuarioController {
    constructor(private readonly rguUsuarioService: RguUsuarioService) { }
   
    @Get()
    async findAll(): Promise<Usuario[]> {
        return this.rguUsuarioService.findAll();
    }

    @Get(':RGU_ID')
    async findOne(@Param('RGU_ID') RGU_ID: number): Promise<Usuario> {
        return this.rguUsuarioService.findOne(RGU_ID);
    }

    @Post()
    async create(@Body() usuarioData: Partial<Usuario>): Promise<Usuario> {
        return this.rguUsuarioService.create(usuarioData);
    }

    @Put(':RGU_ID')
    async update(@Param('RGU_ID') RGU_ID: number, @Body() usuarioData: Partial<Usuario>): Promise<Usuario> {
        return this.rguUsuarioService.update(RGU_ID, usuarioData);
    }

    @Delete(':RGU_ID')
    async remove(@Param('RGU_ID') RGU_ID: number): Promise<void> {
        return this.rguUsuarioService.remove(RGU_ID);
    }
}
