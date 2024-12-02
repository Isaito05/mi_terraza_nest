import { Entity, Column, PrimaryGeneratedColumn,ManyToOne, JoinColumn } from 'typeorm';

import { Usuario } from './rgu_usuario.entity'; // Ase

@Entity('t_pedido') // Nombre de la tabla en la base de datos
export class Pedido {
    @PrimaryGeneratedColumn()
    PED_ID: number;

    @Column({ type: 'varchar' , length: 255 })
    PED_FECHA: string;
    

    @Column({ type: 'longtext' })
    PED_INFO: number;

    @Column({ type: 'double' })
    PED_PRECIO_TOTAL: number;

    @Column({ type: 'int' })
    PED_RGU_ID: number;

    @ManyToOne(() => Usuario) // Define la relación ManyToOne
    @JoinColumn({ name: 'PED_RGU_ID' }) // Especifica la columna que actúa como clave foránea
    rguUsuario: Usuario; // Propiedad que referencia a la entidad relacionada

    @Column({ type: 'varchar', length: 100 })
    PED_DESCRIPCION: string;

    @Column({ type: 'int', default: 1 })
    PED_ESTADO: number;

    @Column({ type: 'int', default: 1 })
    PED_ESTADOE: number;

    @Column({ type: 'varchar', length: 100 })
    PED_NOTIFICACION: number;

    @Column({ type: 'varchar', length: 100 })
    PED_CANCELADO: number;

    @Column({ type: 'varchar', length: 100 })
    PED_MET_PAGO: number;

    @Column({ type: 'tinyint', default: 1 }) // Por defecto, los pedidos serán nuevos
    PED_NUEVO: number;
}
