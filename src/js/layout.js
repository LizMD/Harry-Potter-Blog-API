import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Card1 } from "./component/card1";
import { Card3 } from "./component/card3";
import { Character } from "./views/character";
import { Character2 } from "./views/character2";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
              <div className="d-flex justify-content-around px-8">
                <Card1 />
                <Card3 />
              </div>
            </Route>
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route exact path="/single">
            <Single />
            </Route>
            <Route exact path="/demo/:name">
            <Character />
            </Route>
            <Route exact path="/single/:name">
            <Character2 />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
