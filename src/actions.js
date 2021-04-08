import { LOGIN, LOGOUT } from "./action-types";

export const login = () => {
  return {
    type: LOGIN,
    payload: { userId: 123, username: "Testuser", token: "ab123" },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
