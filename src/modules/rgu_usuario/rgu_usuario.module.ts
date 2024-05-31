import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/entities/rgu_usuario.entity';
import { RguUsuarioController } from 'src/rgu_usuario/rgu_usuario.controller';
import { RguUsuarioService } from 'src/rgu_usuario/rgu_usuario.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Usuario])
    ],
    controllers: [RguUsuarioController],
    providers: [RguUsuarioService],
})
export class RguUsuarioModule { }
