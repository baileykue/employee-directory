import React from 'react';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();

  return (
    <header>
      {user ? (
        <>
          <p>Welcome, {user.email.split('@')[0]}</p>
          <button>Log Out</button>
        </>
      ) : (
        <>
          <p>Hello! Would yo ulike to sign in?</p>
          <button>Log In</button>
        </>
      )}
    </header>
  );
}
