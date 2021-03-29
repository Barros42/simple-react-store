import { IStrings } from "./IStrings";

export class PortugueseDictionary implements IStrings {
    
    // App Strings
    readonly appName: string = 'Feiticeira Escarlate'

    // App View Name
    readonly productsViewName: string = 'Produtos'
    readonly cartViewName: string = 'Carrinho'

    // Buttons
    readonly addToCart: string = 'Adicionar ao Carrinho'
    readonly checkout: string = 'Finalizar Compra'
    readonly cartIsEmpty: string = 'Seu carrinho está vazio'

    // Placeholders
    readonly isLoading: string = 'Carregando...'
    readonly moneySymbol: string = 'R$'

    // Texts
    readonly subTotal: string = 'Subtotal'
    readonly total: string = 'Total'
    readonly addedWithSuccess: string = 'Adicionado com sucesso!'

    static get() { return new this(); }

}