import React, { useEffect } from 'react'
import { Container, Header } from '../../Components'
import { InitView } from '../../Helpers'
import Strings from '../../Strings/Index'
import './HomeView.css'
import { ProductList } from './ProductsList/ProductList'

export const HomeView = () => {

    useEffect(() => {
        InitView({
            pageName: Strings.get().productsViewName
        })
    })

    return (
        <>
            <Header/>
            <Container component={ProductList} />
        </>
    )

}