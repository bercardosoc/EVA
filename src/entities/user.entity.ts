import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { compare } from "bcrypt";

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

    comparePwd = async (recievedPwd: string): Promise<boolean> => {
        return await compare(recievedPwd, this.password)
      }
}