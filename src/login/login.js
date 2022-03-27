import React from 'react'
import './login.css'
import { Form , Button } from 'react-bootstrap';


function login() {


    
  return (
      <>
    <div className='main_div' id='Login'>
        <div className='box'>
            <h1>LOGIN Form</h1>
            <Form method='' action='' >
                <div className='input_box'>
                    <input type="text" name='Username' autoComplete='off' required></input>
                    <label>username</label>
                </div>
                <div className='input_box'>
                    <input type="password" name='password' autoComplete='off' required></input>
                    <label>password</label>
                </div>

                <Button type="submit">login</Button>
            </Form>

        </div>

    </div>

    </>
  )
}

export default login