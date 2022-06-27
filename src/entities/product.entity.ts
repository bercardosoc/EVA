import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { v4 as uuid } from "uuid"

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
}