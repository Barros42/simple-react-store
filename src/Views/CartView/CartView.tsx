import React, { useEffect } from 'react'
import { Container, Header } from '../../Components'
import { InitView } from '../../Helpers'
import Strings from '../../Strings/Index'
import { CartList } from './CartList/CartList'
import './CartView.css'

export const CartView = () => {

    useEffect(() => {
        InitView({
            pageName: Strings.get().cartViewName
        })
    })

    return (
        <>
            <Header/>
            <Container component={CartList} />
        </>
    )

}