import { ForgotPasswordController } from './controller/forgot-password/forgot-password.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConexionModule } from './conexion/conexion.module';
import { RguUsuarioModule } from './modules/rgu_usuario/rgu_usuario.module';
import { PagoModule } from './modules/pago/pago.module';
import { PedidoModule } from './modules/pedido/pedido.module';
import { BodegaModule } from './modules/bodega/bodega.module';
import { ProveedorModule } from './modules/proveedor/proveedor.module';
import { ProprovModule } from './modules/proprov/proprov.module';
import { ProdventaModule } from './modules/prodventa/prodventa.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthController } from './controller/auth/auth.controller';
import { AuthService } from './service/auth/auth.service';
import { MailService } from './mail/mail.service';
import { MailModule } from './mail/mail.module';
import { UploadController } from './controller/upload/upload.controller';

@Module({
  imports: [
    ConexionModule,
    RguUsuarioModule,
    PagoModule,
    PedidoModule,
    BodegaModule,
    ProveedorModule,
    ProprovModule,
    ProdventaModule,
    AuthModule,
    MailModule,
  ],
  controllers: [ForgotPasswordController, UploadController, AppController],
  providers: [AppService, MailService],
})
export class AppModule {}
