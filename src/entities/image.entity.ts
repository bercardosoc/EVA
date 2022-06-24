import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()

export class Image {
    @PrimaryColumn("uuid")
    readonly id: string 

    @Column({ unique: true })
    filename: string 

    @Column()
    filepath: string 

    @Column()
    mimetype: string 

    @Column()
    size: number

    @ManyToOne(() => Product, (product) => product.images)
    product: Product
}