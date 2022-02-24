import React from 'react';

export default function Home() {
  return (
    <>
      <h1>Welcome to the Monsters Inc. Employee Directory!</h1>
      <p>
        As an employee of Monsters Inc., you're required to create a profile on
        our website in order to gain access to stuff.
      </p>
      <p>Create an account, then log in and fill out your account details.</p>
      <p>Thank you for your participation.</p>
      {user?.email ? (
        <Link to="/profile">View your profile</Link>
      ) : (
        <>
          <Link to="/register">Create Account</Link>
          {' or ' /* done using a "portal" to keep spacing intact */}
          <Link to="/login">Sign In</Link>
        </>
      )}
    </>
  );
}
