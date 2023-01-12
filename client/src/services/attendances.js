import api from "./api";

export const attendanceLoadAll = () =>
  api.get("/profile").then((response) => response.data);

export const attendanceAdd = (id, attendance, storedToken) =>
  api
    .post(`/events/${id}/attend`, attendance, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
    .then((response) => response.data);

export const attendanceDelete = (id, attendance, storedToken) =>
  api
    .delete(`/events/${id}/attend`, attendance, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
    .then((response) => response.data);
