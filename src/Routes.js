import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { Posts } from "./components/containers";


class Routes extends Component {
  render() {
    return (
        <Switch>
            <Route path="/posts" component={Posts} />
        </Switch>
    );
  }
}

export default Routes;
