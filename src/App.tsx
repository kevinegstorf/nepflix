import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={HomePageWrapper} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const HomePageWrapper = (): JSX.Element => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export default App;
