import React, { useState } from 'react';
import { WrapperStyleInput } from './style';

const InputForm = (props) => {
    const [valueInput] = useState('')
   const {placeholder = 'Nhap text',...rests} = props
    return (
        <WrapperStyleInput placeholder={placeholder} valueInput={valueInput} {...rests}/>
    )
}

export default InputForm