import React from "react";
import MedItemList from "../MedItemList/MedItemList";
import Navigation from "../Navigation/Navigation";

const Dashboard = () => {
  return (
    <div class="ph3 pv3 pv4-ns ph4-m ph5-l">
      <div class="flex justify-between">
        <div class="w-50 mr3">
          <div class="mt2 black-70">
            <h3>Available for rent</h3>
          </div>
          <div>
            <a class="shadow-3 link dt w-100 mt2 dim blue" href="#0">
              <div class="dtc w3">
                <img
                  src="http://mrmrs.github.io/images/0010.jpg"
                  class="db w-100"
                />
              </div>
              <div class="dtc v-top pt2 pl2">
                <h1 class="f6 f5-ns fw6 lh-title black mv0">Grid Systems</h1>
                <h2 class="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h2>
                <dl class="mt2 f6">
                  <dt class="clip">Price</dt>
                  <dd class="ml0">$75.00</dd>
                </dl>
              </div>
            </a>
          </div>
          <div class="mt2 black-80">
            <h3>
              <a href="">View all available items</a>
            </h3>
          </div>
        </div>
        <div class="w-50 mr3">
          <div class="mt2 black-80">
            <h3>Rented Items</h3>
          </div>
          <div>
            <a class="shadow-3 link dt w-100 mt2 dim blue" href="#0">
              <div class="dtc w3">
                <img
                  src="http://mrmrs.github.io/images/0010.jpg"
                  class="db w-100"
                />
              </div>
              <div class="dtc v-top pt2 pl2">
                <h1 class="f6 f5-ns fw6 lh-title black mv0">Grid Systems</h1>
                <h2 class="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h2>
                <dl class="mt2 f6">
                  <dt class="clip">Price</dt>
                  <dd class="ml0">$75.00</dd>
                </dl>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
