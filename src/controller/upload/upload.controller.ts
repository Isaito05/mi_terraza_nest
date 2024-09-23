import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

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
        return {
            mesg: file ? `Archivo ${file.filename} cargado correctamente` : 'No se cargó ningún archivo',
        };
    }




}
