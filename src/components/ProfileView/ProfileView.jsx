import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useProfile } from '../../context/ProfileContext';

export default function ProfileView() {
  const {
    profile: { name, email, birthday, bio },
    loading,
  } = useProfile();

  console.log(birthday);

  const history = useHistory();

  const handleSubmit = () => {
    history.push('/profile/form');
  };

  if (loading) return <h3>Loading your profile...</h3>;

  return (
    <div>
      <h2>Your Personnel File</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Birthday: {birthday}</p>
      <p>Bio: {bio}</p>
      <button onClick={handleSubmit}>Edit</button>
      <Link to="/">View Home Page</Link>
    </div>
  );
}
