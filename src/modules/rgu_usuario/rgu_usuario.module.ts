import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/entities/rgu_usuario.entity';
import { RguUsuarioController } from 'src/controller/usuario/rgu_usuario.controller';
import { RguUsuarioService } from 'src/service/usuario/rgu_usuario.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Usuario])
    ],
    controllers: [RguUsuarioController],
    providers: [RguUsuarioService],
    exports: [RguUsuarioService]
})
export class RguUsuarioModule { }
