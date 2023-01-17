import api from "./api";

export const attendanceLoadAll = (storedToken) =>
  api
    .get("/profile", {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
    .then((response) => response.data);

export const attendanceAdd = (id, attendance, storedToken) =>
  api
    .post(`/events/${id}/attend`, attendance, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
    .then((response) => {
      console.log("This is response.data", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

export const attendanceDelete = (id, attendance, storedToken) =>
  api
    .delete(`/events/${id}/notattend`, attendance, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
    .then((response) => response.data);
