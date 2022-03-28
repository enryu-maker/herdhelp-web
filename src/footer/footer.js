import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'
const footer = () => {
  return (
    <footer>
    
    <div className='container footer'>
    
      <hr/>
      <div className='row'>
        <p className='col'>
          <img src={require('../assets/Logo/nerdtechtrans.png')} className="logo" alt="logo" style={{height:100,width:100,marginTop:0}}></img></p> 
          <p className='col text-end'>
            &copy;{new Date().getFullYear()} NerdTech | All right reserved | Terms of Serivce | Privacy
           </p>
      </div>
    </div>


  </footer>
  )
}

export default footer