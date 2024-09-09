// src/multer.config.ts

import { diskStorage } from 'multer';
import { extname } from 'path';

export const multerConfig = {
  storage: diskStorage({
    destination: './public/assets/img', // Directorio donde se guardarán las imágenes
    filename: (req, file, cb) => {
      const filename = `${Date.now()}${extname(file.originalname)}`;
      cb(null, filename);
    }
  }),
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('Solo se permiten imágenes'), false);
    }
    cb(null, true);
  }
};
