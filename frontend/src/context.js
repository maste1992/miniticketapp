// src/context.js

import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <AuthContext.Provider value={{ token, setToken, currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};