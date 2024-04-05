import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText } from './style'
import { StarFilled } from '@ant-design/icons'

const CartComponent = () => {
    return (
        <WrapperCardStyle
            hoverable
            headStyle={{width: '200px', height: '200px'}}
            style={{ width: 200 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src="https://kingshoes.vn/data/upload/media/fz3593-133-giay-nike-air-max-excee-gia-tot-den-king-shoes-12.jpeg" />}
        >
            <img src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png" alt='Discount badge' style={{ width:'68px', height:'14px',position:'absolute', top:-1, left:-1}} />
            <StyleNameProduct>Product 1</StyleNameProduct>
            <WrapperReportText>
                <span style={{marginRight: '4px'}}>
                    <span>4.95</span> <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                </span>
                <span> | Đã bán 100+</span>
            </WrapperReportText>
            <WrapperPriceText>
                1.000.0000 vnd
                <WrapperDiscountText>
                    -5%
                </WrapperDiscountText>
                </WrapperPriceText>
        </WrapperCardStyle>
    )
}

export default CartComponent