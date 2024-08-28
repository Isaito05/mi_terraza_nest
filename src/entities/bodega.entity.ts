import { Entity, Column, PrimaryGeneratedColumn,ManyToOne, JoinColumn } from 'typeorm';

import { Proveedor } from './proveedor.entity'; // Ase

@Entity('t_bodega') // Nombre de la tabla en la base de datos
export class Bodega {
    @PrimaryGeneratedColumn()
    BOD_ID: number;

    @Column({ type: 'int' })
    BOD_STOCK_MINIMO: number;

    @Column({ type: 'varchar', length: 100 })
    BOD_ESTADO: string;

    @Column({ type: 'int' })
    BOD_PROPROV_ID : number;

    @ManyToOne(() => Proveedor) // Define la relación ManyToOne
    @JoinColumn({ name: 'BOD_PROPROV_ID' }) // Especifica la columna que actúa como clave foránea
    proveedor: Proveedor; // Propiedad que referencia a la entidad relacionada

    @Column({ type: 'int', default: 1 })
    BOD_ESTADOE: number;
}
