import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';
import { setCurrentUser } from './redux/User/user.actions';

//hoc
import WithAuth from './hoc/withAuth';

//layouts
import MainLayout from './layouts/MainLayout';

//pages
import Homepage from './pages/homepage';
import Registration from './pages/registration';
import Login from './pages/login';
import Recovery from './pages/recovery';
import Dashboard from './pages/dashboard';
import './default.scss';

const App = props => {
  const { setCurrentUser, currentUser } = props;

  useEffect(() => {

    const authListener = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        })
      }

      setCurrentUser(userAuth);
    });
    
    return () => {
      authListener();
    }
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (
          <MainLayout>
            <Homepage />
          </MainLayout>
        )} />
        <Route path="/register" render={() => (
          <MainLayout>
            <Registration />
          </MainLayout>
        )} />
        <Route path="/login" render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )} />
        <Route path="/recovery" render={() => (
          <MainLayout>
            <Recovery />
          </MainLayout>
        )} />
        <Route path="/dashboard" render={() => (
          <WithAuth>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </WithAuth>
        )} />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
