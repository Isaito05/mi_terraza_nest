import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // Servir archivos estáticos desde la carpeta 'public'
  app.use('/uploads', express.static(join(__dirname, '..', 'public', 'uploads')));
  await app.listen(3000);
}
bootstrap();
