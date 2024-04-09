import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import Slider1 from '../../assets/images/Slider1.png'
import Slider2 from '../../assets/images/Slider2.png'
import Slider3 from '../../assets/images/Slider3.png'
import CartComponent from '../../components/CartComponent/CartComponent'
//import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
function HomePage() {
  const arr = ['NIKE', 'JORDAN', 'ADIDAS', 'YEZZY']
  return (
    <>
      <div style={{ padding: '0 120px' }}>
        <WrapperTypeProduct >
          {arr.map((item) => {
            return (
              <TypeProduct name={item} key={item} />
            )
          })}
        </WrapperTypeProduct>
      </div>
     <div className="body"  style={{ backgroundColor: '#efefef', width: '100%'}}>
     <div id='container' style={{ height:'1000px', margin:'0 auto', width:'1270px' }}>
        <SliderComponent arrImages={[Slider1, Slider2, Slider3]} />
        <WrapperProducts> 
          <CartComponent />
          <CartComponent />
          <CartComponent />
          <CartComponent />
          <CartComponent />
          <CartComponent />
          <CartComponent />
          <CartComponent />
          <CartComponent />
          <CartComponent />
        </WrapperProducts>
         <div style={{display: 'flex',width:'100%', justifyContent:"center",marginTop:"10px"}}>
         <WrapperButtonMore textButton='Xem them' type='outline' styleButton={{
            border:'1px solid rgb(11, 116, 229)',
            color:'rgb(11, 116, 229)',
            width:'240px', height:'38px',
          }} 
          styleTextButton={{fontWeight: 500}}/>
         </div>
      </div>
     </div>

    </>

  )
}

export default HomePage