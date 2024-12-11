import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // const app = await NestFactory.create(AppModule);

 // Configurar CORS para permitir solicitudes desde localhost:4200
//  app.enableCors({
//   origin: 'http://localhost:4200',  // Permite solicitudes desde este origen
//   credentials: true,  // Si estás utilizando cookies o autenticación basada en credenciales
// });

  // Servir archivos estáticos desde la carpeta 'public'
  app.use('/uploads', express.static(join(__dirname, '../uploads')));
  await app.listen(3000);
}
bootstrap();
