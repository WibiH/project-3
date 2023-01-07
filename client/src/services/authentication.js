import api from "./api";

export const login = (email, password) =>
  api
    .post("/authentication/sign-in", { email, password })
    .then((response) => response.data);

export const signup = (
  name,
  profilePicture,
  pronoun,
  status,
  email,
  password
) =>
  api
    .post("/authentication/sign-up", {
      name,
      profilePicture,
      pronoun,
      status,
      email,
      password,
    })
    .then((response) => response.data);

export const verify = (storedToken) =>
  api
    .get("/authentication/verify", {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
    .then((response) => response.data);
