import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { User } from "./user.entity";

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

    @ManyToOne(() => User, (user) => user.categories)
    owner: User

}