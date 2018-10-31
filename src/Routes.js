import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { Overview, Author } from "./components/containers";


class Routes extends Component {
  render() {
    return (
        <Switch>
            <Route path="/overview" component={Overview} />
            <Route exact path="/author/:id" component={Author} />
        </Switch>
    );
  }
}

export default Routes;
