import React, { Component } from "react";
import LoginPage from "./loginPage";
import {Link} from 'react-router-dom';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';
import Home from "./home";
import { BrowserRouter, Switch } from 'react-router-dom';
import Dashboard from "./dashboard";
import { logout } from "../utils/connexion";







const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">
      <span className="badge badge-pill badge-info m-2" style={{ width: 100 }}>
          Magasin 
          </span> 
      <button block size="lg" type="submit">
          <Link className="nav-link" to="/">
          Accueil
          </Link>
        </button>



        
      </div>
      <div className="navbar-brand">
      <BrowserRouter>
        <Switch>
          <PublicRoute restricted={false} component={Home} path="/" exact />
          <PublicRoute restricted={true} component={LoginPage} path="/loginpage" exact />
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
        </Switch>
      </BrowserRouter>

            <div className="nav-item">
            <button block size="lg" type="submit">
              <a href="/" className="nav-link" onClick={logout}>
              <h5>LogOut</h5>
              </a>
              </button>
            </div>


        <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
        <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
          {totalCounters}
        </span>
        Produits
      </div>
      
      
      
    </nav>
  );
};

export default NavBar;