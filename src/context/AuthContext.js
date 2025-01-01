"use client"; // Mark this as a client-side component

import { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react"; // Ensure you're importing the right function from next-auth

const AuthContext = createContext({
  isAuthenticated: false,
  userAuthority: null,
}); // Provide default values for context

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const { data: session, status } = useSession(); // Using next-auth's useSession hook
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userAuthority, setUserAuthority] = useState(null);

  useEffect(() => {
    if (status === "loading") {
      return; // You might want to show a loading spinner here, but no need to update state
    }

    if (status === "authenticated") {
      setIsAuthenticated(true);
      setUserAuthority(session?.user?.role || null); // Ensure session and role are safely accessed
    } else {
      setIsAuthenticated(false);
      setUserAuthority(null);
    }
  }, [status, session]); // Re-run when session or status changes

  return (
    <AuthContext.Provider value={{ isAuthenticated, userAuthority }}>
      {children}
    </AuthContext.Provider>
  );
};
