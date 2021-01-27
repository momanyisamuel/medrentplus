import React from "react";
import { Route, Switch } from "react-router-dom";
import BookItem from "../BookItem/BookItem";
import Dashboard from "../Dasboard/Dashboard";
import EditItem from "../EditItem/EditItem";
import MedItemList from "../MedItemList/MedItemList";
import Navigation from "../Navigation/Navigation";
import NewMedItem from "../NewMedItem/NewMedItem";
import Login from "./Login";
import Signup from "./Signup";
import NotFound from "./NotFound";
import ProtectedRoute from "../helpers/ProtectedRoute";

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        <ProtectedRoute exact path="/items" component={MedItemList} />
        <ProtectedRoute exact path="/items/add" component={NewMedItem} />
        <ProtectedRoute exact path="/items/edit/:id" component={EditItem} />
        <ProtectedRoute exact path="/items/book/:id" component={BookItem} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
