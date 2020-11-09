import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, Switch, Router } from "react-router-dom";
import SigninScreen from "./pages/Signin";
import SignupScreen from "./pages/Signup";
import { IonRouterOutlet } from "@ionic/react";
import { Redirect } from "react-router";
import history from "./config/history";

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path={"/out"}>
        <IonRouterOutlet>
          <Route path={"/signIn"} component={SigninScreen} exact />
          <Route path={"/signUp"} component={SignupScreen} exact />
        </IonRouterOutlet>
      </Route>
      <Route path={"/PageOne"} component={App} />
      <Route>
        <Redirect to={"/PageOne"} />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
