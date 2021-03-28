import { ProductDTO } from "../../Dto/ProductDTO";
import ApiRoutes from "../../External/ApiRoutes";
import { HttpService } from "../../Services/HttpService";

export class GetProductsUseCase {

    constructor(
        private readonly httpService: HttpService = new HttpService(),
        private readonly apiRoutes: ApiRoutes = ApiRoutes.get()
    ) {}

    async run(): Promise<ProductDTO[]> {
        
        const response = await this.httpService.get(this.apiRoutes.product).then(response => {
            return response.data.map((product: ProductDTO) => new ProductDTO(product))
        })
 
        return response
        
    }
}