import React from 'react'
import { WrapperContainerLeft } from '../SignInPage/style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { WrapperContainerRight, WrapperTextLeft } from './style'
import {Image} from 'antd'

const SignUpPage = () => {
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'100vh', backgroundImage:'linear-gradient(-135deg, rgb(200, 80, 192), rgb(65, 88, 208))' }}>
      <div style={{ width: '800px', height: '445px', borderRadius: '10px', backgroundColor: '#fff', display:'flex'}}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p style={{fontSize:'16px'}}>Tạo tài khoản</p>
          <InputForm style={{marginBottom: '10px'}} placeholder='abc@gmail.com' />
          <InputForm style={{marginBottom: '10px'}} placeholder='Enter Password' type='password' />
          <InputForm placeholder='Repeat Password' type='password'/>
          <ButtonComponent
            size={40}
            styleButton={{ backgroundColor: 'rgb(255,57,69)', height: '48px', width: '100%', border: 'none',margin: '26px 0 10px'}}
            textButton={'ĐĂNG KÝ'}
            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
          />
          <p>Bạn đã có tài khoản? <WrapperTextLeft> Đăng nhập</WrapperTextLeft></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src='https://colorlib.com/etc/lf/Login_v1/images/img-01.png' preview={false} alt='img-login' height='289px' width='300px'/>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignUpPage