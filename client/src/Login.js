import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/css/register.css"
import { useState, useEffect } from "react";
import loginImage from "./styles/Images/login-page.jpg";
// import "../assets/css/signin.css";









export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  // useEffect(()=>{
  //     const auth=localStorage.getItem('user')
  //     if(auth){
  //         navigate('/')
  //     }
  // },[])


  const handleClick = async () => {
    console.log(email, password)
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      }
    }
    );
    // the result is in readstream format so it has to be converted into string
    result = await result.json();

    console.log("result is  --> ", result)
    if (result.auth) {
      console.log("Login successfully")
      localStorage.setItem("user", JSON.stringify(result.user))
      localStorage.setItem("token", JSON.stringify(result.auth))
      navigate('/')

    }
    else {
      alert("Please enter correct details")
    }
  }




  // return (
  //   <div className="login-container">

  //     <div className="section">
  //       <div class="screen-1">
  //         <div class="input_box">
  //           <label for="email">Email Address</label>
  //           <div class="sec-2">
  //             <ion-icon name="mail-outline"></ion-icon>
  //             <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" placeholder="Username@gmail.com" />
  //           </div>
  //         </div>
  //         <div class="input_box">
  //           <label for="password">Password</label>
  //           <div class="sec-2">
  //             <ion-icon name="lock-closed-outline"></ion-icon>
  //             <input
  //               class="pas"
  //               type="password"
  //               name="password"
  //               placeholder="············"
  //               onChange={(e) => setPassword(e.target.value)} value={password}
  //             />
  //            </div>
  //             </div>
              
              
          




  //           <button onClick={handleClick} class="login">
  //           {/* <Link to="/profile" className="link_btn"> */}
  //           Login
  //           {/* </Link>  */}
  //           </button>
  //           <div class="footer">
  //           <Link to="/lform" className="links_btn">Sign up</Link>
  //           <Link className="links_btn">Forgot Password?</Link>
  //         </div>
          

  //       </div>
  //     </div>
  //     <div class="image-container">
  //       <img src={loginImage} alt="Image" style={{ maxWidth: "100%", height: "auto" }} />
  //     </div>

  //   </div>


  // );

  return (
    <div className="login-container">
  
      <div className="section">
        <div class="screen-1">
          <div class="input_box">
            <label for="email">Email Address</label>
            <div class="sec-2">
              <ion-icon name="mail-outline"></ion-icon>
              <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" placeholder="Username@gmail.com" />
            </div>
          </div>
          <div class="input_box">
            <label for="password">Password</label>
            <div class="sec-2">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                class="pas"
                type="password"
                name="password"
                placeholder="············"
                onChange={(e) => setPassword(e.target.value)} value={password}
              />
            </div>
          </div>
          <button onClick={handleClick} class="login">
            Login
          </button>
          <div class="footer">
            <Link to="/lform" className="links_btn">Sign up</Link>
            <Link className="links_btn">Forgot Password?</Link>
          </div>
        </div>
  
        {/* New section for signup with social media */}
        <div class="social-media-section">
          <p style={{fontWeight:"bold", fontSize:"2.2em"}}>Or sign up/in with:</p>
          <div class="social-media-buttons">
            <button class="google-button">Google</button>
            <button class="linkedin-button">LinkedIn</button>
            <button class="github-button">GitHub</button>
          </div>
        </div>
  
      </div>
      <div class="image-container">
        <img src={loginImage} alt="Image" style={{ maxWidth: "100%", height: "auto" }} />
      </div>
  
    </div>
  );
  
};


