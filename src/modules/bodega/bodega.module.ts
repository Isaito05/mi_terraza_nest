import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BodegaController } from 'src/controller/bodega/bodega.controller';
import { Bodega } from 'src/entities/bodega.entity';
import { BodegaService } from 'src/service/bodega/bodega.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Bodega])
    ],
    controllers: [BodegaController],
    providers: [BodegaService],
})
export class BodegaModule {}
