import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import './ForgetPassword.css'

const ForgetPassword = () => {
    const emailInputRef=useRef();
    const[message,setMessage]=useState(null);

    const submitHandler=(event)=>{
       event.preventDefault();
       const enteredEmail=emailInputRef.current.value;
       console.log(enteredEmail);
       fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCXWPLAZ6pK9fLCJJ2u-IE4RT2Ymk71Z68',{
        method:'POST',
        headers:{
           'Content-Type': 'application/json'
        },
        body:JSON.stringify({"requestType":"PASSWORD_RESET","email":enteredEmail})
       }).then((response)=>{
        console.log(response);
        setMessage('Recovery mail has been sent successfully');
       }).catch((error)=>{
        setMessage(error.message);
        console.log("Error"+" "+error.message);
       });
    }
    setTimeout(() => {
        setMessage(null);
    }, 4000);
  return (
    <div className="forgetPassword">
    
    <h3 className='heading1'>Recover Your Password</h3>
    <form className="forget-form">
    <label htmlFor="email">Email</label>
        <input type="text" className="input-box" ref={emailInputRef}/>
       <div style={{color:'red',fontWeight:'bold',fontStyle:'italic'}}>{message}</div>
        <button className="resetbutton" onClick={submitHandler}>RESET PASSWORD</button>
        <Link to='/Login' className='backtologin'>Back to Login?</Link>
    </form>
</div>
  )
}

export default ForgetPassword
