import React from "react";
import { authService } from "../helpers/auth";

const Navigation = () => {
  let isLoggedIn;
  // const userId = authService.currentUserValue.user;
  // if (userId._id) {
  //   isLoggedIn = (
  //     <a class="f6 link dib white dim mr3 mr4-ns" href="#0">
  //       {userId.email}
  //     </a>
  //   );
  // } else {
  //   isLoggedIn = (
  //     <a class="f6 link dib white dim mr3 mr4-ns" href="#0">
  //       Sign In
  //     </a>
  //   );
  // }
  return (
    <div>
      <header class="flex justify-between bg-black-90">
        <nav class="pa3 pa4-ns">
          <a
            class="link dim white b f6 f5-ns dib mr3"
            href="/dashboard"
            title="Home"
          >
            MedRent+
          </a>
          <a
            class="link dim white f6 f5-ns dib mr3"
            href="/dashboard"
            title="Home"
          >
            Dashboard
          </a>
          <a
            class="link dim white f6 f5-ns dib mr3"
            href="/items"
            title="About"
          >
            Inventory
          </a>
          <a class="link dim white f6 f5-ns dib mr3" href="#" title="Store">
            Orders
          </a>
        </nav>
        <nav class="pa3 pa4-ns">
          <a class="link dim white f6 f5-ns dib mr3" href="#" title="Home">
            Logout
          </a>
          <a class="link dim white f6 f5-ns dib mr3" href="#" title="About">
            User
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
