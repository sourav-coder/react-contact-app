import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import AddContact from "./AddContact";
import EditContact from "./EditContact"
import "./style.css"

export default function App(props) {
  return (
    <Router>
      <ToastContainer />
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/edit/:id" component={EditContact} />
        <Route exact path="/add" component={AddContact} />
      </Switch>
    </Router>
  );
}
