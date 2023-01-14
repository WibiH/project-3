import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import { AuthProviderWrapper } from "./context/authentication";
import { useAuthContext } from "./context/authentication";
import EventCreatePage from "./pages/EventCreatePage";
import EventEditDeletePage from "./pages/EventEditDeletePage";
import EventDisplaySinglePage from "./pages/EventDisplaySinglePage";
import EventDisplayAllPage from "./pages/EventDisplayAllPage";
import Tour from "./pages/Tour";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/events" element={<EventDisplayAllPage />} />
        <Route
          path="/events/create"
          element={
            // <EventCreatePage />
            // <EventCreatePage user={user} />
            user && <EventCreatePage />
            // || (
            //   <AuthenticationRequiredErrorPage />
            // )
          }
        />
        <Route
          path="/events/:id/edit"
          element={
            <EventEditDeletePage />
            // (user && <EventEditDeletePage />) || (
            //   <AuthenticationRequiredErrorPage />
            // )
          }
        />
        <Route path="/events/:id" element={<EventDisplaySinglePage />} />
        {/* <Route path="/profile" element={user && <ProfilePage />} /> */}

        <Route path="/profile/:id" element={user && <ProfilePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/tour" element={<Tour />} />
      </Routes>
    </div>
  );
}

export default App;
