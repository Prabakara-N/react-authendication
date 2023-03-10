import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/login");
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          alert("Email already exists");
        } else {
          console.log(err);
        }
      });
  };

  return (
    <div className="signup-main">
      <section>
        <h1>Create Your Account</h1>
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
          <button type="button" onClick={onSubmit}>
            Sign Up
          </button>
        </form>
        <p>
          Already have an account? <NavLink to={"/login"}>Sign In</NavLink>{" "}
        </p>
      </section>
    </div>
  );
};

export default SignUp;
