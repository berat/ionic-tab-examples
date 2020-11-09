import React from "react";
import { Route, Redirect } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import PageOne from "./pages/pageOne";
import PageTwo from "./pages/pageTwo";
import PageThree from "./pages/pageThree";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

class App extends React.Component {
  render() {
    return (
      <IonApp className={this.props.tabBarVisibility ? "" : "tab-bar-hide"}>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/" render={() => <Redirect to="/pageOne" />} exact />
              <Route path="/pageOne" component={PageOne} exact />
              <Route path="/PageTwo" component={PageTwo} exact />
              <Route path="/PageThree" component={PageThree} exact />
              <Redirect exact from="/signIn" to="/companyfeed" />
            </IonRouterOutlet>
            <IonTabBar className="tab-bar-box" slot="bottom">
              <IonTabButton className="tab-button" tab="tab1" href="/PageOne">
                <div className="tab-bar-item feed" />
                <IonLabel>Page One </IonLabel>
              </IonTabButton>

              <IonTabButton className="tab-button" tab="tab2" href="/PageTwo">
                <div className="tab-bar-item leaderboard" />
                <IonLabel>Page Two</IonLabel>
              </IonTabButton>

              <IonTabButton className="tab-button" tab="tab4" href="/PageThree">
                <div className="tab-bar-item search" />
                <IonLabel>Page Three</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    );
  }
}

export default App;
