import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";
import Registration from "./components/registration/Registration";
import Favourite from "./components/favourite/Favourite";
import Women from "./components/women/Women";
import Men from "./components/men/Men";
import SandalyMen from "./components/men/sandaly/SandalyMen";
import SportoweMen from "./components/men/sportowe/SportoweMen";
import SportoweWomen from "./components/women/sportowe/SportoweWomen";
import SandalyWomen from "./components/women/sandaly/SandalyWomen";
import ItemDetail from "./components/itemdetail/ItemDetail";
import Cart from "./components/cart/Cart";
import Order from "./components/order/Order";
import auth from "./auth";
import LastStep from "./components/lastStep/LastStep";

function App() {
    const ProtectedRoute = ({component: Component}, ...rest) => {
      return(
          <Route {...rest} render={props =>{
              if(auth.isAuthenticated()){
                  return <Component {...props}/>;
              }
              else{
                  return <Redirect to={
                      {
                          pathname: "/",
                          state: {
                              from: props.location
                          }
                      }
                  }/>
              }
          }}
          />
      )
    };
    return (
      <Router>
         <div>
            <Switch>
                <Route exact path="/">
                    <Nav/>
                    <Main/>
                </Route>
                <Route path="/registration">
                    <Registration/>
                </Route>
                <Route path="/favourite">
                    <Favourite/>
                </Route>
                <Route path="/cart">
                    <Cart/>
                </Route>
                <ProtectedRoute exact path="/order" component={Order}/>
                <ProtectedRoute exact path="/laststep" component={LastStep}/>
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
                <Route path="/:id">
                    <ItemDetail/>
                </Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
