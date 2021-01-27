import React, { useState } from "react";
import { authService } from "../helpers/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    authService.login(email, password).then((user) => {
      window.location.replace("/dashboard");
    });
  };

  return (
    <>
      <div class="pa4 black-80 center mt6">
        <form class="measure center" onSubmit={onFormSubmit}>
          <div id="sign_up" class="ba b--transparent ph0 mh0">
            <h2 class="f4 fw6 ph0 mh0">Sign In</h2>
            <div class="mt3">
              <label class="db fw6 lh-copy f6" for="email-address">
                Email
              </label>
              <input
                class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                name="email-address"
                id="email-address"
              />
            </div>
            <div class="mv3">
              <label class="db fw6 lh-copy f6" for="password">
                Password
              </label>
              <input
                class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
          <div class="">
            <input
              class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>
          <div class="lh-copy mt3">
            <a href="/signup" class="f6 link dim black db">
              Signup
            </a>
          </div>
          <div class="lh-copy mt3">
            <a href="#0" class="f6 link dim black db">
              Forgot your password?
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
