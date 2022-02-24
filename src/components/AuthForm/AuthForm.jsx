import { useState } from 'react';

export default function AuthForm({ handleAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleAuth(email, password);
  };

  return (
    <form>
      <label>
        Email:
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
