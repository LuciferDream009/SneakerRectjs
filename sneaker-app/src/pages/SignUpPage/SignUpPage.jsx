import React, { useEffect, useState } from 'react'
import { WrapperContainerLeft } from '../SignInPage/style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { WrapperContainerRight, WrapperTextLeft } from './style'
import { Image } from 'antd'
import { useNavigate } from 'react-router-dom'
import * as UserService from '../../service/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook'
import * as messages from '../../components/Message/Message'

const SignUpPage = () => {
  const navigate = useNavigate()
  const handleNavigateSignIn = () => {
    navigate('/sign-in')
  }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')


  const handleOnchangeEmail = (value) => {
    setEmail(value)
  }
  const handleOnchangePassword = (value) => {
    setPassword(value)
  }
  const handleOnchangeRepeatPass = (value) => {
    setconfirmPassword(value)
  }
  const mutation = useMutationHooks(
    data => UserService.signupUser(data)
  )

  const {data, isSuccess, isError} = mutation

  useEffect(() => {
    if (isSuccess) {
      messages.success()
      handleNavigateSignIn()
    } else if (isError) {
      messages.error()
    }

  }, [isSuccess, isError])



  const handleOnchageSignup = () => { 
    mutation.mutate(
      {
        email, password, confirmPassword
      }
    )
    console.log('sign-up', email, password, confirmPassword)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundImage: 'linear-gradient(-135deg, rgb(200, 80, 192), rgb(65, 88, 208))' }}>
      <div style={{ width: '800px', height: '445px', borderRadius: '10px', backgroundColor: '#fff', display: 'flex' }}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p style={{ fontSize: '16px' }}>Tạo tài khoản</p>
          <InputForm style={{ marginBottom: '10px' }} placeholder='abc@gmail.com' value={email} onChange={handleOnchangeEmail} type='text'/>
          <InputForm style={{ marginBottom: '10px' }} placeholder='Enter Password' type='password' value={password} onChange={handleOnchangePassword}/>
          <InputForm placeholder='Repeat Password' type='password' value={confirmPassword} onChange={handleOnchangeRepeatPass} />
          {data?.status === 'ERR' && <span style={{color:'red'}}>{data?.message}</span>}
         
          <ButtonComponent
            disabled={!email.length || !password.length || !confirmPassword.length}
            onClick={handleOnchageSignup}
            size={40}
            styleButton={{ backgroundColor: 'rgb(255,57,69)', height: '48px', width: '100%', border: 'none', margin: '26px 0 10px' }}
            textButton={'ĐĂNG KÝ'}
            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
          />
        
          <p>Bạn đã có tài khoản? <WrapperTextLeft onClick={handleNavigateSignIn}> Đăng nhập</WrapperTextLeft></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src='https://colorlib.com/etc/lf/Login_v1/images/img-01.png' preview={false} alt='img-login' height='289px' width='300px' />
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignUpPage