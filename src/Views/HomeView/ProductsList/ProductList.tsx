import React, { useEffect, useState } from 'react'
import './ProductList.css'

import { Product } from '../../../Components'
import Strings from '../../../Strings/Index'
import { GetProductsUseCase } from '../../../UseCases/Home/GetProductsUseCase'
import { ProductDTO } from '../../../Dto/ProductDTO'

// @ts-ignore
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { AddToCartUseCase } from '../../../UseCases/Cart/AddToCartUseCase'


export const ProductList = () : JSX.Element => {

    const addToCartUseCase = new AddToCartUseCase()
    
    const [products, setProducts] = useState<ProductDTO[]>([])

    useEffect(() => {
        loadProducts()
    })

    const loadProducts = async () => {
        if(!products.length){
            const loadedProducts = await new GetProductsUseCase().run()
            setProducts(loadedProducts)
        }
    }

    const addProductToCart = (product: ProductDTO) => {
        NotificationManager.success(Strings.get().addedWithSuccess, null, 1000);
        addToCartUseCase.run(product)
    }

    return(
        <div id='liven-product-list'>
           <div id="page-name">{Strings.get().productsViewName}</div>
           <div className="line-divider"/>

            <div id="products">
                <NotificationContainer/>
                {(!products.length) && <div id='is-loading'>{Strings.get().isLoading}</div> }
                { products.map(productData => <Product key={productData.id} addFunction={addProductToCart}  data={productData}/>) }
            </div>
           
        </div>
    )

}