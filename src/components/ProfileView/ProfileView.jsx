import React from 'react';

export default function ProfileView({ profile }) {
  return (
    <div>
      <h2>Your Personnel File</h2>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Birthday: {profile.birthday}</p>
      <p>Bio: {profile.bio}</p>
      <button onClick={handleSubmit}>Edit</button>
    </div>
  );
}
