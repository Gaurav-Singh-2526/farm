import { createContext, useContext, useEffect, useState } from "react";

// Create Context
const AuthContext = createContext();

// Provider Component
export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState( localStorage.getItem("loggedInUser") || null);


  // ✅ Load user on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  // ✅ Login function
  const login = (userName) => {
    localStorage.setItem("loggedInUser", userName);
    setLoggedInUser(userName);
  };

  // ✅ Logout function
  const logout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("userId");
    setLoggedInUser(null);
  };

  return (
    <AuthContext.Provider value={{ loggedInUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom Hook
export const useAuth = () => {
  return useContext(AuthContext);
};
