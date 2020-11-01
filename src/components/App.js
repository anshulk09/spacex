import '../stylesheets/App.scss';
import Dashboard from './Dashboard';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/launches" component={Dashboard} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
