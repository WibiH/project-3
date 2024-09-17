import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { AuthProviderWrapper } from "./context/authentication";
import { AttendanceProviderWrapper } from "./context/attendances";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>
        <AttendanceProviderWrapper>
          <App />
        </AttendanceProviderWrapper>
      </AuthProviderWrapper>
    </Router>
  </React.StrictMode>
);
