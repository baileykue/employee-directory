import React from 'react';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();

  return <div>{user ? <p>Welcome, {user.email}</p> : <p>Hello! </p>}</div>;
}
