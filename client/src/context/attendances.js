import React, { useState, createContext, useContext, useEffect } from "react";
import { attendanceLoadAll } from "../services/attendances";
import { useAuthContext } from "./authentication";

export const AttendanceContext = createContext();

export const AttendanceProviderWrapper = ({ children }) => {
  // to do: state
  const [attendances, setAttendances] = useState([]);
  const [reloadAttendances, setReloadAttendances] = useState(true);
  const { authToken } = useAuthContext();

  useEffect(() => {
    if (reloadAttendances) {
      attendanceLoadAll(authToken).then((data) => {
        console.log(data.attendances);
        setAttendances(data.attendances);
        setReloadAttendances(false);
      });
    }
  }, [authToken, reloadAttendances]);

  return (
    <AttendanceContext.Provider
      value={{
        attendances,
        setAttendances,
        reloadAttendances,
        setReloadAttendances,
      }}
    >
      {children}
    </AttendanceContext.Provider>
  );
};

// Custom react hook
export const useAttendanceContext = () => useContext(AttendanceContext);
