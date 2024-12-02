// import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
// import { PedidoService } from './pedido.service';

// @WebSocketGateway()
// export class PedidosGateway {
//   server: any;
//   constructor(private readonly pedidosService){}
//   async actualizarPedido(@MessageBody() id: number) {
//     // Aquí se puede enviar el ID del pedido actualizado
//     const pedidoActualizado = await this.pedidosService.updatePedido(id, true); // o el valor correspondiente
//     return pedidoActualizado;
//   }
// }