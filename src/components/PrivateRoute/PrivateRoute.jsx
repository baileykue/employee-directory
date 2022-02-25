import { Redirect, Route } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function PrivateRoute({ children, ...restProps }) {
  const { user } = useUser();

  return (
    <Route
      {...restProps}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
