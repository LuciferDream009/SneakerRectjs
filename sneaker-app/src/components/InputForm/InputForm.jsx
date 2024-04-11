import React from 'react';
import { WrapperStyleInput } from './style';

const InputForm = (props) => {
   const {placeholder = 'Nhap text',...rests} = props
   const handleOnchangeInput = (e) => {
     props.onChange(e.target.value)
   }
    return (
        <WrapperStyleInput placeholder={placeholder} value={props.value} {...rests} onChange={handleOnchangeInput}/>
    )
}

export default InputForm