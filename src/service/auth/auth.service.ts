import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { RguUsuarioService } from '../usuario/rgu_usuario.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: RguUsuarioService,
    private jwtService: JwtService,
    private readonly mailService: MailService,
  ) { }

  async validarUsuario(email: string, pass: string): Promise<any> {
    const user = await this.usuarioService.findByEmail(email);
    if (!user) {
      throw new NotFoundException('El usuario no existe.');
    }
    
    const isPasswordMatching = await bcrypt.compare(pass, user.RGU_PASSWORD);
    if (!isPasswordMatching) {
      throw new UnauthorizedException('La contraseña es incorrecta.');
    }
    
    const { RGU_PASSWORD, ...result } = user;
    return result;
  }

  async login(user: any) {
    const payload = { 
      email: user.email, 
      sub: user.id, 
      nombre: user.RGU_NOMBRES, 
      rol: user.RGU_ROL,
      apellido: user.RGU_APELLIDOS,
      i_perfil: user.RGU_IMG_PROFILE
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async requestPasswordReset(RGU_CORREO: string) {
    const usuario = await this.usuarioService.findByEmail(RGU_CORREO);
    if (!usuario) {
      throw new Error('User not found');
    }
  
    const token = this.generateResetToken(usuario.RGU_ID.toString());// Pasa el ID del usuario al generar el token

    await this.usuarioService.saveResetToken(usuario.RGU_ID, token); // Asegúrate de usar RGU_ID
    await this.mailService.sendResetEmail(RGU_CORREO, token, usuario.RGU_NOMBRES); // Envía el email
  }

  private generateResetToken(userId: string): string {
    const payload = { id: userId }; // Incluye el ID del usuario en el payload
    return this.jwtService.sign(payload, { expiresIn: '1h' }); // Configura una expiración para el token
  }
  

  async validateResetToken(token: string): Promise<boolean> {
    try {
      const payload = this.jwtService.verify(token); // Verifica el token
      return !!payload; // Retorna true si el token es válido
    } catch (error) {
      return false; // Retorna false si hay un error (token inválido o expirado)
    }
  }

  async resetPassword(token: string, password: string) {
    try {
      const decoded = this.jwtService.verify(token); // Verifica el token usando tu secreto
      const userId = decoded.id; // Extrae el ID del usuario del token
  
      await this.usuarioService.updatePassword(userId, password); // Actualiza la contraseña en la base de datos
      return { message: 'Contraseña actualizada con éxito' };
    } catch (error) {
      throw new UnauthorizedException('Token inválido o expirado'); // Lanza un error adecuado
    }
  }
}
