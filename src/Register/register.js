import React , {useState} from 'react'
import './register.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form , Button } from 'react-bootstrap';

function register() {

    const[ user , setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterpassword: ""
      })
    
    
    
    const handleChange = e => {
        const { name , value } = e.target
        // console.log(name , value);
        setUser(
          {
            ...user,
            [name]: value
          })
    }
    
    // const regis = ()=>{
    //   const{ name , email , password , reEnterpassword} = user
    //   if( name && email && password && (password === reEnterpassword)){
    //     axios.post("http://localhost:9002/register", user)
    //     .then( res => console.log(res))
    //   }else
    //   {alert("Invalid inputs")}
    
    // }



  return (
    <>
    <div className='main_div' id='Register'>
    {console.log("user", user)}
        <div className='box'>
            <h1>Register Form</h1>
            <form method='' action=''>
                <div className='input_box'>
                <input type="text"  name='name' value={user.name} onChange={ handleChange }required></input>
                    <label>Username</label>
                </div>
                <div className='input_box'>
                <input type="text" name='email' value={user.email}  onChange={ handleChange }required></input>
                    <label>Email</label>
                </div>
                <div className='input_box'>
                <input type="Password" name='password' value={user.password} onChange={ handleChange }required></input>
                    <label>Password</label>
                </div>

                <div className='input_box'>
                <input type="Password"  name='reEnterpassword' value={user.reEnterpassword} onChange={ handleChange }required></input>
                    <label>re-Enter Password</label>
                </div>

                <Button type="submit">Register</Button><a className='link' href='#Login' >I have an Account</a><br/>
            </form>

        </div>

    </div>

    </>
  )
}

export default register