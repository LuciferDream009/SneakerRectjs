import React from 'react';
import { Button } from 'antd';

const ButtonProfile = ({ onClick, size, styleButton, textbutton, styleTextButton }) => {
    return (
        <Button
            onClick={onClick}
            style={{
                ...styleButton,
                fontSize: styleTextButton?.fontSize,
                color: styleTextButton?.color,
                fontWeight: styleTextButton?.fontWeight,
                padding: styleButton?.padding,
                borderRadius: styleButton?.borderRadius,
                height: styleButton?.height,
                width: styleButton?.width
            }}
            size={size ? size : 'default'}
        >
            {textbutton}
        </Button>
    );
};

export default ButtonProfile;
