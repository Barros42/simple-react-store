import React from 'react'
import { useHistory } from 'react-router'
import App from '../../Core/App'
import { RoutePaths } from '../../Router/RoutePaths'
import './Header.css'

export const Header = () => {

    const history = useHistory()

    return (
        <div id='liven-header'>
           <div id="liven-header-container">
                <div id='logo' onClick={() => history.push(RoutePaths.HOME)}/>
                <div id="cart" onClick={() => history.push(RoutePaths.CART)}>
                    Ir para o carrinho
                    <div id="cart-icon"/>
                </div>
           </div>
           <div id="name">{App.appName}</div>
        </div>
    )

}
