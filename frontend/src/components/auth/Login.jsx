import React, { useState, useContext } from 'react';
import { login } from '../../api'; // Ensure this function makes the API request to authenticate
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context';
import {
  LoginContainer,
  Form,
  FormTitle,
  Input,
  SubmitButton,
} from './Login.styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setToken, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      const { token, user } = response.data; // Adjust based on actual response structure
      setToken(token);
      setCurrentUser(user);

      // Redirect based on user role
      if (user.role === 'admin') {
        navigate('/admin');
      } else if (user.role === 'user') {
        navigate('/user');
      } else {
        console.error('User role is not recognized:', user.role);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <LoginContainer>
      <Form onSubmit={handleLogin}>
        <FormTitle>Login</FormTitle>
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
        <SubmitButton type="submit">Login</SubmitButton>
        <p>don't have an account <a href='/signup'>signup</a></p>
      </Form>
    </LoginContainer>
  );
};

export default Login;