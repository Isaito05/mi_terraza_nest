import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from 'src/entities/pedido.entity';

@Injectable()
export class PedidoService {
    constructor(
        @InjectRepository(Pedido)
        private pedidoRepository: Repository<Pedido>,
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

    async remove(PED_ID: number): Promise<void> {
        await this.pedidoRepository.delete(PED_ID);
    }
}
