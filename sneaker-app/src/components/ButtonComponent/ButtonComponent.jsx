import React from 'react'
import {  Button } from 'antd';
const ButtonComponent = ({size, styleTextButton,styleButton,textButton, ...rests}) => {
    
  return (
    <Button size={size} style={{...styleButton}} {...rests}>
    <span style={styleTextButton}>{textButton}</span>

  </Button>
  )
}

export default ButtonComponent