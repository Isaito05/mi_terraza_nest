import { BadRequestException, Body, Controller, Get, InternalServerErrorException, NotFoundException, Post, Query, Req, Request, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/service/auth/auth.service';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { RguUsuarioService } from 'src/service/usuario/rgu_usuario.service';
import { Usuario } from 'src/entities/rgu_usuario.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtService : JwtService,
    private  rguUsuarioService : RguUsuarioService,
    ) {}

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

  // Redirigir al flujo de Google OAuth
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    // Inicia el flujo de autenticación
  }

  // Callback de Google OAuth
  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req) {
    return {
      message: 'Autenticación exitosa',
      user: req.user,
    };
  }

  @Post('google-login')
  async googleLogin(@Body() body: { idToken: string }) {
  const { idToken } = body;

  // Verifica el ID Token de Google
  const googleUser = await this.authService.verifyGoogleToken(idToken);

  if (!googleUser.email) {
    throw new BadRequestException('El token de Google no contiene un correo electrónico.');
  }

  try {
    // Buscar al usuario en la base de datos
    let existingUser = await this.rguUsuarioService.findByEmail(googleUser.email);

    // Si el usuario no existe, crearlo
    if (!existingUser) {
      const newUser = {
        RGU_CORREO: googleUser.email,
        RGU_NOMBRES: googleUser.given_name,
        RGU_APELLIDOS: googleUser.family_name || '',
        RGU_IMG_PROFILE: googleUser.picture,
        RGU_ROL: 'Cliente', // Rol por defecto
        RGU_FCH_REGISTRO: new Date(),
        is_google_user: true,
      };

      existingUser = await this.rguUsuarioService.create(newUser);
    }

    // Generar el token JWT con los datos del usuario
    const payload = {
      id: existingUser.RGU_ID,
      email: existingUser.RGU_CORREO,
      nombre: existingUser.RGU_NOMBRES,
      apellido: existingUser.RGU_APELLIDOS,
      rol: existingUser.RGU_ROL,
      i_perfil: existingUser.RGU_IMG_PROFILE,
      direccion: ""
    };

    const access_token = this.jwtService.sign(payload);

    return {
      access_token,
      user: payload,
    };
  } catch (error) {
    console.error('Error al manejar el login de Google:', error);
    throw new InternalServerErrorException('Error al procesar el login de Google');
  }
}

  

 

  

}
