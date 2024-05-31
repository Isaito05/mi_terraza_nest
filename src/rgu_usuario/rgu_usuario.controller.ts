import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RguUsuarioService } from './rgu_usuario.service';
import { Usuario } from 'src/entities/rgu_usuario.entity';

@Controller('rgu-usuario')
export class RguUsuarioController {
    constructor(private readonly rguUsuarioService: RguUsuarioService) { }
   
    @Get()
    async findAll(): Promise<Usuario[]> {
        return this.rguUsuarioService.findAll();
    }

    // @Get(':id')
    // async findOne(@Param('id') id: string): Promise<Usuario> {
    //     return this.rguUsuarioService.findOne(id);
    // }

    @Post()
    async create(@Body() usuarioData: Partial<Usuario>): Promise<Usuario> {
        return this.rguUsuarioService.create(usuarioData);
    }

    // @Put(':id')
    // async update(@Param('id') id: string, @Body() usuarioData: Partial<Usuario>): Promise<Usuario> {
    //     return this.rguUsuarioService.update(id, usuarioData);
    // }

    // @Delete(':id')
    // async remove(@Param('id') id: string): Promise<void> {
    //     return this.rguUsuarioService.remove(id);
    // }
}
