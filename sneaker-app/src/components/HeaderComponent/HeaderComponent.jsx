import React from 'react'
import { Col } from 'antd'
import { WrapperHeader, WrapperHeaderText, WrapperHeaderAccount, WrapperHeaderTextSmall } from './style'
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
export const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader gutter={16}>
                <Col span={6}>
                    <WrapperHeaderText>
                        BANGIAYNOSKILL
                    </WrapperHeaderText>
                </Col>
                <Col span={12}>
                    <ButtonInputSearch     
                    size='Default'
                    placeholder='Nhập từ khóa tìm kiếm' 
                    textButton='Tìm kiếm'   
                    allowClear='true'           
                    //  onSearch={onSearch}
                    />
                </Col>
                <Col span={6} style={{ display: 'flex', gap: '20px', alignItems:'center'}}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{ fontSize: '30px' }} />
                        <div>
                            <WrapperHeaderTextSmall >Đăng nhập / Đăng ký</WrapperHeaderTextSmall>
                            <div>
                                <WrapperHeaderTextSmall>Tài Khoản</WrapperHeaderTextSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                    <div>
                        <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
                        <WrapperHeaderTextSmall>Giỏ hàng</WrapperHeaderTextSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}
