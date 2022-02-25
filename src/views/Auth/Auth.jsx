import { useUser } from '../../context/UserContext';
import { Link, useHistory } from 'react-router-dom';
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
      {isSigningUp ? (
        <>
          <p>Already have an account?</p>
          <Link to="/login">Log In</Link>
        </>
      ) : (
        <>
          <p>Need to make an account?</p>
          <Link to="/register">Register</Link>
        </>
      )}
    </div>
  );
}
