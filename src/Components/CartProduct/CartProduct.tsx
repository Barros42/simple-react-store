import React from 'react'
import { ProductCartDTO } from '../../Dto/ProductCartDTO'
import { ToReal } from '../../Helpers'
import './CartProduct.css'

interface CartProductData {
    data: ProductCartDTO,
    deleteFunction: Function,
    addFunction: Function,
    removeFunction: Function
}

export const CartProduct = (props: CartProductData) => {

    const data = props.data

    const style: React.CSSProperties = {
        backgroundImage: `url('${data.image}')`
    }
    

    return(
        <div className="cart-product">
            <div className="cart-photo" style={style}/>
            <div className="cart-name">{data.name}</div>
            <div className="cart-price">
                <div className="cart-price-half unit">1 un {ToReal(data.price)}</div>
                <div className="cart-price-half">{data.quantity} un {ToReal(data.quantity * Number(data.price))}</div>
            </div>
            <div className="cart-buttons">
                <div className="cart-buttons-container">
                    <button disabled={data.quantity === 1} className='quantity-button minus' onClick={() => props.removeFunction(data)}>-</button>
                    <div className="quantity">{data.quantity}</div>
                    <button disabled={data.quantity === data.stock} className='quantity-button plus' onClick={() => props.addFunction(data)} >+</button>
                </div>
            </div>
            <div className="cart-remove-item" onClick={() => props.deleteFunction(data)}/>
        </div>
    )

}