import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProveedorService } from 'src/service/proveedor/proveedor.service';
import { Proveedor } from 'src/entities/proveedor.entity';

@Controller('proveedor')
export class ProveedorController {
    constructor(private readonly ProveedorService: ProveedorService) { }
   
    @Get()
    async findAll(): Promise<Proveedor[]> {
        return this.ProveedorService.findAll();
    }
}
