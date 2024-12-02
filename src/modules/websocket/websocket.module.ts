import { Module } from '@nestjs/common';
import { PedidosGateway } from './pedidos.gateway';
import { WebSocketService } from 'src/service/websocket/websocket.service';

@Module({
  providers: [PedidosGateway, WebSocketService],
  exports: [WebSocketService], // Exportamos el servicio para que otros módulos puedan usarlo
})
export class WebSocketModule {}
