import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { ProfileProvider } from './context/ProfileContext';
import { UserProvider } from './context/UserContext';
import App from './App';

test('tests that the user can log in and see profile', async () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <ProfileProvider>
          <App />
        </ProfileProvider>
      </UserProvider>
    </MemoryRouter>
  );

  const header = screen.getByRole('heading', {
    name: /welcome to the monsters inc. employee directory!/i,
  });
  expect(header).toBeInTheDocument();

  const register = screen.getByRole('link', { name: /register/i });
  expect(register).toBeInTheDocument();

  const login = screen.getByRole('link', { name: /log in/i });
  expect(login).toBeInTheDocument();

  userEvent.click(login);

  const email = screen.getByLabelText(/email:/i);
  expect(email).toBeInTheDocument();

  const password = screen.getByLabelText(/password:/i);
  expect(password).toBeInTheDocument();

  const submit = screen.getByRole('button', { name: /submit/i });
  expect(submit).toBeInTheDocument();

  userEvent.type(email, 'bailey.kue@gmail.com');
  expect(email).toHaveValue('bailey.kue@gmail.com');

  userEvent.type(password, 'gitstashfeelings');
  expect(password).toHaveValue('gitstashfeelings');

  userEvent.click(submit);

  const greeting = await screen.findByText(/welcome, bailey.kue/i);
  expect(greeting).toBeInTheDocument();

  const name = await screen.findByText(/bailey/i);
  expect(name).toBeInTheDocument();
});
