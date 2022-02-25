import { useHistory } from 'react-router-dom';
import { createProfile, updateProfile } from '../../services/profile';

import ProfileForm from '../../components/ProfileForm/ProfileForm';
import { useProfile } from '../../context/ProfileContext';

export default function Profile({ isCreatingProfile = false }) {
  const { profile, setProfile, setLoading, loading } = useProfile();
  const history = useHistory();

  const handleCreate = async (name, email, bio, birthday) => {
    try {
      const data = await createProfile({ name, email, bio, birthday });
      setProfile(data);
      history.replace('/profile');
    } catch (error) {
      throw new Error(
        'something went wrong! please make sure all fields are correctly filled out'
      );
    }
  };

  const handleEdit = async (name, email, bio, birthday) => {
    try {
      const [data] = await updateProfile({ name, email, bio, birthday });
      setProfile(data);
      history.push('/profile');
    } catch (error) {
      throw new Error('something went wrong! please try again');
    }
  };

  const updateProfileForm = (key, value) => {
    profile[key] = value;
    setProfile({ ...profile });
  };

  if (loading) return <h3>Loading the form...</h3>;

  return (
    <div>
      <ProfileForm
        profile={profile}
        handleCreate={handleCreate}
        handleEdit={handleEdit}
        updateProfileForm={updateProfileForm}
      />
    </div>
  );
}
