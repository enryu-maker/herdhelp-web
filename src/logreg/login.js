import React from 'react'


function login() {
  // const [user , setUser] = useState({
  //   email: '',
  //   password: ''
  // })

  // const  handleChange = e => {
  //   const {name , value } = e.target
  //   // console.log(name , value)
  //   setUser({
  //     ...user, // sperade operator
  //     [name]: value
  //   })
  // }



  return (
    <>
    <div className='login'>
      {/* {console.log('user' , user)} */}
      <h1>Login</h1>
      <div>
      <label>Email</label><br/>
      <input type={'text'} placeholder='Enter your Email' name='email' 
      // value={user.email} onChange={ handleChange } 
      required></input>
      </div>
      <div>
      <label>Password</label><br/>
      <input type={'password'} placeholder='Enter your Password' name='password' 
      // value={user.password} onChange={ handleChange }  
      required></input>
      </div>
      <button className='loginbtn'> Login</button>
      <p>Don't have an account?<a href='#register'>Signup</a></p>
    </div>
    
    </>
  )
}

export default login