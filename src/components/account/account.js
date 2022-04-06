import React from 'react'
import '../components.css'

function account() {
  return (

    <>
    <div id='#Login'> 
        
        <div className='tag'>

        <input className='full_name' placeholder='Full Name'></input>
        <input className='User_name' placeholder='User_name'></input>
        <input className='Phone_Number' placeholder='Phone Number'></input>
        <input className='Email' placeholder='Email'></input>
        </div>  

        <div className='tag'>
        <input className='Farm_name' placeholder='Farm Name' required></input>
        <input className='Address' placeholder='Address' ></input>
        </div>
    </div>
    </>
  )
}

export default account