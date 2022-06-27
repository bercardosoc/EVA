import { DeleteResult, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/product.entity";

interface IProductRepo {
    save: (Product: Partial<Product>) => Promise<Product>;
    all: () => Promise<Product[]>;
    retrieve: (payload: object) => Promise<Product | null>;
    findOne: (payload: object) => Promise<Product>;
    delete: (id: string) => Promise<DeleteResult>;
  }
  
  class ProductRepository implements IProductRepo {
    private productRepo: Repository<Product>;
  
    constructor() {
      this.productRepo = AppDataSource.getRepository(Product);
    }
  
    save = async (Product: Partial<Product>) => await this.productRepo.save(Product);
    
    all = async () => await this.productRepo.find();
  
    findOne = async (payload: object) => {
      return await this.productRepo.findOneBy({ ...payload });
    };

    retrieve = async (payload: object) => await this.productRepo.findOneBy({...payload});

    delete = async (id: string): Promise<DeleteResult> => await this.productRepo.delete(id);
  
  }
  
  export default new ProductRepository();