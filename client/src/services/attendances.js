import api from "./api";

export const attendanceLoadAll = () =>
  api.get("/profile").then((response) => response.data);
