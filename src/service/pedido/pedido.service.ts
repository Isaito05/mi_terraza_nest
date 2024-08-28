import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from 'src/entities/pedido.entity';

@Injectable()
export class PedidoService {
    constructor(
        @InjectRepository(Pedido)
        private usuarioRepository: Repository<Pedido>,
    ) { }

    async findAll(): Promise<Pedido[]> {
        return this.usuarioRepository.find({ relations: ['rguUsuario'] });
    }
}
