import React from "react";
import "./App.css";
import News from "./components/News";
import Navbar from "./components/Navbar";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <News category="general" />
          </Route>
          <Route exact key="business" path="/business">
            <News category="business" />
          </Route>
          <Route exact key="sports" path="/sports">
            <News category="sports" />
          </Route>
          <Route exact key="entertainment" path="/entertainment">
            <News category="entertainment" />
          </Route>
          <Route exact key="health" path="/health">
            <News category="health" />
          </Route>
          <Route exact key="science" path="/science">
            <News category="science" />
          </Route>
          <Route exact key="technology" path="/technology">
            <News category="technology" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
