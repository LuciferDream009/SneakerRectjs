import React from 'react'
import { Col, Badge, Popover } from 'antd'
import { WrapperHeader, WrapperHeaderText, WrapperHeaderAccount, WrapperHeaderTextSmall, WrapperContentPopup } from './style'
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import * as UserService from '../../service/UserService'
import { resetUser} from '../../redux/userSlide'
export const HeaderComponent = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    const handleNavigateLogin = () => {
        navigate('/sign-in')
    }
    const handleLogout = async () => {
        await UserService.logoutUser()
        dispatch(resetUser())
     }

    const handleNavigateHome = () => { 
        navigate('/')
    }

    

    const content = (
        <div>
          <WrapperContentPopup onClick={handleLogout}>Đăng xuất</WrapperContentPopup>
          <WrapperContentPopup onClick={() => navigate('/profile-user')}>Thông tin người dùng</WrapperContentPopup>
        </div>
      );
    return (
        <div>
            <WrapperHeader gutter={16}>
                <Col span={5}>
                    <WrapperHeaderText onClick={handleNavigateHome} style={{cursor:'pointer'}}>
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
                            <>
                                <Popover content={content}  trigger="click">
                                <div style={{ cursor: 'pointer' }}>
                                    {user.name}
                                </div>
                                </Popover>
                            </>
                        ) : (
                            <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
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
