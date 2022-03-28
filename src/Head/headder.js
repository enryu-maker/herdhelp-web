 import React from 'react'
 import './headder.css'
 import { Image} from 'react-bootstrap';
 
 function headder() {
   return (
    <div class="container" id='Headder'>
    <div class="row justify-content-between">
        <div class="col-md text-center">
            {/* <img src="img1.png" class="img-fluid" style="border-radius: 50px; width: 80%; background-color: #eadac6; "> */}
            <Image className='img-fluid img1 m-1 mt-5' src={require('../assets/imgs1.jpeg')} alt=''/>
            <Image className='img-fluid img2 m-1 mt-5' src={require('../assets/imgs2.jpeg')} alt=''/>
        </div>
        <div class="col-md text-center m-5 box">
            <h1 class=" mt-5">HERD HELP</h1>

                <p className='mt-5'> Herd help give solution of everything
                    <h3 className='m-3'>just go for it</h3>
                    You can Download or check our app online

                </p>


               <button className='btn1'  > <Image className='img-fluid logo ' src={require('../assets/Logo/download.png')}/> DOWNLOAD</button>
               <button className='btn2'  >PREVIEW</button>
               <br />
               <button className='btn3 logout'  > <Image className='img-fluid logo ' src={require('../assets/Logo/logout.png')}/> LOGOUT</button>
        </div>

    </div>
</div>
   )
 }
 
 export default headder