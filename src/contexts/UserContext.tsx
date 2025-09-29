import React, { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  authenticateWithGoogle,
  AuthService,
  signOutUser,
} from "../services/auth.service";
import { User } from "../types/user";

export interface UserContextData {
  user: User | null;
  checkForUser: boolean;
  setUser: (user: User) => void;
  signInUser: () => void;
  logoutUser: () => void;
}

export const UserContext = createContext<UserContextData | null>(null);

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [checkForUser, setCheckForUser] = useState(true);

  // ------- check if there's a logged in user before retrieving any tasks
  useEffect(function checkForAuthenticatedUser() {
    // check if there is a current user
    AuthService.onAuthStateChanged((user) => {
      // if there is a user update state with the dbRef and loggedIn to true
      if (user) {
        setUser({ id: user.uid });
      }
      // set checkForUser to false
      setCheckForUser(false);
    });
  }, []);

  // --------------------------- signInUser (Google Auth)
  const signInUser = async () => {
    try {
      const user = await authenticateWithGoogle();

      setUser({ id: user.uid });
      setCheckForUser(true);
    } catch (error) {
      Swal.fire({
        title: "Oops!",
        text: "There was an error signing in: " + error,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  // --------------------------- logoutUser
  const logoutUser = async () => {
    try {
      await signOutUser();
      setUser(null);

      setCheckForUser(true);
    } catch (error) {
      // if there is an error, display an alert
      Swal.fire({
        title: "Oops!",
        text: "There was an error while logging out: " + error,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const value = {
    user,
    checkForUser,
    setUser,
    signInUser,
    logoutUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw Error("`useUser` can only be used within `UserContext.Provider`");
  }

  return context;
}

export default UserProvider;
