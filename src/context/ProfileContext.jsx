import { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getProfile } from '../services/profile';

export const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

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

  const profileValues = { profile, setProfile, loading, setLoading };

  return (
    <ProfileContext.Provider value={profileValues}>
      {children}
    </ProfileContext.Provider>
  );
};

const useProfile = () => {
  const context = useContext(ProfileContext);

  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }

  return context;
};

export { ProfileProvider, useProfile };
