import React from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Ikan, Login, Register } from "pages/";
import Detail from "pages/Detail";
import CreateUpdate from "pages/CreateUpdate";

import IsAuth from "./Route/IsAuth";
import { NavbarComponent } from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Switch>
          <Route path="/detail/:id" component={Detail} />
          {/* <Route path="/detail/:id" component={Detail} /> */}
          <Route exact path="/edit/:id" component={CreateUpdate} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/create" component={CreateUpdate} />
          {/* <Route exact path="/Login" component={Login} /> */}
          <Route exact path="/" component={Ikan} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
