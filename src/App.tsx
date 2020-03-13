import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import MoviePage from "./pages/MoviePage";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={HomePageWrapper} />
          <Route exact path="/movie/:id" component={MoviePage} />
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
