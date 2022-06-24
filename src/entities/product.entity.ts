import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./user.entity";
import { v4 as uuid } from "uuid"

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

    /* @OneToMany(() => Image, (images) => images.product, { eager: true })
    images: Image[] */

    @ManyToOne(() => User, (user) => user.products)
    owner: User

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}