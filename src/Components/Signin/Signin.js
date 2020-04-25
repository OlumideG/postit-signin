import React from 'react';
import logo from "./logo.PNG";
import  {particlesOptions} from "./particles";
import { Link } from 'react-router-dom'
import Particles from 'react-particles-js';
import "./Signin.css";


const Signin =()=>(
    <div>
      <nav className="navbar navbar-expand-lg nav-head bg-white static-top">
    <div className="container">
      <Link to="/" className="navbar-brand" >
        <img src={logo} alt="logo" />
      </Link>
      <div className="nav-button">
        <button className="btn change-color" type="button">
          <Link to="/" className="anch-display">Sign in</Link>
        </button>
        <button className="btn change-color" type="button">
          <Link to="/signup" className="anch-display" >Register</Link>
        </button>
      </div>
    </div>
  </nav>
     <div id="login">
      <h3 className="text-center text-white pt-5">
        Login to <span className="post_change text-white">Postit</span>
      </h3>
      <div className="container">
        <div id="login-row" className="row justify-content-center align-items-center">
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12 form-box">
              <form id="login-form" className="form" action="">
                <div className="form-group form-form">
                  <input id="login-email" type="text" className="form-control"  placeholder=" Email" />
                </div>
                <div className="form-group">
                  <input id="login-password" type="password" className="form-control" name="password"
                    placeholder="Password" />
                </div>
                <div className="form-group">
                  <label htmlFor="" className="text-info"><span><input id="remember-me" name="remember-me"
                        type="checkbox" /><span className="black-color remember" >Remember me</span>
                    </span></label>
                  <Link to="/" className="text-info text-right forget-password" >Forget Password?</Link>
                  <div className="form-down">
                  <input type="submit" name="submit" id="sign-in-button" className=" tn btn-info btn-block btn-lg button "
                       value="Sign in" /> 
                  </div>
                </div>
              </form>
            </div>
            <div className="sign">
              <p className="text-center">
                Are you new here?
                <Link to="/signup" className="anchor"><span>Sign up
                    here</span></Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    <Particles className='particles'
              params={particlesOptions}
            />
    </div>
  )

  export default Signin;