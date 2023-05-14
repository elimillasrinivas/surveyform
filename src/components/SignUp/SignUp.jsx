import React, { useState } from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {
  const [form, setForm]= useState({name:"", email:"",phone:"",password:"",profession:""})

  const formHandler=(e)=>{
      setForm({...form,[e.target.name]:e.target.value})
  }
  // console.log(form);

  const submitHandler=()=>{
    const data={
      name:form.name,
      email:form.email,
      phone:form.phone,
      password:form.password,
      profession:form.profession
    }

    axios.post("http://localhost:4000/user/signup",data).then((res)=>{
      console.log(res);
    })
  }
  return (
    <div className='signup-container'>
      <div className="left">
        <h1>Welcome Page</h1>
        <h1>One line text Will be here</h1>
        <p>Sign in to continue access pages</p>

        <p>Already Have An Account</p>
        <Link to='/'>
        <button>Sign In</button>
        </Link>
      </div>

      <div className="right">
          <h1>Register</h1>
          <p>Register to continue access pages</p>
          <form >
          <input type="text" placeholder='Name' name='name' onChange={formHandler}/>
          <input type="email" placeholder='Email' name='email' onChange={formHandler}/>
          <input type="number" placeholder='Phone'name='phone'onChange={formHandler}/>
          <input type="text" placeholder='Profession'name='profession'onChange={formHandler}/>
          <input type="password" placeholder='Password'name='password'onChange={formHandler}/>
          <input type="password" placeholder='Confirm Password'/>
          <input type="checkbox" />
          <p>I agree to Terms & Condition receiving marketing and promotional materials</p>
          <button onClick={submitHandler}>Register</button>

          </form>
      </div>
        
    </div>
  )
}

export default SignUp