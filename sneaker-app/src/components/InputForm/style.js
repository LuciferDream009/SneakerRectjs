import styled from 'styled-components'
import { Input } from 'antd'
export const WrapperStyleInput = styled(Input)`
    border-top: none;
    border-right: none;
    border-left: none;
    outline: none;
    &:focus {
        background-color: rgba(232, 240, 254);
    }
`