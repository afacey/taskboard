import { create } from "zustand";
import { authenticateWithGoogle, signOutUser } from "../services/auth.service";
import { User } from "../types/user.type";
import { showErrorAlert } from "../util/ErrorUtils";
import { FirebaseError } from "firebase/app";

export interface UserState {
  user: User | null;
  userInitialized: boolean;
}

export const useUser = create<UserState>()(() => ({
  user: null,
  userInitialized: false,
}));

export function setUser(user: User) {
  useUser.setState(() => ({ user }));
}

export function setUserInitialized(userInitialized: boolean) {
  useUser.setState(() => ({ userInitialized }));
}

export async function signInUser() {
  try {
    const user = await authenticateWithGoogle();

    useUser.setState(() => ({
      user: { id: user.uid },
    }));
  } catch (error) {
    if (error instanceof FirebaseError) {
      if (error.code === "auth/popup-closed-by-user") return;
    }
    showErrorAlert("There was an error signing in: " + error);
  }
}

export async function logoutUser() {
  try {
    await signOutUser();

    useUser.setState(() => ({ user: null }));
  } catch (error) {
    showErrorAlert("There was an error while logging out: " + error);
  }
}
