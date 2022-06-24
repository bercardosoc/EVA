import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Image } from "./image.entity";
import { User } from "./user.entity";

@Entity("products")

export class Product {
    @PrimaryGeneratedColumn("uuid")
    productUuid?: string 

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