import React, { Suspense } from "react";
import "./App.css";
import Home from "./components/index";
import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <Suspense fallback="loading">
      <>
        <CssBaseline />
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </>
    </Suspense>
  );
}

export default App;
