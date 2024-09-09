// src/files/files.module.ts

import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { FileController } from 'src/controller/file/file.controller';
import { FileService } from 'src/service/file/file.service';

@Module({
    imports: [MulterModule.register({
        dest: './uploads', // Carpeta donde se guardarán los archivos
    })],
    providers: [FileService],
    controllers: [FileController]
})
export class FilesModule { }
