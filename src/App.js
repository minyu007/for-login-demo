import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';

import store, { history } from './store';
import Login from './components/Login';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={Login} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
