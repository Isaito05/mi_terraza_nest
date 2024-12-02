import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from 'src/entities/pedido.entity';
import { WebSocketService } from '../websocket/websocket.service';

@Injectable()
export class PedidoService {
    constructor(
        @InjectRepository(Pedido)
        private pedidoRepository: Repository<Pedido>,
        private readonly webSocketService: WebSocketService,
    ) { }

    async findAll(): Promise<Pedido[]> {
        return this.pedidoRepository.find({ relations: ['rguUsuario'] });
    }

    async findOne(PED_ID: number): Promise<Pedido> {
        return await this.pedidoRepository.findOne({
            where: { PED_ID: PED_ID },
            relations: ['rguUsuario'], // Asegúrate de que 'rguUsuario' es la relación correcta
        });
    }

    async create(pedidoData: Partial<Pedido>): Promise<Pedido> {
        const Pedido = this.pedidoRepository.create(pedidoData);
        return this.pedidoRepository.save(Pedido);
    }

    async update(PED_ID: number, pedidoData: Partial<Pedido>): Promise<Pedido> {
        await this.pedidoRepository.update(PED_ID, pedidoData);
        return this.pedidoRepository.findOneBy({ PED_ID });
    }

    async updatePedido(PED_ID: number, PED_NUEVO: boolean): Promise<Pedido> {
        const pedido = await this.pedidoRepository.findOne({ where: { PED_ID }, relations: ['rguUsuario'], });
    
        if (!pedido) {
          throw new NotFoundException(`Pedido con ID ${PED_ID} no encontrado`);
        }
    
        pedido.PED_NUEVO = PED_NUEVO ? 1 : 0;;
        await this.pedidoRepository.save(pedido);

        this.webSocketService.emit('pedidoActualizado', pedido);
        return pedido
    }

    async remove(PED_ID: number): Promise<void> {
        await this.pedidoRepository.delete(PED_ID);
    }

    async findPedidosByUserId(userId: number): Promise<Pedido[]> {
        return this.pedidoRepository.find({
            where: { rguUsuario: { RGU_ID: userId } }, // Asegúrate de que 'USUARIO_ID' sea el campo correcto
            relations: ['rguUsuario'], // Incluye la relación del usuario
        });
    }
    
}
