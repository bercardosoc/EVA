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

    @ManyToOne(() => Product, (product) => product.images)
    product: Product
}