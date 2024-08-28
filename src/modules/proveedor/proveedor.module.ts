import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProveedorController } from 'src/controller/proveedor/proveedor.controller';
import { Proveedor } from 'src/entities/proveedor.entity';
import { ProveedorService } from 'src/service/proveedor/proveedor.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Proveedor])
    ],
    controllers: [ProveedorController],
    providers: [ProveedorService],
})
export class ProveedorModule {}
