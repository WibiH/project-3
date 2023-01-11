import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../context/authentication";
import { signup } from "../services/authentication";

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [pronoun, setPronoun] = useState("");
  const [status, setStatus] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleNameChange = (event) => setName(event.target.value);
  const handleProfilePictureChange = (event) =>
    setProfilePicture(event.target.value);
  const handlePronounChange = (event) => setPronoun(event.target.value);
  const handleStatusChange = (event) => setStatus(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const { setUser, setIsLoading, setAuthToken } = useAuthContext();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!name.startsWith("Wi")) {
      signup(name, profilePicture, pronoun, status, email, password)
        .then((data) => {
          const { user, authToken } = data;
          setUser(user);
          setIsLoading(false);
          setAuthToken(authToken);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
          setErrorMessage("There was an error authenticating you.");
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="flex flex-col m-8">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />

        <label htmlFor="profilePicture">Profile picture</label>
        <input
          id="profilePicture"
          type="file"
          name="profilePicture"
          placeholder="Profile picture"
          value={profilePicture}
          onChange={handleProfilePictureChange}
          required
        />

        <label htmlFor="pronoun">Pronoun</label>
        <select
          id="pronoun"
          type="text"
          name="pronoun"
          placeholder="Pronoun"
          value={pronoun}
          onChange={handlePronounChange}
          required
        >
          <option value="he/him/his">he/him/his</option>
          <option value="she/her/hers">she/her/hers</option>
          <option value="they/them/their">they/them/their</option>
          <option value="other">other</option>
        </select>

        <div>
          <input
            id="status-user"
            type="radio"
            name="status-user"
            checked={status === "user"}
            value="user"
            onChange={handleStatusChange}
          />
          <label htmlFor="status-user">User</label>

          <input
            id="status-admin"
            type="radio"
            name="status-admin"
            checked={status === "admin"}
            value="admin"
            onChange={handleStatusChange}
          />
          <label htmlFor="status-admin">Admin</label>
        </div>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={handlePasswordChange}
        />

        {errorMessage && (
          <div className="bg-rose-200 border border-rose-600 p-4 mt-4 rounded-md">
            <span className="text-rose-700">{errorMessage}</span>
          </div>
        )}
        <button className="btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
