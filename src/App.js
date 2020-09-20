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
import {fakeAuth} from "./auth";
import Order from "./components/order/Order";

function App() {
    function PrivateRoute({ children, ...rest }) {
        return (
            <Route
                {...rest}
                render={({ location }) =>
                    fakeAuth.isAuthenticated ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/cart",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        );
    }

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
                <PrivateRoute path="/order">
                    <Order/>
                </PrivateRoute>
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
