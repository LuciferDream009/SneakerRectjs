import React from 'react'
import {  Button } from 'antd';
const ButtonComponent = ({size, textButton,style, ...rests}) => {
    
  return (
    <Button size={size} type="primary" style={style} {...rests}>
    {textButton}

  </Button>
  )
}

export default ButtonComponent