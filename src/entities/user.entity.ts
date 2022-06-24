import { compare } from "bcrypt";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity("users")

export class User {
    @PrimaryGeneratedColumn("uuid")
    userUuid?: string

    @Column({ unique: true })
    email: string 

    @Column()
    name: string 

    @Column()
    password: string 

    @OneToMany(() => Product, (product) => product.owner, { eager: true })
    products: Product[]

    comparePwd = async (pwdString: string): Promise<boolean> => {
        return await compare(pwdString, this.password)
    }
}