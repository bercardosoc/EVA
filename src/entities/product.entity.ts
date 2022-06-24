import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Image } from "./image.entity";
import { User } from "./user.entity";

@Entity()

export class Product {
    @PrimaryColumn("uuid")
    readonly id: string 

    @Column()
    name: string 

    @Column()
    description: string 

    @Column()
    price: number 

    @OneToMany(() => Image, (images) => images.product, { eager: true })
    images: Image[]

    @ManyToOne(() => User, (user) => user.products)
    owner: User

}