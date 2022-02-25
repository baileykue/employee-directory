import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function ProfileForm({
  profile,
  handleCreate,
  updateProfileForm,
}) {
  const { name, email, birthday, bio } = profile;

  // const [email, setEmail] = useState('');
  // const [name, setName] = useState('');
  // const [birthday, setBirthday] = useState('');
  // const [bio, setBio] = useState('');

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
          onChange={(e) => updateProfileForm('name', e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => updateProfileForm('email', e.target.value)}
        />
      </label>
      <label>
        Birthday:
        <input
          type="date"
          value={birthday}
          onChange={(e) => updateProfileForm('date', e.target.value)}
        />
      </label>
      <label>
        Bio:
        <textarea
          value={bio}
          onChange={(e) => updateProfileForm('bio', e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
