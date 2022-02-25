import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { ProfileProvider } from './context/ProfileContext';
import { UserProvider } from './context/UserContext';
import App from './App';

test.only('that the user can log in and see profile', async () => {
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

  const userName = await screen.findByText(/bailey/i);
  expect(userName).toBeInTheDocument();

  const edit = await screen.findByLabelText('edit');
  expect(edit).toBeInTheDocument();
  userEvent.click(edit);

  const name = await screen.findByLabelText(/name:/i);
  expect(name).toBeInTheDocument();

  const userEmail = await screen.findByLabelText(/email:/i);
  expect(userEmail).toBeInTheDocument();

  const birthday = await screen.findByLabelText(/birthday:/i);
  expect(birthday).toBeInTheDocument();

  const bio = await screen.findByLabelText(/bio:/i);
  expect(bio).toBeInTheDocument();

  userEvent.type(name, '{selectAll}{del}B-bops');
  expect(name).toHaveValue('B-bops');

  userEvent.type(userEmail, '{selectAll}{del}b.bops@gmail.com');
  expect(userEmail).toHaveValue('b.bops@gmail.com');

  userEvent.type(birthday, '{selectAll}{del}1996-08-08');
  expect(birthday).toHaveValue('1996-08-08');

  userEvent.type(
    bio,
    '{selectAll}{del}stressed, depressed, but well dressed & caffinated'
  );
  expect(bio).toHaveValue('stressed, depressed, but well dressed & caffinated');

  const save = await screen.findByRole('button', { name: /save/i });
  expect(save).toBeInTheDocument();

  userEvent.click(save);

  const newName = await screen.findByText(/b-bops/i);
  expect(newName).toBeInTheDocument();

  const stressed = await screen.findByText(/stressed/i);
  expect(stressed).toBeInTheDocument();
});
