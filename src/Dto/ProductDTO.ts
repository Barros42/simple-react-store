export class ProductDTO {
    id!: string
    createdAt!: string
    name!: string
    price!: string
    stock!: number
    image!: string

    constructor(data: Partial<ProductDTO>){
        Object.assign(this, data)
    }

}