import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { Overview } from "./components/containers";


class Routes extends Component {
  render() {
    return (
        <Switch>
            <Route path="/overview" component={Overview} />
        </Switch>
    );
  }
}

export default Routes;
