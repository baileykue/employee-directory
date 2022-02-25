import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { signOutUser } from '../../services/users';

export default function Header() {
  const { user, setUser } = useUser();

  return (
    <header>
      {user.email ? (
        <>
          <p>Welcome, {user.email?.split('@')[0]}</p>
          <button
            onClick={async () => {
              await signOutUser();
              setUser({});
            }}
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          <p>Hello! Would you like to sign in?</p>
          <Link to="/login">Log In</Link>
        </>
      )}
    </header>
  );
}
