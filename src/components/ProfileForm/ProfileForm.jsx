import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function ProfileForm({ profile, setProfile, handleCreate }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreate(name, email, bio, birthday);
  };

  return (
    <form>
      {!profile.name && <h3>You must create a profile to continue</h3>}
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Birthday:
        <input
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
      </label>
      <label>
        Bio:
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
