import { ProductCartDTO } from "../../Dto/ProductCartDTO";
import { ProductDTO } from "../../Dto/ProductDTO";
import { LocalStorageService, LocalStorageServiceKeys } from "../../Services/LocalStorageService";

export class AddToCartUseCase {

    run(product: ProductDTO): void {

        const defaultProductQuantity = 1
        let currentCartString: string | null = LocalStorageService.get(LocalStorageServiceKeys.USER_CART)

        if(!currentCartString) {
            const newCard: ProductCartDTO[] = [new ProductCartDTO(product, defaultProductQuantity)]
            return LocalStorageService.setObject(LocalStorageServiceKeys.USER_CART, newCard)
        }

        let currentCart: ProductCartDTO[] = JSON.parse(currentCartString)

        currentCart = this.addProductInCart(product, currentCart, defaultProductQuantity)

        LocalStorageService.setObject(LocalStorageServiceKeys.USER_CART, currentCart)
    }
    
    private addProductInCart(product: ProductDTO, currentCart: ProductCartDTO[], quantity: number): ProductCartDTO[] {

        const itemAlreadyExist = this.productAlreadyInCart(product, currentCart)

        if(!itemAlreadyExist) {
            currentCart.push(new ProductCartDTO(product, quantity))
        } else {
            currentCart = currentCart.map((productCart: ProductCartDTO) => {
                if(product.id === productCart.id){
                    let newQuantity = (productCart.quantity + 1)
                    productCart.quantity = (newQuantity > productCart.stock) ? productCart.stock : newQuantity
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