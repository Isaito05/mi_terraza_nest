import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { RguUsuarioService } from '../usuario/rgu_usuario.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: RguUsuarioService,
    private jwtService: JwtService
  ) { }

  async validarUsuario(email: string, pass: string): Promise<any> {
    const user = await this.usuarioService.findByEmail(email);
    if (!user) {
      throw new NotFoundException('El usuario no existe.');
    }
    
    const isPasswordMatching = await bcrypt.compare(pass, user.RGU_PASSWORD);
    // if (user && await bcrypt.compare(pass, user.RGU_PASSWORD)) {
    if (!isPasswordMatching) {
      throw new UnauthorizedException('La contraseña es incorrecta.');
    }
    
    const { RGU_PASSWORD, ...result } = user;
    return result;
    // }
    // return null;
  }

  async login(user: any) {
    const payload = { 
      email: user.email, 
      sub: user.id, 
      nombre: user.RGU_NOMBRES, 
      rol: user.RGU_ROL,
      apellido: user.RGU_APELLIDOS 
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
