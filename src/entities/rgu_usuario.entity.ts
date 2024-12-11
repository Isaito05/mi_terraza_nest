import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 't_rgu_usuario' })
export class Usuario {
    @PrimaryGeneratedColumn()
    RGU_ID: number;

    @Column({ type: 'int', nullable: false })
    RGU_IDENTIFICACION: number;

    @Column({ length: 50, nullable: false })
    RGU_NOMBRES: string;

    @Column({ length: 50, nullable: false })
    RGU_APELLIDOS: string;

    @Column({ length: 20, nullable: false })
    RGU_GENERO: string;

    @Column({ length: 100, nullable: false })
    RGU_DIRECCION: string;

    @Column({ length: 50, nullable: true })
    RGU_CORREO: string;

    @Column({ type: 'bigint', nullable: false })
    RGU_TELEFONO: number;

    @Column({ length: 50, nullable: false })
    RGU_ROL: string;

    @Column({ length: 50, nullable: false })
    RGU_TP_DOC: string;

    @Column({ length: 100, nullable: true })
    RGU_PASSWORD: string;

    @Column({ type: 'int', default: 1 })
    RGU_ESTADO: number;

    @Column({ nullable: true }) // Campo para almacenar el token
    resetToken?: string;

    @Column({ type: 'varchar', nullable: true })
    RGU_IMG_PROFILE: string;

    @Column({ type: 'date' })
    RGU_FCH_REGISTRO: Date;

    @Column({ default: false }) 
    is_google_user: boolean;
}
