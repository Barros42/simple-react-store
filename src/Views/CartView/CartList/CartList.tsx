import React, { useEffect, useState } from 'react'
import './CartList.css'
import { CartProduct } from '../../../Components'
import { ProductCartDTO } from '../../../Dto/ProductCartDTO'
import Strings from '../../../Strings/Index'
import { AddToCartUseCase } from '../../../UseCases/Cart/AddToCartUseCase'
import { DeleteFromCartUseCase } from '../../../UseCases/Cart/DeleteFromCartUseCase'
import { GetCartUseCase } from '../../../UseCases/Cart/GetCartUseCase'
import { RemoveFromCartUseCase } from '../../../UseCases/Cart/RemoveFromCartUseCase'
import { ToReal } from '../../../Helpers'

export const CartList = () => {

    const deleteFromCartUseCase = new DeleteFromCartUseCase()
    const addToCartUseCase = new AddToCartUseCase()
    const removeFromCartUseCase = new RemoveFromCartUseCase()
    const getCartUseCase = new GetCartUseCase()
    
    const [cartList, setCartList] = useState<ProductCartDTO[]>([])

    useEffect(() => {
        loadCurrentCart()
    })
    
    const loadCurrentCart = (forceReload: boolean = false) => {
        if(!cartList.length || forceReload){
            const currentCart = getCartUseCase.run()
            setCartList(currentCart)
        }
    }

    const removeFromCart = (product: ProductCartDTO): void => {
        removeFromCartUseCase.run(product)
        loadCurrentCart(true)
    }

    const deleteItemFromCart = (product: ProductCartDTO): void => {
        deleteFromCartUseCase.run(product)
        loadCurrentCart(true)
    }

    const addToCart = (product: ProductCartDTO): void => {
        addToCartUseCase.run(product)
        loadCurrentCart(true)
    }
    
    const getTotal = (): string => {
        const currentCart = getCartUseCase.run()

        const values = currentCart.map(productCart => {
            return Number((Number(productCart.price) * productCart.quantity).toFixed(2))
        })

        return ToReal(values.reduce((a, b) => a + b, 0).toFixed(2))
    }

    return( 
        <div id="liven-cart-list">
            <div id="page-name">{Strings.get().cartViewName}</div>
            <div className="line-divider"/>

            <div id='cart-list-items'>
            {(!cartList.length) && <div id='cart-is-empty'>{Strings.get().cartIsEmpty}</div> }
               {
                    cartList.map(product => 
                        <CartProduct 
                            key={product.id} 
                            data={product}
                            deleteFunction={deleteItemFromCart}
                            addFunction={addToCart}
                            removeFunction={removeFromCart}
                        />)
                } 
            </div>

            <div id="cart-total">
                <div className="cart-total-line">
                    <div className="key">{Strings.get().subTotal}</div>
                    <div className="value">{getTotal()}</div>
                </div>
                <div className="cart-total-line">
                    <div className="key">{Strings.get().total}</div>
                    <div className="value">{getTotal()}</div>
                </div>
                
                <button id='btn-checkout' disabled={!cartList.length} >{Strings.get().checkout}</button>

            </div>


        </div>
    )

}