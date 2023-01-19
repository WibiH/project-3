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
      console.log("This is response.data of yes-attending", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log("This is the attendanceAdd-ERROR", error);
    });

export const attendanceDelete = (id, storedToken) =>
  api
    .delete(`/events/${id}/notattend`, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
    .then((response) => {
      console.log("This is response.data of not-attending", response.data);
      return response.data;
    });
