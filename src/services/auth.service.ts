import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseApp } from "../firebase";

const AuthService = getAuth(FirebaseApp);

export async function authenticateWithGoogle() {
  const provider = new GoogleAuthProvider();

  const { user } = await signInWithPopup(AuthService, provider);

  return user;
}

export function signOutUser() {
  return AuthService.signOut();
}

export function handleOnAuthStateChanged(
  callback: Parameters<typeof AuthService.onAuthStateChanged>[0],
) {
  AuthService.onAuthStateChanged(callback);
}

export async function getAuthToken() {
  return await AuthService.currentUser?.getIdToken();
}
