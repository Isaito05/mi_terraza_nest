// src/modules/websocket/pedidos.gateway.ts
import { WebSocketGateway, OnGatewayInit } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { WebSocketService } from 'src/service/websocket/websocket.service';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:4200', // Reemplázalo con tu URL frontend
    methods: ['GET', 'POST'],        // Métodos permitidos
    credentials: true,               // Permitir cookies o credenciales
  },
})
export class PedidosGateway implements OnGatewayInit {
  constructor(private readonly webSocketService: WebSocketService) {}

  server: Server;

  afterInit(server: Server) {
    this.server = server;
    this.webSocketService.setServer(server); // Compartimos el servidor con el servicio
  }
}
