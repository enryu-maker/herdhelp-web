import React from 'react'
import './register.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form , Button } from 'react-bootstrap';

function register() {
  return (
    <>
    <div className='main_div' id='Register'>
        <div className='box'>
            <h1>Register Form</h1>
            <form method='' action=''>
                <div className='input_box'>
                    <input type="text" name='Username' autoComplete='off' required></input>
                    <label>username</label>
                </div>
                <div className='input_box'>
                    <input type="text" name='Email' autoComplete='off' required></input>
                    <label>Email</label>
                </div>
                <div className='input_box'>
                    <input type="numbers" name='phone number' autoComplete='off' required></input>
                    <label>Phone Number</label>
                </div>
                <div className='input_box'>
                    <input type="password" name='password' autoComplete='off' required></input>
                    <label>password</label>
                </div>

                <Button type="submit">Register</Button><a className='link' href='#Login' >I have an Account</a><br/>
            </form>

        </div>

    </div>

    </>
  )
}

export default register