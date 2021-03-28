import React from 'react'
import './Product.css'
import { ProductDTO } from '../../Dto/ProductDTO'
import { ToReal, ZeroPad } from '../../Helpers'
import Strings from '../../Strings/Index'

interface ProductData {
    data: ProductDTO,
    addFunction: Function
}

export const Product = (props : ProductData) => {

    const data = props.data

    const style = {
        backgroundImage: `url('${data.image}')`
    }

    return(
        <div className="product">
            <div className="photoframe">
                <div className="photo" style={style} />
                <div className="name">{data.name}</div>
                <div className="code">Cód: {ZeroPad(data.id, 5)}</div>
                <div className="price">{ToReal(data.price)}</div>
                <button className='btn-add-to-cart' onClick={() => props.addFunction(data)} >{Strings.get().addToCart}</button>
            </div>
        </div>
    )
}
