import { ProductDTO } from "./ProductDTO";

export class ProductCartDTO extends ProductDTO {
    quantity!: number

    constructor(data: Partial<ProductDTO>, quantity: number) {
        super(data);
        this.quantity = quantity
    }
    

}