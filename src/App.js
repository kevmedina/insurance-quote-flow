import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import BusinessDetails from "./components/businessDetails/businessDetails";
import GeneralInfo from "./components/generalInfo/generalInfo";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/" component={Landing} /> */}
        <Route exact path="/general-info" component={GeneralInfo} />
        <Route exact path="/business-details" component={BusinessDetails} />
      </Switch>
    </div>
  );
}

export default App;
