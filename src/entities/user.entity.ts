import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { compare } from "bcrypt";
import { Category } from "./category.entity";

@Entity()

export class User {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column({ unique: true })
    email: string 

    @Column()
    name: string 

    @Column()
    password: string 

    @OneToMany(() => Product, (product) => product.owner, {eager: true})
    products: Product[]

    @OneToMany(() => Category, (category) => category.owner, {eager: true})
    categories: Category[]

    comparePwd = async (recievedPwd: string): Promise<boolean> => {
        return await compare(recievedPwd, this.password)
      }
}