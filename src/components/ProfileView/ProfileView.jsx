import React from 'react';
import { useHistory } from 'react-router-dom';
import { useProfile } from '../../context/ProfileContext';

export default function ProfileView() {
  const {
    profile: { name, email, birthday, bio },
    loading,
  } = useProfile();

  const history = useHistory();

  const handleSubmit = () => {
    history.push('/profile/edit');
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
    </div>
  );
}
