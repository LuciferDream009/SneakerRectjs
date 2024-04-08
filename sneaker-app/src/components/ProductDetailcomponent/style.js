import styled from 'styled-components'
import { Image, Col, InputNumber } from 'antd'

export const WrapperStyleImageSmall = styled(Image)`
    height:64px;
    width:64px;
    
`
export const WrapperStyleColImage = styled(Col)`
    flex-basis: unset;
    display:flex;
`
export const WrapperStyleNameProduct = styled.h1`
    color: rgb(36, 36, 36);
    line-height:32px;
    font-size:16px;
    font-weight:700;
    word-break: break-word;
`

export const WrapperStyleTextSell = styled.span`
    font-size:15px;
    line-height:24px;
    color:rgb(120,120,120);
`

export const WrapperPriceProduct = styled.div`
    background-color:rgb(250,250,250);
    border-radius:4px;
`
export const WrapperTextProduct = styled.h1`
    color: rgba(226, 41, 61, 1);
    line-height:40px;
    font-size:32px;
    font-weight:500;
    padding:10px;
    margin-top:10px;
`

export const WrapperTextSizeProduct = styled.div`
    span.text {
        display: flex;
        max-width: 9999px;
        padding-bottom: 7px;
        justify-content: flex-start;
    }
`

export const WrapperQualityProduct = styled.div`
    display:flex;
    gap: 4px;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 2px;
    width: 120px;
`


export const WrapperInputNumber = styled(InputNumber)`
    .ant-input-number-handler-wrap {
        display: none;  
    }
    width:60px;
    border-radius:0;
    border-top:none ;
    border-bottom:none ;
`