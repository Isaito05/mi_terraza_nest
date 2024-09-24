import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

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
            synchronize: false, // Solo para desarrollo, no usar en producción
            
            autoLoadEntities: true
        }),
    ],
    controllers: [],
    providers: [],
})
export class ConexionModule { }
