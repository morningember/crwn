import React, { useState } from "react";
import FormInput from "./FormInput";

import "../css/SignIn.scss";
import CustomButton from "./CustomButton";
import { signInWithGoogle } from "../utils/Firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and Password</span>

      <form action="" onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="email"
          required
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          required
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
