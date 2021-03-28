import { ProductCartDTO } from "../../Dto/ProductCartDTO";
import { ProductDTO } from "../../Dto/ProductDTO";
import { LocalStorageService, LocalStorageServiceKeys } from "../../Services/LocalStorageService";

export class RemoveFromCartUseCase {

    run(product: ProductDTO): void {

        const defaultProductQuantity = 1
        let currentCartString: string | null = LocalStorageService.get(LocalStorageServiceKeys.USER_CART)

        if(!currentCartString) {
            return
        }

        let currentCart: ProductCartDTO[] = JSON.parse(currentCartString)

        currentCart = this.removeProductItemFromCart(product, currentCart, defaultProductQuantity)

        LocalStorageService.setObject(LocalStorageServiceKeys.USER_CART, currentCart)
    }
    
    private removeProductItemFromCart(product: ProductDTO, currentCart: ProductCartDTO[], quantity: number): ProductCartDTO[] {

        const itemExists = this.productAlreadyInCart(product, currentCart)

        if(itemExists) {
            currentCart = currentCart.map((productCart: ProductCartDTO) => {
                if(product.id === productCart.id){
                    const newQuantity = (productCart.quantity - 1)
                    productCart.quantity = (newQuantity <= 0) ? 1 : newQuantity
                }
                return productCart
            })
        }

        return currentCart
        
    }

    private productAlreadyInCart(product: ProductDTO, currentCart: ProductCartDTO[]): boolean {
        return !!currentCart.find(cartProduct => product.id === cartProduct.id)
    }


}