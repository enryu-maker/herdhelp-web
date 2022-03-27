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
        <div class="col-md text-center m-5">
            <h1 class=" mt-5">HERD HELP</h1>

                <p className='mt-5'> Herd help give solution of everything
                    <h3 className='m-3'>just go for it</h3>
                    You can Download or check our app online

                </p>


               <button className='btn btn1 m-1 mt-3'  >Download</button>
               <button className='btn btn2 m-1 mt-3'  >Preview</button>
               <br />
               <button className='btn btn3 m-1 mt-2 logout'  >Logout</button>
        </div>

    </div>
</div>
   )
 }
 
 export default headder