import React, { useEffect, useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLeft } from './style'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { Image } from 'antd'
import InputForm from '../../components/InputForm/InputForm'
import { useNavigate } from 'react-router-dom'
import * as UserService from '../../service/UserService'
import { useMutationHooks} from '../../hooks/useMutationHook'
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux'
import { updateUser } from '../../redux/userSlide'

const SignInPage = () => {
  const navigate = useNavigate()
  const handleNavigateSignUp = () => {
    navigate('/sign-up')
  }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleOnchangeEmail = (value) => {
    setEmail(value)
  }
  const handleOnchangePassword = (value) => {
    setPassword(value)
  }
  const mutation = useMutationHooks(
    data => UserService.loginUser(data)
  )

  const { data, isSuccess } = mutation

  useEffect(() => {
    if (isSuccess) {
      navigate('/')
      localStorage.setItem('access_token', JSON.stringify(data?.access_token))
      if(data?.access_token) {
        const decoded = jwtDecode(data?.access_token)
          console.log('decoded', decoded);
          if (decoded?.id ) {
            handleGetDetailUser(decoded?.id, data?.access_token)
          }
      }
    }
  }, [isSuccess]);

  const handleGetDetailUser = async (id, token) => {
    const res = await UserService.getDatailsUser(id, token)
    dispatch(updateUser({...res?.data, access_token: token}))
    console.log('res', res)
  }

  const handleOnchageSignIn = () => {
    mutation.mutate({
      email,
      password
    })
  }
  

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundImage: 'linear-gradient(-135deg, rgb(200, 80, 192), rgb(65, 88, 208))' }}>
      <div style={{ width: '800px', height: '445px', borderRadius: '10px', backgroundColor: '#fff', display: 'flex' }}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p style={{ fontSize: '16px' }}>Đăng nhập hoặc tạo tài khoản</p>
          <InputForm style={{ marginBottom: '10px' }} placeholder='abc@gmail.com' value={email} onChange={handleOnchangeEmail} />
          <InputForm placeholder='password' type='password' value={password} onChange={handleOnchangePassword} />
          {data?.status === 'ERR' && <span style={{color: 'red'}}>{data?.message}</span>}

          <ButtonComponent
            disabled={!email.length || !password.length }
            onClick={handleOnchageSignIn}
            size={40}
            styleButton={{ backgroundColor: 'rgb(255,57,69)', height: '48px', width: '100%', border: 'none', margin: '26px 0 10px' }}
            textButton={'ĐĂNG NHẬP'}
            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
          ></ButtonComponent>
       
          <p><WrapperTextLeft>Quên mật khẩu?</WrapperTextLeft></p>
          <p>Chưa có tài khoản? <WrapperTextLeft onClick={handleNavigateSignUp}> Tạo tài khoản</WrapperTextLeft></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src='https://colorlib.com/etc/lf/Login_v1/images/img-01.png' preview={false} alt='img-login' height='289px' width='300px' />
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignInPage