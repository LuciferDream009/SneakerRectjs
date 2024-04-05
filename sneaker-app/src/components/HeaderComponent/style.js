import styled from 'styled-components'
import { Row } from 'antd'
export const WrapperHeader = styled(Row)`
    padding: 10px 20px;
    background-color: #0a437f;
    align-items: center;
    gap:16px;
    flex-wrap:nowrap;
`
export const WrapperHeaderText = styled.span`
    font-size:18px;
    font-weight:bold;
    color: #fff;

`

export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    gap:10px;
`

export const WrapperHeaderTextSmall = styled.span`
    fontSize:'12px';
    color: #fff;
    white-space: nowrap;
`