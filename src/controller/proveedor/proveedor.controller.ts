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

    @Get(':PROV_ID')
    async findOne(@Param('PROV_ID') PROV_ID: number): Promise<Proveedor> {
        return this.ProveedorService.findOne(PROV_ID);
    }

    @Post()
    async create(@Body() proveedorData: Partial<Proveedor>): Promise<Proveedor> {
        return this.ProveedorService.create(proveedorData);
    }

    @Put(':PROV_ID')
    async update(@Param('PROV_ID') PROV_ID: number, @Body() proveedorData: Partial<Proveedor>): Promise<Proveedor> {
        return this.ProveedorService.update(PROV_ID, proveedorData);
    }

    @Delete(':PROV_ID')
    async remove(@Param('PROV_ID') PROV_ID: number): Promise<void> {
        return this.ProveedorService.remove(PROV_ID);
    }
}
