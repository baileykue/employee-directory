import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

import Home from './components/Home/Home';
import Auth from './views/Auth/Auth';
import Header from './components/Header/Header';
import Profile from './views/Profile/Profile';

export default function App() {
  return (
    <div>
      <UserProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/login">
              <Auth />
            </Route>
            <Route path="/register">
              <Auth isSigningUp />
            </Route>

            <Route path="/profile/create">
              <Profile isCreatingProfile />
            </Route>
            <Route path="/profile/edit">
              <Profile />
            </Route>

            <Route path="/profile">
              <Profile />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}
