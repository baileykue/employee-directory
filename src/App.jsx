import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { ProfileProvider } from './context/ProfileContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import Home from './components/Home/Home';
import Auth from './views/Auth/Auth';
import Header from './components/Header/Header';
import Profile from './views/Profile/Profile';
import ProfileView from './components/ProfileView/ProfileView';

export default function App() {
  return (
    <div>
      <UserProvider>
        <ProfileProvider>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route path="/login">
                <Auth />
              </Route>
              <Route path="/register">
                <Auth isSigningUp />
              </Route>
              <PrivateRoute path="/profile/create">
                <Profile isCreatingProfile />
              </PrivateRoute>
              <PrivateRoute path="/profile/edit">
                <Profile />
              </PrivateRoute>

              <PrivateRoute exact path="/profile">
                <ProfileView />
              </PrivateRoute>

              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </BrowserRouter>
        </ProfileProvider>
      </UserProvider>
    </div>
  );
}
