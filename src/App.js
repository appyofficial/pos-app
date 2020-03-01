import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import StartPage from './Pages/StartPage/StartPage';

class App extends React.Component {
  render() {
    return (

      <React.Fragment>
        <Switch>
          <Route exact path='/' component={StartPage} />
          <Route exact path='/home' component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
