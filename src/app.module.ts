import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConexionModule } from './conexion/src/conexion.module';
import { RguUsuarioModule } from './modules/rgu_usuario/rgu_usuario.module';
import { PagoModule } from './modules/pago/pago.module';
import { PedidoModule} from './modules/pedido/pedido.module'
import { BodegaModule } from './modules/bodega/bodega.module';
import { ProveedorModule } from './modules/proveedor/proveedor.module';
import { ProprovModule } from './modules/proprov/proprov.module';


@Module({
  imports: [ConexionModule, RguUsuarioModule, PagoModule, PedidoModule, BodegaModule, ProveedorModule, ProprovModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
