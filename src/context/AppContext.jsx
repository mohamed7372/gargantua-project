import React, { createContext, useContext, useState } from 'react';

// Create context
const AppContext = createContext();

// Custom hook for using the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

// Provider component
export const AppProvider = ({ children }) => {
  // Add any global state here
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Mock login function
  const login = (credentials) => {
    setLoading(true);
    // In a real app, this would make an API call
    setTimeout(() => {
      setIsAuthenticated(true);
      setUser({
        id: 1,
        name: 'Demo User',
        email: credentials.email,
        role: 'client'
      });
      setLoading(false);
    }, 1000);
  };

  // Mock logout function
  const logout = () => {
    setLoading(true);
    // In a real app, this would make an API call
    setTimeout(() => {
      setIsAuthenticated(false);
      setUser(null);
      setLoading(false);
    }, 500);
  };

  // Values to be provided to consumers
  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    logout
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
