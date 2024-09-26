import { Body, Controller, Get, Post, Query, Request, Res, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/service/auth/auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  //   @UseGuards(LocalAuthGuard)
  @Post('login')
  // async login(@Request() req) {
  //   return this.authService.login(req.user);
  // }

  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validarUsuario(body.email, body.password);
    if (user) {
      return this.authService.login(user);
    } else {
      throw new UnauthorizedException('Credenciales invalidas');
    }
  }

  @Post('forgot-password')
  async resetPassword(@Body('email') email: string) {
    await this.authService.requestPasswordReset(email);
    return { message: 'Email sent' };
  }

  @Post('reset-password')
  async updatePassword(@Body() body: { token: string; password: string }) {
    const { token, password } = body;
    // Verifica el token y actualiza la contraseña
    return await this.authService.resetPassword(token, password);
  }

  // @Get('reset-password')
  // async showResetPassword(@Query('token') token: string, @Res() res: Response) {
  //   // Lógica para validar el token
  //   const isValid = await this.authService.validateResetToken(token);

  //   if (isValid) {
  //     // Si el token es válido, muestra el formulario de restablecimiento
  //     return res.render('reset-password', { token });
  //   } else {
  //     // Si el token es inválido, maneja el error
  //     return res.status(400).send('Token inválido o expirado');
  //   }
  // }
}
