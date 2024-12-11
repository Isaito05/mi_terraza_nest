import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacturaController } from 'src/controller/factura/factura.controller';
import { Factura } from 'src/entities/factura.entity';
import { FacturaService } from 'src/service/factura/factura.service';

@Module({
  imports: [TypeOrmModule.forFeature([Factura])], // Registrar la entidad para TypeORM
  providers: [FacturaService], // Registrar el servicio
  controllers: [FacturaController], // Registrar el controlador
})
export class FacturaModule {}
