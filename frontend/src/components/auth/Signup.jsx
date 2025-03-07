import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../api';
import {
  SignupContainer,
  Form,
  FormTitle,
  Input,
  RoleContainer,
  RadioLabel,
  RadioInput,
  ErrorMessage,
  SuccessMessage,
  SubmitButton,
  StyledLink
} from './Signup.styles';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await signup({ username, email, password, role });
      setSuccess(true);
      setUsername('');
      setEmail('');
      setPassword('');
      setTimeout(() => navigate('/login'), 2000); // Redirect after 2 seconds
    } catch (err) {
      setError(err.response?.data.message || 'Something went wrong!');
    }
  };

  return (
    <SignupContainer>
      <Form onSubmit={handleSignup}>
        <FormTitle>Signup</FormTitle>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>User registered successfully! You can log in now.</SuccessMessage>}

        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <RoleContainer>
          <RadioLabel>
            <RadioInput
              type="radio"
              value="user"
              checked={role === 'user'}
              onChange={() => setRole('user')}
            />
            User
          </RadioLabel>
          <RadioLabel>
            <RadioInput
              type="radio"
              value="admin"
              checked={role === 'admin'}
              onChange={() => setRole('admin')}
            />
            Admin
          </RadioLabel>
        </RoleContainer>

        <SubmitButton type="submit">Signup</SubmitButton>
        <StyledLink> have an account <a href='/login'>Login</a></StyledLink>
      </Form>
    </SignupContainer>
  );
};

export default Signup;