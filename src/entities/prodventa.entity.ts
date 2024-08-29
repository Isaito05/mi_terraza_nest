import { Entity, Column, PrimaryGeneratedColumn,Double } from 'typeorm';


@Entity('t_prod_venta') // Nombre de la tabla en la base de datos
export class Prodventa {
    @PrimaryGeneratedColumn()
    PROD_VENTA_ID : number;

    @Column({ type: 'varchar', length: 100})
    PROD_VENTA_NOMBRE: string;

    @Column({ type: 'varchar', length: 100})
    PROD_VENTA_DESCRIPCION: string;

    @Column({ type: 'int'})
    PROD_VENTA_PRECIO: Double;

    @Column({ type: 'varchar', length: 100})
    PROD_VENTA_IMAGEN: string;

    @Column({ type: 'int', default: 1})
    PROD_VENTA_ESTADO: number;
}
