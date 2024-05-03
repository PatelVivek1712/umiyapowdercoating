import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlusG,
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Lottie from "react-lottie";
import login_animation from "./Animations/login.json";
import registration_animation from "./Animations/registration.json";

export const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const history = useHistory();

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSignIn = () => {
    history.push("/navbar");
  };

  useEffect(() => {
    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    const handleRegisterClick = () => {
      container.classList.add("active");
    };

    const handleLoginClick = () => {
      container.classList.remove("active");
    };

    registerBtn.addEventListener("click", handleRegisterClick);
    loginBtn.addEventListener("click", handleLoginClick);

    return () => {
      registerBtn.removeEventListener("click", handleRegisterClick);
      loginBtn.removeEventListener("click", handleLoginClick);
    };
  }, []);

  return (
    <div className="container" id="container">
      <div className={`form-container ${isSignUp ? "sign-up" : "sign-in"}`}>
        <form>
          <h1>{isSignUp ? "Create Account" : "Sign In"}</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <span>
            {isSignUp
              ? "or use your email for registration"
              : "or use your email password"}
          </span>
          {!isSignUp && <input type="email" placeholder="Email" />}
          {!isSignUp && <input type="password" placeholder="Password" />}
          {isSignUp && <input type="text" placeholder="Name" />}
          {isSignUp && <input type="email" placeholder="Email" />}
          {isSignUp && <input type="password" placeholder="Password" />}
          {!isSignUp && <a href="#">Forget Your Password?</a>}
          <button onClick={handleSignIn}>
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div
            className={`toggle-panel toggle-left ${isSignUp ? "" : "hidden"}`}
          >
            <h2>Already have an account?</h2>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: login_animation,
              }}
              height={300}
              width={300}
            />
            <button className="hidden" id="login" onClick={handleToggle}>
              Sign In
            </button>
          </div>
          <div
            className={`toggle-panel toggle-right ${isSignUp ? "hidden" : ""}`}
          >
            <h2>Don't have an account ?</h2>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: registration_animation,
              }}
              height={290}
              width={290}
            />
            <button className="hidden" id="register" onClick={handleToggle}>
              Click here to Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
