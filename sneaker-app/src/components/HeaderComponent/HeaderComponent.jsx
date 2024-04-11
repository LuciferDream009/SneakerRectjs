import React from 'react'
import { Col, Badge } from 'antd'
import { WrapperHeader, WrapperHeaderText, WrapperHeaderAccount, WrapperHeaderTextSmall } from './style'
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
export const HeaderComponent = () => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const handleNavigateLogin = () => {
        navigate('/sign-in')
    }
    return (
        <div>
            <WrapperHeader gutter={16}>
                <Col span={5}>
                    <WrapperHeaderText>
                        BANGIAYNOSKILL
                    </WrapperHeaderText>
                </Col>
                <Col span={13}>
                    <ButtonInputSearch
                        size='Default'
                        placeholder='Nhập từ khóa tìm kiếm'
                        textButton='Tìm kiếm'
                        bordered={false}
                    //  onSearch={onSearch}
                    />
                </Col>
                <Col span={6} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{ fontSize: '30px' }} />
                        {user?.name ? (
                            <div style={{cursor:'pointer'}}>
                                {user.name}
                            </div>
                        ) : (
                            <div onClick={handleNavigateLogin} style={{cursor:'pointer'}}>
                            <WrapperHeaderTextSmall >Đăng nhập / Đăng ký</WrapperHeaderTextSmall>
                            <div>
                                <WrapperHeaderTextSmall>Tài Khoản</WrapperHeaderTextSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                        )}
                    
                    </WrapperHeaderAccount>
                    <div>
                        <Badge count={4} size={'small'}>
                            <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />

                        </Badge>
                        <WrapperHeaderTextSmall>Giỏ hàng</WrapperHeaderTextSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}
