import React from 'react'
import { Col, Row, Image, Radio } from 'antd'
import { WrapperTextSizeProduct, WrapperPriceProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell, WrapperTextProduct, WrapperQualityProduct, WrapperInputNumber } from './style'
import { StarFilled, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
const ProductDetailComponent = () => {
    const onChange = () => { };
    return (
        <Row style={{ padding: '16px', background: '#fff' }}>
            <Col span={10} style={{borderRight:'1px solid #e5e5e5', paddingRight:'10px'}}>
                <Image src='https://myshoes.vn/image/cache/catalog/2024/nike/nk3/giay-nike-interact-run-nam-den-trang-01-800x800.jpg' alt='img product' preview={false} />
                <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src='https://myshoes.vn/image/cache/catalog/2024/nike/nk3/giay-nike-interact-run-nam-den-trang-07-800x800.jpg' alt='img product small' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src='https://myshoes.vn/image/cache/catalog/2024/nike/nk3/giay-nike-interact-run-nam-den-trang-07-800x800.jpg' alt='img product small' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src='https://myshoes.vn/image/cache/catalog/2024/nike/nk3/giay-nike-interact-run-nam-den-trang-07-800x800.jpg' alt='img product small' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src='https://myshoes.vn/image/cache/catalog/2024/nike/nk3/giay-nike-interact-run-nam-den-trang-07-800x800.jpg' alt='img product small' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src='https://myshoes.vn/image/cache/catalog/2024/nike/nk3/giay-nike-interact-run-nam-den-trang-07-800x800.jpg' alt='img product small' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src='https://myshoes.vn/image/cache/catalog/2024/nike/nk3/giay-nike-interact-run-nam-den-trang-07-800x800.jpg' alt='img product small' preview={false} />
                    </WrapperStyleColImage>

                </Row>
            </Col>
            <Col span={14} style={{paddingLeft: '10px'}}>
                <WrapperStyleNameProduct>GIÀY NIKE INTERACT RUN NAM - XANH TRẮNG</WrapperStyleNameProduct>
                <div>
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
                    <WrapperStyleTextSell> | Đã bán 100+</WrapperStyleTextSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperTextProduct>
                        2.090.000₫
                    </WrapperTextProduct>
                </WrapperPriceProduct>
                <WrapperTextSizeProduct>
                    <span className='text'>Chon size</span>
                    <Radio.Group onChange={onChange} defaultValue="a">
                        <Radio.Button value="a">41</Radio.Button>
                        <Radio.Button value="b">42</Radio.Button>
                        <Radio.Button value="c">43</Radio.Button>
                        <Radio.Button value="d">44</Radio.Button>
                    </Radio.Group>

                </WrapperTextSizeProduct>
                <div style={{margin:'10px 0 20px', borderTop:'1px solid #e5e5e5',borderBottom:'1px solid #e5e5e5', padding:'10px 0'}}>
                    <div style={{marginBottom:'10px'}}> So luong</div>
                    <WrapperQualityProduct>
                       <button style={{border:'none', background:'transparent'}}>

                            <MinusOutlined style={{color: '#000', fontSize:'20px'}}/>
                       </button>
                        
                        <WrapperInputNumber defaultValue={3} onChange={onChange} />
                      <button style={{border:'none', background:'transparent'}}>

                            <PlusOutlined  style={{color: '#000', fontSize:'20px'}}/>
                      </button>
                        
                    </WrapperQualityProduct>
                </div>
                <div style={{display:'flex', alignItems:'center', gap: '12px'}}>
                <ButtonComponent 
                size={40}  
                 styleButton={{backgroundColor: 'rgb(255,57,69)', height:'48px', width:'220px', border:'none'}}  
                 textButton={'Chọn Mua'}
                 styleTextButton={{color:'#fff',fontSize:'15px', fontWeight:'700'}}
                 />
                 <ButtonComponent 
                size={40}
                 styleButton={{backgroundColor: '#fff', height:'48px', width:'220px', border:'1px solid rgb(13, 92, 182)'}}  
                 textButton={'Mua truoc tra sau'}
                 styleTextButton={{color:'rgb(13, 92, 182)', fontSize:'15px'}}
                 />
                </div>

            </Col>
        </Row>
    )
}

export default ProductDetailComponent