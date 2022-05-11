import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "font-awesome/css/font-awesome.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/loginPage";
import Dashboard from "./components/dashboard";

const Routing = () => {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/loginpage" component={LoginPage} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    )
  }
  
  
  ReactDOM.render(
    <React.StrictMode>
      <Routing />
    </React.StrictMode>,
    document.getElementById('root')
  );
