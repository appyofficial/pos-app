import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import StartPage from './Pages/StartPage/StartPage';
import './App.css'


class App extends React.Component {
  render() {
    let showMessage = <div className='incompatible'>
      <h2>This app is not compitable in your device.</h2>
      <p>Currenlty this app is only avilabel for iPad and all the desktops and laptop computers.
        In case of any question, please contact <a href='https://www.appysharma.com'>AppySharma</a>
      </p>
    </div>
    return (
      <React.Fragment>
        {window.screen.availWidth < 750 ? showMessage :
          (
            <Switch>
              <Route exact path='/' component={StartPage} />
              <Route exact path='/home' render={() => <Home />} />
            </Switch>
          )
        }
      </React.Fragment>
    );
  }
}

export default App;
