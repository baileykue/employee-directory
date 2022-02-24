import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './views/Auth/Auth';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <Route path="/register">
            <Auth isSigningUp />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
