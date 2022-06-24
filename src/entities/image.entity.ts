import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity("images")

export class Image {
    @PrimaryGeneratedColumn("uuid")
    imageUuid?: string 

    @Column({ unique: true })
    filename: string 

    @Column()
    filepath: string 

    @ManyToOne(() => Product, (product) => product.images)
    product: Product
}