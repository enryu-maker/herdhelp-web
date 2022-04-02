 import React from 'react'
 import './headder.css'
 
 function headder() {
   return (
    <>
<section id='headder'>
<div className="menu">
<div className='images_headder'>
            {/* <img src="img1.png" class="img-fluid" style="border-radius: 50px; width: 80%; background-color: #eadac6; "> */}
            <img className='img1' src={require('../assets/imgs1.jpeg')} alt=''/>
            <img className='img2' src={require('../assets/imgs2.jpeg')} alt=''/>
        </div>
</div>

<div className='main'>
<div className='box'>
            <h1 className='h1-text'>Herd Help</h1>

                <p className='p-text'> Herd help give solution of managing herds</p>
                    <h3 className='h3-text'>Available on Playstore and Appstore</h3>
                    <p className='p-text'>   Download the App now
                </p>
            <div className='buttons'>
               <button className='btn1'  > <img className='store' src={require('../assets/Logo/apple2.png')} alt='' /> DOWNLOAD for IOS</button>
               <button className='btn1'  > <img className='store' src={require('../assets/Logo/play.png')} alt='' /> DOWNLOAD for Android</button>
               </div>
        </div>
</div>
</section>
    
    
    
    
    
    
    
    
</>
)
 }
 
 export default headder