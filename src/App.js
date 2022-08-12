import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';

//layouts
import MainLayout from './layouts/MainLayout';

//pages
import Homepage from './pages/homepage';
import Registration from './pages/registration';
import Login from './pages/login';
import './default.scss';

const initialState = {
  currentUser: null
}
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      ...initialState
    };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        });
      }

      this.setState({
        ...initialState
      })
    });
  }

  componentWillUnmount(){
    this.authListener();
  }

  render(){
    const { currentUser } = this.state;

    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => (
            <MainLayout currentUser={currentUser}>
              <Homepage />
            </MainLayout>
          )}/>
          <Route path="/register" render={() => currentUser ? <Redirect to="/"/> : (
            <MainLayout currentUser={currentUser}>
              <Registration />
            </MainLayout>
          )}/>
          <Route path="/login" 
            render={() => currentUser ? <Redirect to="/"/> : (
              <MainLayout currentUser={currentUser}>
                <Login />
              </MainLayout>
            )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
