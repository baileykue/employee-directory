import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import { getProfile } from '../../services/profile';

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

  if (loading) return <h3>Loading your profile...</h3>;

  return (
    <div>
      <ProfileForm profile={profile} />
    </div>
  );
}
