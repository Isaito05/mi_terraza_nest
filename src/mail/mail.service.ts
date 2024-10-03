import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;
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
      
  async sendResetEmail(to: string, token: string, user: string) {
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
                        background-color: #FEA116;
                        color: #f8f9fa !important;
                        padding: 0.5rem 1rem;
                        border-radius: 5px;
                        text-decoration: none;
                        margin-top: 10px;
                        cursor: pointer;
                        font-weight: 600;
                        border-color: hsla(0, 0%, 100%, .2);
                    }
                    .button:hover {
                        background-color: #feaf39;
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
                    <p>Hola,<strong style="font-size: 1.2em;"> ${user}!</strong></p>
                    <p>Recibimos una solicitud de tu parte para restablecer la contraseña de tu cuenta.</p>
                    <p>Para restablecer tu contraseña, haz clic en el botón de abajo. Se abrirá una página donde podrás crear una nueva contraseña.</p>
                    <a href="http://localhost:4200/reset-password?token=${token}" class="button">Restablecer Contraseña</a>
                    <p><strong><em>Si no solicitaste este cambio, por favor verifica que nadie más esté intentando acceder a tu cuenta.</em></strong> Si es así, te recomendamos que cambies tu contraseña de inmediato.</p>
                    <p style="margin-top: 69px !important;"><strong><em>Si tienes problemas, no dudes en contactarnos en </em></strong<a href="mailto:support@example.com">support@example.com</a>.</p>
                    <p>¡Estamos aquí para ayudarte! Gracias por ser parte de nuestra comunidad.</p></br>
                    <div class="footer" style="margin-top: 40px !important;">
                        <p>Este es un mensaje automático, por favor no respondas.</p>
                    </div>
                </div>
            </body>
            </html>

        `,
    };
    await this.transporter.sendMail(mailOptions);
  }
}
