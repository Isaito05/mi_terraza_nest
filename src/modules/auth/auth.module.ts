import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from 'src/controller/auth/auth.controller';
import { Usuario } from 'src/entities/rgu_usuario.entity';
import { AuthService } from 'src/service/auth/auth.service';
import { RguUsuarioModule } from '../rgu_usuario/rgu_usuario.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
import { MailModule } from 'src/mail/mail.module';
import { GoogleStrategy } from 'src/strategies/google.strategy';
import { OAuth2Client } from 'google-auth-library';
@Module({
    imports: [
        MailModule,
        ConfigModule.forRoot(),
        RguUsuarioModule,
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET'),
                signOptions: { expiresIn: '60m' },
            }),
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, GoogleStrategy,{
        provide: OAuth2Client,
        useFactory: () => {
          return new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        },
      },
    ],
    
})
export class AuthModule {}
