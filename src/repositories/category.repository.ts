import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Category } from "../entities/category.entity";

interface ICategoryRepo {
  save: (category: Partial<Category>) => Promise<Category>
  all: () => Promise<Category[]>
  findOne: (payload: object) => Promise<Category>
  update: (uuid: string, payload: object) => Promise<UpdateResult>
  delete: (id: string) => Promise<DeleteResult>
}

class CategoryRepo implements ICategoryRepo {
  private categoryRepo: Repository<Category>

  constructor() {
    this.categoryRepo = AppDataSource.getRepository(Category)
  }

  save = async (category: Partial<Category>) => await this.categoryRepo.save(category)
  all = async () => await this.categoryRepo.find()

  findOne = async (payload: object) => {
    return await this.categoryRepo.findOneBy({ ...payload })
  }

  update = async (uuid: string, payload: object) => await this.categoryRepo.update(uuid, {...payload})
  delete = async (id: string): Promise<DeleteResult> => await this.categoryRepo.delete(id)

}

export default new CategoryRepo()