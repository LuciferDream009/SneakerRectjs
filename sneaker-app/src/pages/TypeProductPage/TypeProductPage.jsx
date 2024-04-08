import React from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import CartComponent from '../../components/CartComponent/CartComponent'
import { Col, Row, Pagination } from 'antd'
import { WrapperNavbar, WrapperProducts } from './style'
const TypeProductPage = () => {
    const onChange = () => { };
    return (
        <div style={{ padding: '0 120px', background: '#efefef' }}>
            <Row style={{ flexWrap: 'nowrap', paddingTop: '10px', paddingBottom: '10xp' }}>
                <WrapperNavbar span={4}>
                    <NavbarComponent />
                </WrapperNavbar>
                <Col span={20}>
                    <WrapperProducts>
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
                    <Pagination defaultCurrent={2} total={100} onChange={onChange} style={{textAlign:'center', marginTop: '10px'}}/>
                </Col>
            </Row>
        </ div>
    )
}

export default TypeProductPage