import React from 'react';
import { Route, Switch } from 'react-router-dom';

//layouts
import MainLayout from './layouts/MainLayout'

//pages
import Homepage from './pages/homepage';
import Registration from './pages/registration';
import './default.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (
          <MainLayout>
            <Homepage />
          </MainLayout>
        )}/>
        <Route path="/register" render={() => (
          <MainLayout>
            <Registration />
          </MainLayout>
        )}/>
      </Switch>
    </div>
  );
}

export default App;
