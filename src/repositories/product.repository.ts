import { DeleteResult, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/product.entity";

interface IProductRepo {
  save: (Product: Partial<Product[]>) => Promise<Product[]>
  all: () => Promise<Product[]>
  findOne: (payload: object) => Promise<Product>
  delete: (id: string) => Promise<DeleteResult>
}

export class ProductRepo implements IProductRepo {
  private ormRepo: Repository<Product>

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Product)
  }

  save = async (Product: Partial<Product[]>) => await this.ormRepo.save(Product)
  all = async () => await this.ormRepo.find()

  findOne = async (payload: object) => {
    return await this.ormRepo.findOneBy({ ...payload })
  }

  delete = async (id: string): Promise<DeleteResult> => await this.ormRepo.delete(id)
    
}

export default new ProductRepo()