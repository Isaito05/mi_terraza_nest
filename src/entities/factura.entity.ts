import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Usuario } from './rgu_usuario.entity';
import { Pedido } from './pedido.entity';

@Entity('t_factura') // Nombre de la tabla
export class Factura {
    @PrimaryGeneratedColumn()
    FACTURA_ID: number;

    @Column({ type: 'int', nullable: false })
    FACTURA_PED_ID: number;

    @ManyToOne(() => Pedido, (pedido) => pedido.PED_ID, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'FACTURA_PED_ID' })
    pedido: Pedido;

    @Column({ type: 'int', nullable: false })
    FACTURA_RGU_ID: number;

    @ManyToOne(() => Usuario, (usuario) => usuario.RGU_ID, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'FACTURA_RGU_ID' })
    usuario: Usuario;

    @CreateDateColumn({ type: 'date' })
    FACTURA_FECHA: Date;

    @Column({ type: 'varchar', length: 20, nullable: false })
    FACTURA_ESTADO: string;

    @Column({ type: 'decimal', precision: 10, scale: 0, nullable: false })
    FACTURA_TOTAL: number;

    @Column({ type: 'varchar', length: 50, nullable: false })
    FACTURA_METODO_PAGO: string;

    @Column({ type: 'text', nullable: true })
    FACTURA_DESCRIPCION: string;

    @Column({ type: 'boolean', default: false })
    FACTURA_CANCELADA: boolean;

    @Column({ type: 'date', nullable: true })
    FACTURA_FECHA_CANCELACION: Date;

    @CreateDateColumn({ type: 'date' })
    FACTURA_FCH_REGISTRO: Date;

    @Column({ type: 'int', default: 1 })
    FACTURA_ESTADOE: number;
    
}
