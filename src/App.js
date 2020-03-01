import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import StartPage from './Pages/StartPage/StartPage';
import Checkout from './Pages/Checkout/Checkout';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={StartPage} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
