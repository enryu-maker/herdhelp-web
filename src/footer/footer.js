import React from 'react'

import './footer.css'
const footer = () => {
  return (
    <footer>
    
      <hr/>
    <div className='container footer'>
    
      <div className='footer'>
          <img className='footerimg' src={require('../assets/Logo/nerdtechtrans.png')} alt="logo" style={{height:100,width:100,marginTop:0}}></img>
          <p className='footertext'>&copy;{new Date().getFullYear()} HerdHelp | All right reserved | Terms of Serivce | Privacy</p>
           </div>
    </div>


  </footer>
  )
}

export default footer