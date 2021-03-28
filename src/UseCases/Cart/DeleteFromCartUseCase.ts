import { ProductCartDTO } from "../../Dto/ProductCartDTO";
import { ProductDTO } from "../../Dto/ProductDTO";
import { LocalStorageService, LocalStorageServiceKeys } from "../../Services/LocalStorageService";

export class DeleteFromCartUseCase {

    run(product: ProductDTO): void {

        let currentCartString: string | null = LocalStorageService.get(LocalStorageServiceKeys.USER_CART)

        if(!currentCartString) {
           return
        }

        let currentCart: ProductCartDTO[] = JSON.parse(currentCartString)

        currentCart = this.removeFromCart(product, currentCart)

        LocalStorageService.setObject(LocalStorageServiceKeys.USER_CART, currentCart)
    }
    
    private removeFromCart(product: ProductDTO, currentCart: ProductCartDTO[]): ProductCartDTO[] {
        return currentCart.filter(cartProduct => cartProduct.id !== product.id)
    }

}