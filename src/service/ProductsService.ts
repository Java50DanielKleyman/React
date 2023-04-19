import { CategoryType } from "../model/CategoryType";
import { ProductType } from "../model/ProductType";

export default interface ProductsService {
    addProduct (product: ProductType): Promise<void>;
    addCategory(category: CategoryType): Promise<void>;
    removeProduct(id: string): Promise<void>;
    removeCategory(category: string): Promise<void>;
    isCategoryExist(category: string): Promise<boolean>;
    setProducts(): Promise<number>;
    getCategoriesCount(): Promise<number>;
}