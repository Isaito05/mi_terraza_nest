import { Entity, Column, PrimaryGeneratedColumn,ManyToOne, JoinColumn } from 'typeorm';

import { Usuario } from './rgu_usuario.entity'; // Ase

@Entity('t_proveedor') // Nombre de la tabla en la base de datos
export class Proveedor {
    @PrimaryGeneratedColumn()
    PROV_ID: number;

    @Column({ type: 'varchar', length: 100 })
    PROV_NOMBRE: string;

    @Column({ type: 'varchar', length: 100 })
    PROV_CORREO: string;

    @Column({ type: 'bigint', nullable: false })
    PROV_TELEFONO: number;

    @Column({ type: 'varchar', length: 100 })
    PROV_DIRECCION: string;

    @Column({ type: 'varchar', length: 100 })
    PROV_NIT: string;

    @Column({ type: 'int', default: 1 })
    PROV_ESTADO: number;
}
