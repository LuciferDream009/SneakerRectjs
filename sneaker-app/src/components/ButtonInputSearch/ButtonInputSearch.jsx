import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButtonInputSearch = (props) => {
  const { size, placeholder, textButton, bodered } = props;

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
      <InputComponent size={size} placeholder={placeholder} bodered={bodered}/>
      <ButtonComponent size={size} type="primary" icon={<SearchOutlined />} style={buttonStyles}  textButton={textButton}/>
       
    </div>
  );
};

export default ButtonInputSearch;
