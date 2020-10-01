import React from 'react';
import './App.css';

import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

import {Redirect, Route, Switch} from 'react-router-dom';

import Teams from "./pages/Teams";
import Team from "./pages/Team";
import Users from "./pages/Users";
import User from "./pages/User";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";

import {Container} from "react-bootstrap";



function App() {
  return (
      <div className="App">
          <Header />
          <Container className="main-container" >
              <Switch>
                  <Route path='/teams' component={Teams} />
                  <Route path='/team/:number' component={Team} />
                  <Route path='/users' component={Users} />
                  <Route path='/user/:number' component={User} />
                  <Route path='/reports' component={Reports} />
                  <Route path='/profile' component={Profile} />
                  <Redirect to='/teams' />
              </Switch>
          </Container>
          <Footer />
      </div>
  );
}

export default App;
