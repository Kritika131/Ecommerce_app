import React, { useContext, useState } from 'react'
import "../styles/signup.css"
import {Link, useNavigate } from 'react-router-dom';
import { productContext } from '../context/ProductContext';

const SignUp = () => {
    const navigate = useNavigate();
   
    
    const [values,setValues] = useState({
      name:"",
      email:"",
      password:""
    })
    const onChangevalue=(e)=>{
      setValues({...values,[e.target.name]:e.target.value})
    }
    
    const {setSignupUser} = useContext(productContext);

    const signUphandle = (e)=>{
      e.preventDefault();
      console.log("-->",values);
      if(values.name==="" || values.email==="" || values.password===""){
        alert("enter valid credential!")
      }
      else{

        setSignupUser(values);
        navigate('/login');
      }
    

    }


  return (
    <div className="signup">
     
        <h1>Sign Up</h1>
        <form onSubmit={signUphandle} className="signup-fields">
          <input type="text" placeholder='Your Name' 
          value={values.name} 
           autoComplete='off'
           name='name'
            onChange={onChangevalue}
             required/>
          <input type="email" placeholder='Email Address' value={values.email}
          name='email'
           onChange={onChangevalue} autoComplete='off'/>
          <input type="password" placeholder='Password' value={values.password} name="password"
          onChange={onChangevalue}
          autoComplete='off' /> 
          <button>SignUp</button>
        </form>
         <p className="signup-login">Already have an account? <Link to="/login" >Login here</Link></p>
        
      </div>
  
  )
}

export default SignUp;