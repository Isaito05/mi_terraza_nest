import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

//   constructor() {
//     this.transporter = nodemailer.createTransport({
//         host: process.env.MAILTRAP_HOST,
//         port: parseInt(process.env.MAILTRAP_PORT),
//         auth: {
//           user: process.env.MAILTRAP_USER,
//           pass: process.env.MAILTRAP_PASS,
//         },
//       });

constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail', // Usa el servicio de Gmail
      auth: {
          user: process.env.EMAIL, // Cambia a tu email
          pass: process.env.PASSWORD, // Cambia a tu contraseña
        },
    });
    console.log('Email:', process.env.EMAIL);
    console.log('Password:', process.env.PASSWORD);
  }
      
  async sendResetEmail(to: string, token: string) {
    const mailOptions = {
        from: 'noreply@example.com', // Cambia esto por tu email
        to,
        subject: 'Restablecimiento de contraseña',
        html: `
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Restablecimiento de Contraseña</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        padding: 20px;
                    }
                    .container {
                        background-color: #ffffff;
                        padding: 20px;
                        border-radius: 5px;
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        color: #333333;
                    }
                    p {
                        font-size: 16px;
                        color: #555555;
                    }
                    .button {
                        display: inline-block;
                        background-color: #007bff;
                        color: #ffffff;
                        padding: 10px 20px;
                        border-radius: 5px;
                        text-decoration: none;
                        margin-top: 10px;
                    }
                    .footer {
                        margin-top: 20px;
                        font-size: 12px;
                        color: #777777;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Restablecimiento de Contraseña</h1>
                    <p>Hola,</p>
                    <p>Hemos recibido una solicitud para restablecer tu contraseña. Haz clic en el botón de abajo para restablecerla:</p>
                    <a href="http://localhost:4200/reset-password?token=${token}" class="button">Restablecer Contraseña</a>
                    <p>Si no solicitaste este cambio, simplemente ignora este mensaje.</p>
                    <p>¡Gracias!</p>
                    <div class="footer">
                        <p>Este es un mensaje automático, por favor no respondas.</p>
                    </div>
                </div>
            </body>
            </html>
        `,
    };
    await this.transporter.sendMail(mailOptions);
  }
  

//   async sendResetEmail(to: string, token: string) {
//     const mailOptions = {
//       from: 'noreply@example.com', // Cambia esto por tu email
//       to,
//       subject: 'Restablecimiento de contraseña',
//     //   text: `Haga clic en el siguiente enlace para restablecer su contraseña: http://localhost:3000/reset-password?token=${token}`,
//       // Puedes usar HTML si prefieres:
//      html: `<a href="http://localhost:3000/forgot-password?token=${token}">Restablecer contraseña</a>`,
//     };

//     await this.transporter.sendMail(mailOptions);
//   }
}
