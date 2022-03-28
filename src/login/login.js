import React , {useState} from 'react'
import './login.css'
import { Form , Button } from 'react-bootstrap';


function login() {



        const[ user , setUser] = useState({
          
          email: "",
          password: "",
         
        })
      
      
      const handleChange = e => {
          const { name , value } = e.target
        //   console.log(name , value);
          setUser(
            {
              ...user,
              [name]: value
            })
      }
    //   const login = ()=>{
    //     axios.post("http://localhost:9002/login", user)
    //     .then(res => alert(res.data.massage))
    //   }


  return (
      <>
    <div className='main_div' id='Login'>
        {console.log(user, "user")}
        <div className='box'>
            <h1>LOGIN Form</h1>
            <Form method='' action='' >
                <div className='input_box'>
                    <input type="text" name='email' autoComplete='off' value={user.email}onChange={ handleChange } required></input>
                    <label>Email</label>
                </div>
                <div className='input_box'>
                    <input type="password" name='password' autoComplete='off' value={user.password}onChange={ handleChange } required></input>
                    <label>password</label>
                </div>
                

                <Button type="submit" onClick={login}>login</Button><a className='link' href='#Register' >Create Account</a><br/>
            </Form>

        </div>

    </div>

    </>
  )
}

export default login