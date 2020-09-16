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
import Women from "./components/women/Women";
import Men from "./components/men/Men";
import SandalyMen from "./components/men/sandaly/SandalyMen";
import SportoweMen from "./components/men/sportowe/SportoweMen";
import SportoweWomen from "./components/women/sportowe/SportoweWomen";
import SandalyWomen from "./components/women/sandaly/SandalyWomen";

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
                <Route exact path="/men">
                    <Men/>
                </Route>
                <Route path="/men/sandaly">
                    <SandalyMen/>
                </Route>
                <Route path="/men/sportowe">
                    <SportoweMen/>
                </Route>
                <Route exact path="/women">
                    <Women/>
                </Route>
                <Route path="/women/sportowe">
                    <SportoweWomen/>
                </Route>
                <Route path="/women/sandaly">
                    <SandalyWomen/>
                </Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
