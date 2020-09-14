import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Nav from "./components/nav/Nav";
import Slideshow from "./components/slideshow/Slideshow";
import Collection from "./components/collection/Collection";
import CompanyList from "./components/companylist/CompanyList";
import Why from "./components/why/Why";
import Club from "./components/club/Club";
import Footer from "./components/footer/Footer";
import Registration from "./components/registration/Registration";
import Favourite from "./components/favourite/Favourite";

function App() {
  return (
      <Router>
         <div>
            <Switch>
                <Route exact path="/">
                    <Nav/>
                    <Slideshow/>
                    <Collection/>
                    <CompanyList/>
                    <Why/>
                    <Club/>
                    <Footer/>
                </Route>
                <Route path="/registration">
                    <Registration/>
                </Route>
                <Route path="/favourite">
                    <Favourite/>
                </Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
