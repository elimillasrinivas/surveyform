import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  const [form, setForm]= useState({email:"",password:""})
  const formHandler=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
}

const submitHandler=()=>{
  const data={
    email:form.email,
    password:form.password
  }

  axios.post("http://localhost:4000/user/signin",data).then((res)=>{
    console.log(res);
  })
}
  return (
    <div className='signup-container'>
      <div className="left">
        <h1>Welcome Page</h1>
        <h1>One line text Will be here</h1>
        <p>Sign in to continue access pages</p>

        <p>Don't Have An Account</p>
        <Link to='/signup'>
        <button>Register</button>
        </Link>
      </div>

      <div className="right">
          <h1>Sign In</h1>
          <p>Sign In to continue access pages</p>
          <form >
          <input type="email" placeholder='Email' name='email' onChange={formHandler}/>
          <input type="password" placeholder='Password'name='password'onChange={formHandler}/>
          <button onClick={submitHandler}>Sign In</button>

          </form>
      </div>
        
    </div>
  )
}

export default SignIn
