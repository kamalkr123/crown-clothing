import { createContext } from "react";
import { useState, useEffect } from "react";
import {
  createUserDocumentAuth,
  onAuthStateChangedListner,
} from "../Utils/Firebase/FirebaseUtils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  isLoading: true,
  setIsLoading: () => null,
  isAuthenticated: false,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const value = {
    currentUser,
    setCurrentUser,
    isAuthenticated,
    setIsAuthenticated,
    isLoading,
    setIsLoading,
  };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangedListner((user) => {
  //     if (user) {
  //       createUserDocumentAuth(user);
  //     }
  //     setCurrentUser(user);
  //     setIsLoading(false);
  //   });

  //   return unsubscribe;
  // }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
