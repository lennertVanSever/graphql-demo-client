import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { Posts, Chat } from "./components/containers";


class Routes extends Component {
  render() {
    return (
        <Switch>
            <Route path="/posts" component={Posts} />
            <Route path="/chat" component={Chat} />
        </Switch>
    );
  }
}

export default Routes;
