import React from 'react'
import './styles/Login.css'
 import img1 from './Images/Ellipse 4.png'
 import img2 from './Images/Ellipse 3.png'
 import CloseImg from './Images/Vector.png'
 import appleImg from './Images/apple.png'
 import fbImg from './Images/f.png'
 import {useNavigate} from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

  return (
      <div className="login-wrapper">
      
      <div className="half">
      

      <div className="section">

      <div className="navigation d-flex justify-content-left align-items-center">
        <h2   className="my-logo">  Your Logo</h2>
      </div>

      <div className="middle">
      
        <div className="box-1">
        
   
        
        <h4 className='sign-in-button text-left' >Sign in to</h4>
   

        <h6 className='lorem1' > Lorem Ipsum is simply </h6>

      <p  className='lorem2'>    Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, omnis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, consequuntur.  </p> 
         
        </div>
        <div className="image-box box-2"></div>
        <div className="login-box box-3">
        
        
        <div className="header d-flex justify-content-between">
        <div className=""> Welcome to   <span  className='LOREM' > LOREM    </span> </div>
        <div className="">  No Account ? Sign up </div>
        </div>

        <div className="d-flex justify-content-left align-items-center">
        
        <h2  className="sign-in-heading">Sign in</h2>
        
        </div>



        <div className="sign-in-boxes">
        
        <div className="sign-in-with-google"> <img src={fbImg} alt="" />  Sign in with Google </div>
        <div className="fb-logo">  <img src={fbImg} alt="" />   </div>
        <div className="apple-logo">    <img src={appleImg} alt="" />    </div>
        </div>


        <div className="d-flex justify-content-left align-items-center">
        
        <label htmlFor="" className='mt-3 mb-1 label' >  Enter your username or email address  </label>
        
        </div>
      
    

        <input placeholder="Username or email address" type="email"   />

        <div className="d-flex justify-content-left align-items-center">   
        
        <label htmlFor=""  className='mt-3 mb-1 label'>  Enter your Password  </label>
        
        </div>

   

        <input placeholder="Password"  type="password"   />

        <div className="mt-3 mb-1 d-flex justify-content-end align-items-center">
         <small className='small-text-forgot-password' > Forgot Password</small>
        </div>

        <button className='login-button' onClick={()=>navigate('/dashboard')} > Sign in </button>
        
        
        </div>
      
      </div>


      
      </div>
      
      </div>


      <div className="footer">
      


      <div className="navigation d-flex justify-content-left align-items-center">

      <div className="navigation d-flex justify-content-left align-items-center mt-3">
        <h6> Login as  </h6>
      </div>
      </div>


      <div className= "cards">


          <div className="card">
          
          <div className='close-icon'>
          <img    src={CloseImg} alt="" />
          </div>

          <div className="image-box">
              <div className="circle">
              
              <img src={img1} alt="" />
              </div>
          </div>
          <div className="image-footer">
          <p className='text-center'> Jghn Peter </p>
          </div>
            
          </div>


          <div className="card">

           <div className='close-icon'>
           <img    src={CloseImg} alt="" />
           </div>

          <div className="image-box">
          <div className="circle">
          
          <img src={img2} alt="" />
          </div>
          </div>
          <div className="image-footer">
          <p  className='text-center'  >  Alena sehmen </p>
          </div>
 
          </div>


      </div>
      
      </div>
      
      
      </div>
      
      
  )
}

export default Login