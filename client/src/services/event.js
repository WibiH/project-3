import api from "./api";

export const eventLoadRandom = () =>
  api.get("/events/random").then((response) => response.data);

export const eventLoadAll = () =>
  api.get("/events").then((response) => response.data);
