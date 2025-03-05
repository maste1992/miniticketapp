// src/components/Auth/Login.js

import React, { useState, useContext } from 'react';
import { login } from '../../api'; // Ensure this function makes the API request to authenticate
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context';

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
        navigate('/'); 
      } else {
        console.error("User role is not recognized:", user.role);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
        <h2 className="mb-4 text-xl text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mb-4 w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mb-4 w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}

export default Login;