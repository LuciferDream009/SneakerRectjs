import React from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import CartComponent from '../../components/CartComponent/CartComponent'
import { Row } from 'antd'
import { WrapperNavbar, WrapperProducts } from './style'
const TypeProductPage = () => {
    return (
        <Row style={{padding:'0 120px', background:'#efefef', flexWrap:'nowrap', paddingTop:'10px', paddingBottom:'10xp'}}>
            <WrapperNavbar span={4}>
                <NavbarComponent />
            </WrapperNavbar>
            <WrapperProducts span={20}>
                <CartComponent />
                <CartComponent />
                <CartComponent />
                <CartComponent />
                <CartComponent />
                <CartComponent />
                <CartComponent />
                <CartComponent />
                <CartComponent />
                <CartComponent />
                <CartComponent />
                <CartComponent />
                
            </WrapperProducts>


        </Row>
    )
}

export default TypeProductPage