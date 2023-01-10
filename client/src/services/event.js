import api from "./api";

export const eventLoadRandom = () =>
  api.get("/events/random").then((response) => response.data);

export const eventLoadAll = () =>
  api.get("/events").then((response) => response.data);

export const eventAdd = (event, storedToken) =>
  api
    .post("/events", event, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
    .then((response) => response.data);

export const eventEdit = (id, event, storedToken) =>
  api
    .patch(`/events/${id}`, event, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
    .then((response) => response.data);

export const eventDelete = (id, storedToken) =>
  api
    .delete(`/events/${id}`, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
    .then((response) => response.data);
