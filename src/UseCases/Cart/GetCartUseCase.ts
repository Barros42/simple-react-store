import { ProductCartDTO } from "../../Dto/ProductCartDTO";
import { LocalStorageService, LocalStorageServiceKeys } from "../../Services/LocalStorageService";

export class GetCartUseCase {
    run(): ProductCartDTO[] {
        const currentCartString = LocalStorageService.get(LocalStorageServiceKeys.USER_CART)

        if(!currentCartString){
            return []
        } 

        const currentCart: ProductCartDTO[] = JSON.parse(currentCartString)

        return currentCart
    }
}