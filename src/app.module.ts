import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConexionModule } from './conexion/src/conexion.module';
import { RguUsuarioModule } from './modules/rgu_usuario/rgu_usuario.module';
import { PagoModule } from './modules/pago/pago.module';

@Module({
  imports: [ConexionModule, RguUsuarioModule, PagoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
