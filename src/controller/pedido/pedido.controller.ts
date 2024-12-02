import { Controller, Get, Post, Body, Param, Put, Delete, Patch } from '@nestjs/common';
import { Pedido } from 'src/entities/pedido.entity';
import { PedidoService } from 'src/service/pedido/pedido.service';

@Controller('pedido')
export class PedidoController {
    constructor(private readonly PedidoService: PedidoService) { }
   
    @Get()
    async findAll(): Promise<Pedido[]> {
        return this.PedidoService.findAll();//hola 
    }

    @Get(':PED_ID')
    async findOne(@Param('PED_ID') PED_ID: number): Promise<Pedido> {
        return this.PedidoService.findOne(PED_ID);
    }

    @Get('usuario/:id')
    async getPedidosByUserId(@Param('id') id: number): Promise<Pedido[]> {
        return this.PedidoService.findPedidosByUserId(id);
    }

    @Post()
    async create(@Body() pedidoData: Partial<Pedido>): Promise<Pedido> {
        return this.PedidoService.create(pedidoData);
    }

    @Put(':PED_ID')
    async update(@Param('PED_ID') PED_ID: number, @Body() pedidoData: Partial<Pedido>): Promise<Pedido> {
        return this.PedidoService.update(PED_ID, pedidoData);
    }

    @Patch(':PED_ID/badge')
    async updatePedido(@Param('PED_ID') id: number, @Body() body: { PED_NUEVO: boolean }) {
        return this.PedidoService.updatePedido(id, body.PED_NUEVO);
    }

    @Delete(':PED_ID')
    async remove(@Param('PED_ID') PED_ID: number): Promise<void> {
        return this.PedidoService.remove(PED_ID);
    }
}
