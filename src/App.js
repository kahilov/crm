import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import { observer, inject } from "mobx-react";
import Actions from "./mainComponents/Actions";
import Analytics from "./mainComponents/Analytics";
import Clients from "./mainComponents/Clients";
@inject("clientStore")
@observer
class App extends Component {
  componentWillMount() {
    this.props.clientStore.getClients();
    this.props.clientStore.formatDate()
    this.props.clientStore.getOwners();
    this.props.clientStore.getCountries();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="main-links">
            <Link className="main-links" to="/clients">
              Clients
            </Link>
            <Link className="main-links" to="/actions">
              Actions
            </Link>
            <Link className="main-links" to="/analytics">
              Analytics
            </Link>
          </div>
          <Route path="/clients" exact render={() => <Clients />} />
          <Route path="/actions" exact render={() => <Actions />} />
          <Route path="/analytics" exact render={() => <Analytics />} />
        </div>
      </Router>
    );
  }
}
export default App;
