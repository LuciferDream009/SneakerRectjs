import React from 'react'
import { Input } from 'antd';
const InputComponent = ({size, placeholder, bodered, ...rests}) => {
  return (
    <Input
        size={size}
        placeholder={placeholder}
        bodered={bodered}
        {...rests}
    />
    
  )
}

export default InputComponent