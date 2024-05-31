import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PagoController } from 'src/controller/pago/pago.controller';
import { Pago } from 'src/entities/pago.entity';
import { PagoService } from 'src/service/pago/pago.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Pago])
    ],
    controllers: [PagoController],
    providers: [PagoService],
})
export class PagoModule {}
