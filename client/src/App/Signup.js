import React, { useState } from "react";
import api from "../api/items";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    api
      .post("/signup", {
        firstName,
        lastName,
        email,
        password,
      })
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div class="pa4 black-80 center mt5">
      <form class="measure center" onSubmit={onFormSubmit}>
        <div id="sign_up" class="ba b--transparent ph0 mh0">
          <h3 class="f4 fw6 ph0 mh0">Sign Up</h3>
          <div class="mt3">
            <label class="db fw6 lh-copy f6" for="firstName">
              First Name
            </label>
            <input
              class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="text"
              name="firstName"
              id="firstName"
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div class="mt3">
            <label class="db fw6 lh-copy f6" for="lastName">
              Last Name
            </label>
            <input
              class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="text"
              name="lastName"
              id="lastName"
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <div class="mt3">
            <label class="db fw6 lh-copy f6" for="email-address">
              Email
            </label>
            <input
              class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="email"
              name="email-address"
              id="email-address"
              onChange={(event) => setEmail(event.target.value)}
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
            value="Sign up"
          />
        </div>
        <div class="lh-copy mt3">
          <a href="#0" class="f6 link dim black db">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
};

export default Signup;
