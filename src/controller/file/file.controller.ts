import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { existsSync, mkdirSync } from 'fs';
import { extname, join } from 'path';
import { multerConfig } from 'src/multer.config';
import { diskStorage } from 'multer';

const uploadPath = join(__dirname, '..', 'public', 'uploads');
if (!existsSync(uploadPath)) {
  mkdirSync(uploadPath, { recursive: true });
}

@Controller('file')
export class FileController {
    @Post('upload')
    @UseInterceptors(FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads', // Carpeta donde se guardará la imagen
        filename: (req, file, cb) => {
          // Generar un nombre de archivo único
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
          const extension = extname(file.originalname); // Obtener la extensión original del archivo
          const filename = `${uniqueSuffix}${extension}`;
          cb(null, filename);
        }
      })
    }))
    uploadImage(@UploadedFile() file: Express.Multer.File) {
      // Devolver la URL de la imagen guardada
      return { imageUrl: `/uploads/${file.filename}` };
    }
}
