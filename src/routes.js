import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import './styles.css';

import { Animation } from 'rsuite';

import Cliente from './pages/Cliente';
import Home from './pages/Home';

const { Collapse } = Animation;

const Routes = () => {
  return (
    <>
      <Header />
      <div className="container-fluid h-100 ">
        <div className="row h-100 ">
          <Router>
            <Sidebar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/cliente" component={Cliente} />
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
};

export default Routes;
