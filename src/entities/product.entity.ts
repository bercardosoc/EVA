import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Category } from "./category.entity";

@Entity()

export class Product {
    @PrimaryGeneratedColumn("uuid")
    id?: string; 

    @Column()
    name: string 

    @Column()
    description: string 

    @Column()
    price: number 

    @ManyToOne(() => User, (user) => user.products)
    owner: User

    @ManyToOne(() => Category, (category) => category.products)
    category: Category
}