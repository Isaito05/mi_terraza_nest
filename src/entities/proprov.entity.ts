import { Entity, Column, PrimaryGeneratedColumn,ManyToOne, JoinColumn, Decimal128 } from 'typeorm';

import { Proveedor } from './proveedor.entity'; // Ase


@Entity('t_pro_prov') // Nombre de la tabla en la base de datos
export class Proprov {
    @PrimaryGeneratedColumn()
    PROPROV_ID: number;

    @Column({ type: 'varchar', length: 100})
    PROPROV_NOMBRE: string;

    @Column({ type: 'int'})
    PROPROV_CANTIDAD: number;

    @Column({ type: 'date'})
    PROPROV_FCH_INGRESO: Date;

    @Column({ type: 'decimal'})
    PROPROV_PRECIO_UNITARIO: Decimal128;

    @Column({ type: 'varchar', length: 100})
    PROPROV_DESCRIPCION: string;

    @Column({ type: 'int'})
    PROPROV_PROV_ID: number;

    @Column({ type: 'int', default: 1})
    PROPROV_ESTADO: number;

    @ManyToOne(() => Proveedor) // Define la relación ManyToOne
    @JoinColumn({ name: 'PROPROV_PROV_ID' }) // Especifica la columna que actúa como clave foránea
    proveedor: Proveedor; // Propiedad que referencia a la entidad relacionada

    
}
