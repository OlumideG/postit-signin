import React from 'react';
import logo from './logo.PNG';
import './App.css';
import Particles from 'react-particles-js';
import { Link , Switch, Route } from 'react-router-dom';


//  const particlesOptions={
  
//   particles: {
//   number:{
//     value:200
//     ,
//     density:{
//      enable: true,
//      value_area:800
//      }
//     }
//   }
// }
 const particlesOptions = {
  "particles": {
    "number": {
      "value": 120,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#acacac"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false
}



const Signin =()=>(
  <div>
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
                <label className="text-info"><span><input id="remember-me" name="remember-me"
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
 

  </div>
)


const Signup =()=>(
  // style="display: none;"
  <div>
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
 
     
  </div>
)


function App() {
  return (
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
  
  <Switch>
          <Route exact path="/" component ={Signin} />
          <Route path="/signup" component = {Signup} />
  </Switch>
  <Particles className='particles'
              params={particlesOptions}
            />
    </div>
  );
}

export default App;
