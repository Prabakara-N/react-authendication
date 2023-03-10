import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const onLogIn = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/dashboard");
      })
      .then((err) => {
        switch (err.code) {
          case "auth/user-not-found":
            alert(`Email doesn't exists...Create your account`);
            break;

          case "auth/wrong-password":
            alert("Password is incorrect...Please Check Your Password");
            break;

          default:
            console.log(err);
        }
        // if (err.code === "auth/user-not-found") {
        //   alert(`Email doesn't exists...Create your account`);
        // } else if (err.code === "auth/wrong-password") {
        //   alert("Password is incorrect...Please Check Your Password");
        // }
      });
  };

  return (
    <div className="signup-main">
      <section>
        <h1>Welcome...</h1>
        <form>
          <div className="email-input">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="ex.abc@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="password-input">
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="button" onClick={onLogIn}>
            Sign In
          </button>
        </form>
        <p>
          Create an account? <NavLink to={"/signup"}>Sign up</NavLink>{" "}
        </p>
      </section>
    </div>
  );
};

export default Login;
