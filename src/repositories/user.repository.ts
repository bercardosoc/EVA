import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

interface IUserRepo {
    save: (user: User) => Promise<User>
    retrieve: (payload: object) => Promise<User | null>;
    findOne: (payload: object) => Promise<User | null>;
}

class UserRepository implements IUserRepo {
    private userRepo: Repository<User>;

    constructor() {
        this.userRepo = AppDataSource.getRepository(User);
    }

    save = async (user:User): Promise<User> => {
        console.log(user)
        return await this.userRepo.save(user);
    }

    retrieve = async (payload: object) => await this.userRepo.findOneBy({...payload});

    findOne = async (payload: object) => {
        return await this.userRepo.findOneBy({ ...payload });
      }
}

export default new UserRepository();
