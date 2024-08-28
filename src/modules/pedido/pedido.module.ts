import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoController } from 'src/controller/pedido/pedido.controller';
import { Pedido } from 'src/entities/pedido.entity';
import { PedidoService } from 'src/service/pedido/pedido.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Pedido])
    ],
    controllers: [PedidoController],
    providers: [PedidoService],
})
export class PedidoModule {}
