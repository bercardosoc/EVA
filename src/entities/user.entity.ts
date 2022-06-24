import { v4 as uuid } from "uuid"
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()

export class User {
    @PrimaryColumn("uuid")
    readonly id: string

    @Column({ unique: true })
    email: string 

    @Column()
    name: string 

    @Column()
    password: string 

    @OneToMany(() => Product, (product) => product.owner)
    products: Product[]

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}