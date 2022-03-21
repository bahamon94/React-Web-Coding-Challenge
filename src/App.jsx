import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "wouter";

import "./index.scss";
import Header from "./components/Header";
import HomePage from "./pages/BikeContent";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import { BikesContextProvider } from "./context/BikesContext";
import Details from "./pages/Details";

const App = () => (
  <div className="text-3xl mx-auto max-w-7xl pt-4">
    <Suspense fallback={null}>
      <Header />
      <BikesContextProvider>
        <Switch>
          <Route component={HomePage} path="/" />
          <Route
            component={Details}
            path="/case/:caseId"
          />
          <Route component={ErrorPage} path="/:rest*" />
        </Switch>
      </BikesContextProvider>

    </Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
