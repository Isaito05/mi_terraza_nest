
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdventaController } from 'src/controller/prodventa/prodventa.controller';
import { Prodventa } from 'src/entities/prodventa.entity';
import { ProdventaService } from 'src/service/prodventa/prodventa.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Prodventa])
    ],
    controllers: [ProdventaController],
    providers: [ProdventaService],
})
export class ProdventaModule {}
