import { useUser } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
import { signInUser, signUpUser } from '../../services/users';
import AuthForm from '../../components/AuthForm/AuthForm';

export default function Auth({ isSigningUp = false }) {
  const { setUser } = useUser();
  const history = useHistory();

  const handleAuth = async (email, password) => {
    try {
      if (isSigningUp) {
        await signUpUser(email, password);
        history.replace('/profile');
      } else {
        const data = await signInUser(email, password);
        setUser({ id: data.id, email: data.email });
        history.replace('/profile');
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <AuthForm handleAuth={handleAuth} />
    </div>
  );
}
