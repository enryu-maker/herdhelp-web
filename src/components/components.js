import React from 'react'
// import addanimal from './addanimals/addanimal'
import Myherd from '../components/myherds/myherds'
import Addanimal from './addanimals/addanimal'

function components() {
  return (
   <>
   <div className='menus'>

<div className='box'>
    
   
      {/* <button >click</button> */}
      <a href={<Myherd/>} >
    <div class="image1">
    <img src={require('../assets/Logo/heart.png')} alt="logo"  />
    <div class="price_text"><h2>MY HERDS</h2></div>
  </div></a>
 
  
  
  <a href={<Addanimal/>}>
    <div class="image1">
    <img src={require('../assets/Logo/pet-care.png')} alt="logo"  />
    <div class="price_text"><h2>ADD ANIMALS</h2></div>
  </div></a>
 
  
  
  <a href='#'>
    <div class="image1">
    <img src={require('../assets/Logo/first-aid-kit.png')} alt="logo"  />
    <div class="price_text"><h2>ADD MEDICATION</h2></div>
  </div></a>
  
  
  
  <a href='#'>
    <div class="image1">
    <img src={require('../assets/Logo/weight-scale.png')} alt="logo"  />
    <div class="price_text"><h2>UPDATE WEIGHT</h2></div>
  </div></a>
 
  
  
  <a href='#'>
    <div class="image1">
    <img src={require('../assets/Logo/money.png')} alt="logo"  />
    <div class="price_text"><h2>FINANCES</h2></div>
  </div></a>
 

  
  <a href='#'> 
    <div class="image1">
    <img src={require('../assets/Logo/bell.png')} alt="logo"  />
    <div class="price_text"><h2>ALERTS</h2></div>
  </div>
  </a>
  
</div>
</div>
   </>
  )
}

export default components