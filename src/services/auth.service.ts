import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseApp } from "../firebase";

export const AuthService = getAuth(FirebaseApp);

export async function authenticateWithGoogle() {
  const provider = new GoogleAuthProvider();

  const { user } = await signInWithPopup(AuthService, provider);

  return user;
}

export function signOutUser() {
  return AuthService.signOut();
}
