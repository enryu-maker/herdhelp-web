 import React from 'react'
 import './headder.css'
 
 function headder() {
   return (
    <>

<div class="menu">
<div className='images_headder'>
            {/* <img src="img1.png" class="img-fluid" style="border-radius: 50px; width: 80%; background-color: #eadac6; "> */}
            <img className='img1' src={require('../assets/imgs1.jpeg')} alt=''/>
            <img className='img2' src={require('../assets/imgs2.jpeg')} alt=''/>
        </div>
</div>

<div class="main">
<div className='box'>
            <h1 className='h1-text'>HERD HELP</h1>

                <p className='p-text'> Herd help give solution of everything
                    <h3 className='h3-text'>Available on Playstore and Appstore</h3>
                    Download the App now
                </p>
            <div className='buttons'>
               <button className='btn1'  > <img className='logo ' src={require('../assets/Logo/download.png')} alt='' /> DOWNLOAD for IOS</button>
               <button className='btn1'  > <img className='logo ' src={require('../assets/Logo/download.png')} alt='' /> DOWNLOAD for Android</button>
               </div>
        </div>
</div>

    
    
    
    
    
    
    
    
</>
)
 }
 
 export default headder