import React from 'react'
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import Header from './components/Header'
import Decoration from './components/Decoration'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Example from './components/Example'
import Contacts from './components/Contacts'


const Error404 = () => {
  return <>404 <br /> <a href="/">На главную</a></>;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Decoration />
            <About />
            <Footer />
          </Route>
          <Route exact path="/portfolio">
            <Header />
            <Decoration />
            <Portfolio />
            <Footer />
          </Route>
          <Route exact path="/example">
            <Header />
            <Example />
            <Footer />
          </Route>
          <Route exact path="/contacts">
            <Header />
            <Decoration />
            <Contacts />
            <Footer />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
