
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { RguUsuarioController } from 'src/rgu_usuario/rgu_usuario.controller';
import { RguUsuarioService } from 'src/rgu_usuario/rgu_usuario.service';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost', // o la IP de tu servidor de base de datos
            port: 3306,
            username: 'root',
            password: '',
            database: 'mi_terraza',
            entities: [__dirname + '/../**/*.entity.{js,ts}'],
            synchronize: true, // Solo para desarrollo, no usar en producción
            autoLoadEntities: true
        }),
    ],
    controllers: [],
    providers: [],
})
export class ConexionModule { }
