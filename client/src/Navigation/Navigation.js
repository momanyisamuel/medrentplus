import React from "react";
import { authService } from "../helpers/auth";

const Navigation = () => {
  let userId;
  try {
    if (authService.currentUserValue.user) {
      userId = authService.currentUserValue.user;
    }
  } catch (err) {
    console.error(err);
  }

  // console.log(userId);
  if (userId) {
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
  }
  return "";
};

export default Navigation;
