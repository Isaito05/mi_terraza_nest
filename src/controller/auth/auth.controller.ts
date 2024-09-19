import { Body, Controller, Post, Request, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/service/auth/auth.service';

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
}
