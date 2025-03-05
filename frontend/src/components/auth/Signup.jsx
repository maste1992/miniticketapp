// src/components/Auth/Signup.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../api';
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
      
      navigate('/login'); 
    } catch (err) {
      // Handle errors (if any)
      setError(err.response?.data.message || 'Something went wrong!');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSignup} className="bg-white p-6 rounded shadow-md">
        <h2 className="mb-4 text-xl text-center">Signup</h2>
        
        {error && <div className="bg-red-200 text-red-700 p-2 rounded mb-4">{error}</div>}
        {success && <div className="bg-green-200 text-green-700 p-2 rounded mb-4">User registered successfully! You can log in now.</div>}
        
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="mb-4 w-full p-2 border rounded"
        />
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
        
        {/* Role Selection */}
        <div className="mb-4">
          <label className="mr-2">
            <input
              type="radio"
              value="user"
              checked={role === 'user'}
              onChange={() => setRole('user')}
            />
            User
          </label>
          <label className="mr-2">
            <input
              type="radio"
              value="admin"
              checked={role === 'admin'}
              onChange={() => setRole('admin')}
            />
            Admin
          </label>
        </div>
        
        <button type="submit" className="w-full bg-indigo-500 text-white p-2 rounded">Signup</button>
      </form>
    </div>
  );
}

export default Signup;