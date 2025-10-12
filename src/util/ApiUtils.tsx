import { getAuthToken } from "../services/auth.service";

export async function getAuthorizationHeader() {
  const token = await getAuthToken();

  if (!token) {
    return;
  }

  return {
    authorization: `Bearer ${token}`,
  };
}
