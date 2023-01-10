import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import EventDisplayAll from "./pages/EventDisplayAllPage";
import HomePage from "./pages/HomePage";
import Profile from "./pages/ProfilePage";
import SignUp from "./pages/SignUpPage";
import LogIn from "./pages/LogInPage";
import { AuthProviderWrapper } from "./context/authentication";
import EventCreatePage from "./pages/EventCreatePage";

function App() {
  return (
    <div className="App">
      <AuthProviderWrapper>
        <Navbar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/events" element={<EventDisplayAll />} />
          <Route
            path="/events/create"
            element={
              <EventCreatePage />
              // (user && <EventCreatePage />) || (
              //   <AuthenticationRequiredErrorPage />
              // )
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </AuthProviderWrapper>
    </div>
  );
}

export default App;
