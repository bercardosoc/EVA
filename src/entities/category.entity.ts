import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()

export class Category {
    @PrimaryGeneratedColumn("uuid")
    categoryId?: string

    @Column({unique: true})
    name: string

    @Column()
    description: string
    
    @OneToMany(() => Product, (product) => product.category)
    products: Product[]

}