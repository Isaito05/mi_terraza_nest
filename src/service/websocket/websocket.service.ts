import { Injectable } from '@nestjs/common';

@Injectable()
export class WebSocketService {
  private server: any; // Referencia al servidor WebSocket

  setServer(server: any) {
    this.server = server;
  }

  emit(event: string, payload: any) {
    if (this.server) {
      this.server.emit(event, payload);
    }
  }
}
