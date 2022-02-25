import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createProfile, getProfile } from '../../services/profile';

import ProfileView from '../../components/ProfileView/ProfileView';
import ProfileForm from '../../components/ProfileForm/ProfileForm';

export default function Profile({ isCreatingProfile = false }) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (error) {
        history.replace('/profile/create');
      }
      setLoading(false);
    };
    fetchData();
  }, []);

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

  const handleEdit = async () => {
    try {
    } catch (error) {}
  };

  if (loading) return <h3>Loading your profile...</h3>;

  return (
    <div>
      {/* <ProfileView profile={profile} /> */}
      <ProfileForm
        profile={profile}
        setProfile={setProfile}
        handleCreate={handleCreate}
      />
    </div>
  );
}
