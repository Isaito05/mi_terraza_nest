import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('t_pago') // Nombre de la tabla en la base de datos
export class Pago {
    @PrimaryGeneratedColumn()
    PAGO_ID: number;

    @Column({ type: 'date' })
    PAGO_FECHA: Date;

    @Column({ type: 'decimal', precision: 10, scale: 0 })
    PAGO_MONTO: number;

    @Column({ type: 'int' })
    PAGO_RGU_ID: number;

    @Column({ type: 'varchar', length: 100 })
    PAGO_DESCRIPCION: string;

    @Column({ type: 'int', default: 1 })
    PAGO_ESTADO: number;
}
