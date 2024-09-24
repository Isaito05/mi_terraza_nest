import { Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import * as fs from 'fs';
import { Response } from 'express';


@Controller('upload')
export class UploadController {

    @UseInterceptors(
        FileInterceptor(
            'files',
            {
                storage : diskStorage({
                    destination : './uploads',
                    filename : function(req, file, cb){
                        cb(null, file.originalname + '_' + Date.now() + '.jpg')
                    }
                })
            }
        )
    )


    @Post('file')
    uploadFile(@UploadedFile() file : Express.Multer.File){
        console.log(file);  // Verifica si el archivo llega correctamente
        const filePath = `http://localhost:3000/uploads/${file.filename}`;
        return {
            mesg: file ? `Archivo ${file.filename} cargado correctamente` : 'No se cargó ningún archivo',
            filePath: filePath
        };
    }

    @Get(':filename')
    async getImage(@Param('filename') filename: string, @Res() res: Response) {
        const filePath = path.join(__dirname, '..', 'uploads', filename);

        // Verifica si el archivo existe
        fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).send('Archivo no encontrado');
        }
        // Sirve el archivo
        res.sendFile(filePath);
        });
    }


}
