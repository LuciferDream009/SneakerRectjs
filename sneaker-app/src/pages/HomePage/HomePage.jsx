import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import  Slider1  from '../../assets/images/Slider1.png'
import  Slider2  from '../../assets/images/Slider2.png'
import  Slider3  from '../../assets/images/Slider3.png'
function HomePage() {
  const arr = [ 'NIKE', 'JORDAN', 'ADIDAS', 'YEZZY']
  return (
    <>
    <div style={{ padding: '0 120px'}}>
      <WrapperTypeProduct >
      {arr.map((item) => {
        return (
          <TypeProduct name={item} key={item}/>
        )
      })}
      </WrapperTypeProduct>
      </div>
      <div id='container' style={{backgroundColor: '#efefef', padding: '0 120px'}}>
      <SliderComponent arrImages={[Slider1, Slider2, Slider3]}/>
      </div>
    
    </>
    

  )
}

export default HomePage