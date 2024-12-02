import { Controller, Get, Post, Body, Param, Put, Delete, Query, BadRequestException} from '@nestjs/common';
import { Prodventa } from 'src/entities/prodventa.entity';
import { ProdventaService } from 'src/service/prodventa/prodventa.service';



@Controller('prodventa')
export class ProdventaController {
    constructor(private readonly ProdventaService: ProdventaService) { }

    @Get()
    async findAll(): Promise<Prodventa[]> {
        return this.ProdventaService.findAll();
    }

    @Get(':PROD_VENTA_ID')
    async findOne(@Param('PROD_VENTA_ID') PROD_VENTA_ID : number): Promise<Prodventa[]> {
        return this.ProdventaService.findOne(PROD_VENTA_ID );
    }

    @Post()
    async create(@Body() prodventaData: Partial<Prodventa>): Promise<Prodventa> {
        return this.ProdventaService.create(prodventaData);
    }

    @Put(':PROD_VENTA_ID')
    async update(@Param('PROD_VENTA_ID') PROD_VENTA_ID : number, @Body() prodventaData: Partial<Prodventa>): Promise<Prodventa> {
        return this.ProdventaService.update(PROD_VENTA_ID , prodventaData);
    }

    @Delete(':PROD_VENTA_ID')
    async remove(@Param('PROD_VENTA_ID') PROD_VENTA_ID : number): Promise<void> {
        return this.ProdventaService.remove(PROD_VENTA_ID );
    }
}
