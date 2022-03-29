import React,{ useState } from 'react'
import axios from 'axios'

const register = () => {

  const [user , setUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  const  handleChange = e => {
    const {name , value } = e.target
    // console.log(name , value)
    setUser({
      ...user, // sperade operator
      [name]: value
    })
  }
  
  const regis = ()=>{


    const {name , email, password } = user
    if( name && email && password){
      axios.post("http://localhost:9890/register", user)
      // .then(res => console.log(res))
    }
    else{
      alert("something missing")
    }
  } 




  return (
    <>
   <div className='login'>
     {/* {console.log('user',user)} //for console user */}
      <h1>Register</h1>
      <div>
      <label>Name</label><br/>
      <input type={'text'} placeholder='Enter your Name' name='name' value={user.name} onChange={ handleChange }  required></input>
      </div>
      <div>
      <label>Email</label><br/>
      <input type={'text'} placeholder='Enter your Email' name='email' value={user.email} onChange={ handleChange }  required></input>
      </div>
      <div>
      <label>Password</label><br/>
      <input type={'password'} placeholder='Enter your Password' name='password' value={user.password} onChange={ handleChange } required></input>
      </div>
      <button className='loginbtn' onClick={regis}> Register</button>
      <p>I have an account?<a href='#Login'>Signin</a></p>
    </div> 
    </>
  )
}

export default register