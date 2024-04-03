import React from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const ButtonInputSearch = (props) => {
  const { size, placeholder, textButton } = props;

  const customStyles = {
    display: 'flex',
    alignItems: 'center', // Ensure vertical alignment
    border: 'none', // Remove default border 
  };

  const buttonStyles = {
    borderLeft: 'none', // Remove left border for seamless connection
    marginLeft: '-8px',
    borderTopLeftRadius: 0, // Loại bỏ border-radius góc trên bên trái
    borderBottomLeftRadius: 0, // Loại bỏ border-radius góc dưới bên trái
  };

  return (
    <div style={customStyles}>
      <Input size={size} placeholder={placeholder} />
      <Button size={size} type="primary" icon={<SearchOutlined />} style={buttonStyles}>
        {textButton}
      </Button>
    </div>
  );
};

export default ButtonInputSearch;
