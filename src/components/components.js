import React from 'react'
import { Link } from 'react-router-dom'



function components() {
  return (
   <>
   <div className='menus'>
     {/* <Route path='/Myherd' components={Myherds}></Route> */}

<div className='box'>
    
      <Link to='/myherds'>
    <div class="image1">
    <img src={require('../assets/Logo/heart.png')} alt="logo"  />
    <div class="price_text"><h2>MY HERDS</h2></div>
  </div>
      </Link>

  
 
  

    <Link to='/addanimals'>
    <div class="image1">
    <img src={require('../assets/Logo/pet-care.png')} alt="logo"  />
    <div class="price_text"><h2>ADD ANIMALS</h2></div>
  </div>
  </Link>
 
  
  
  <Link to='/addmedication' >
    <div class="image1">
    <img src={require('../assets/Logo/first-aid-kit.png')} alt="logo"  />
    <div class="price_text"><h2>ADD MEDICATION</h2></div>
  </div></Link>
  
  
  
  < Link to='/updateweight'>
    <div class="image1">
    <img src={require('../assets/Logo/weight-scale.png')} alt="logo"  />
    <div class="price_text"><h2>UPDATE WEIGHT</h2></div>
  </div></Link>
 
  
  
  <Link to='/finance'>
    <div class="image1">
    <img src={require('../assets/Logo/money.png')} alt="logo"  />
    <div class="price_text"><h2>FINANCES</h2></div>
  </div></Link>
 

  
  <Link to='/alerts'> 
    <div class="image1">
    <img src={require('../assets/Logo/bell.png')} alt="logo"  />
    <div class="price_text"><h2>ALERTS</h2></div>
  </div>
  </Link>
  
</div>
</div>
   </>
  )
}

export default components