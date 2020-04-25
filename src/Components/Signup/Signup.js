import React from 'react';
import logo from "./logo.PNG";
import  {particlesOptions} from "./particles";
import { Link } from 'react-router-dom'
import Particles from 'react-particles-js';
import "./Signup.css";


const Signup =()=>(
    <div>
    <nav className="navbar navbar-expand-lg nav-head bg-white static-top">
    <div className="container">
      <Link to="/" className="navbar-brand" href="#">
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
        <div id="Registration" >
      <h3 className="text-center text-white pt-5">
        Create an account on <span className="post_change text-white">Postit</span>
      </h3>
      <div className="container">
        <div id="login-row" className="row justify-content-center align-items-center">
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12 form-box">
              <form id="login-form" className="form reg">
                <div className="form-group">
                  <input type="text" className="form-control" name="username" placeholder="First Name" required="required" />
                </div>
                <div className="form-group form-form">
                  <input id="login-email" type="text" className="form-control" placeholder=" Email" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="text" placeholder="Phone Number" required="required" />
                </div>
                <div className="form-group">
                  <input id="login-password" type="password" className="form-control" name="password"
                    placeholder="Password" />
                </div>
                <div className="dark-colour-top">
                  <div className="form-group">
                    <button type="submit" id="create-account-button" className="btn btn-primary btn-block btn-lg dark-colour">
                      Create account
                    </button>
                  </div>
                </div>
              </form>
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

  export default Signup;