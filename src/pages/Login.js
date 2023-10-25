import React, { useContext, useState } from 'react'
import "../styles/login.css"
import { Link, useNavigate } from 'react-router-dom'
import { productContext } from '../context/ProductContext';

const Login = () => {

  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  const {users,setLoginUser} = useContext(productContext)
  const navigate = useNavigate();

  console.log("useraa--",users);

  const handleSubmit=(e)=>{
    e.preventDefault();
    const user = users?.find(user=>user.email===email && user.password===pass);
    // console.log("user-->",user);
    

    if(user){
      setLoginUser(user);
      navigate('/');
    }
    
    else {
     alert('Wrong credentials !!');
    }
  }

  return (
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="login-fields">
          
          <input type="email" placeholder='Email Address' value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete='off' required />
          <input type="password" placeholder='Password' value={pass} onChange={(e)=>setPass(e.target.value)} autoComplete='off' required />
        <button className='signup_btn'>Login</button>
        </form>
         <p className="login-text">Don't have an account? <span onClick={()=>navigate('/signup')}><Link to="/signup">SignUp here</Link></span></p>
        
      </div> 
    </div>
  )
}

export default Login