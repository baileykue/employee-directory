import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function ProfileForm({
  profile,
  handleCreate,
  handleEdit,
  updateProfileForm,
}) {
  const { name, email, birthday, bio } = profile;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      handleCreate(name, email, bio, birthday);
    } else {
      handleEdit(name, email, bio, birthday);
    }
  };

  return (
    <form>
      {!name && <h3>You must create a profile to continue</h3>}
      {/* {name && <Redirect to="/profile" />} */}
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
      <button onClick={handleSubmit}>Save</button>
    </form>
  );
}
