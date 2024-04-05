import React from 'react'
import { WrapperContent, WrapperTextPrice, WrapperTextValue, WrappperLabelText } from './style'
import { Checkbox, Rate } from 'antd';

const NavbarComponent = () => {
    const onChange = () => { }
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option) => {
                    return (

                        <WrapperTextValue>{option}</WrapperTextValue>

                    )
                })
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column' }} onChange={onChange}>
                        {options.map((option) => {
                            return (
                                <Checkbox value={option.value}>{option.label}</Checkbox>
                            )
                        })}
                        <Checkbox value="Titulo">Titulo</Checkbox>
                    </Checkbox.Group>
                )
            case 'star':
                return options.map((option) => {
                    return (
                        <div style={{ display: 'flex' }}>
                            <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
                            <span> {`Tu ${option} sao`}</span>
                        </div>
                    )
                })
            case 'price':
                return options.map((option) => {
                    return (
                        <WrapperTextPrice >
                            {option}
                        </WrapperTextPrice>
                    )
                })
            default:
                return {}
        }
    }
    return (
        <div >
            <WrappperLabelText>
                Label
            </WrappperLabelText>
            <WrapperContent>
                {renderContent('text', ['Adidas', 'Titulo', 'Nome', 'Nike', 'Yezzy'])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('checkbox', [
                    { value: 'a', label: 'A' },
                    { value: 'b', label: 'B' }
                ])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('star', [3, 4, 5])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('price', ['duoi 1tr', 'tren 1tr'])}
            </WrapperContent>
        </div>
    )
}

export default NavbarComponent