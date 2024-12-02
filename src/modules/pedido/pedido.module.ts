import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoController } from 'src/controller/pedido/pedido.controller';
import { Pedido } from 'src/entities/pedido.entity';
import { PedidoService } from 'src/service/pedido/pedido.service';
// import { PedidosGateway } from 'src/service/pedido/pedidos.gateway';

@Module({
    imports: [
        TypeOrmModule.forFeature([Pedido])
    ],
    controllers: [PedidoController],
    providers: [PedidoService],
    exports: [PedidoService]
})
export class PedidoModule {}
