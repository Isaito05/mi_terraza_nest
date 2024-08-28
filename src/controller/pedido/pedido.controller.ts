import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Pedido } from 'src/entities/pedido.entity';
import { PedidoService } from 'src/service/pedido/pedido.service';

@Controller('pedido')
export class PedidoController {
    constructor(private readonly PedidoService: PedidoService) { }
   
    @Get()
    async findAll(): Promise<Pedido[]> {
        return this.PedidoService.findAll();//hola 
    }
}
