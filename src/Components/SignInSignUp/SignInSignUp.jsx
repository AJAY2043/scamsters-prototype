import React from 'react'
import './SignInSignUp.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const LoginSignUp = () => {
  return (
    <>
    <Navbar/>
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>SignUp</h1>
        <div className="loginsignup-fileds">
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='password'/>       
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Alerdy Have an account?<span>Login Here</span></p>
        <div className="loginsignup-agreee">
          <input type='checkbox' name='' id=''/>
          <p>By continueing i agree to the terms of use & privacy policy </p>
        </div>
      </div>  
    </div>
    <Footer/>
    </>
  )
}

export default LoginSignUp
