import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authentication";
import { signup } from "../services/authentication";
import { IKContext, IKUpload } from "imagekitio-react";

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [pronoun, setPronoun] = useState("he/him/his");
  const [status, setStatus] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleNameChange = (event) => setName(event.target.value);
  const handleProfilePictureChange = (event) => {
    console.log(event.target.value);
    setProfilePicture(event.target.value);
  };
  const handlePronounChange = (event) => setPronoun(event.target.value);
  const handleStatusChange = (event) => setStatus(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const { setUser, setIsLoading, setAuthToken } = useAuthContext();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("NAME", name, "PROFILEPICTURE", typeof profilePicture);
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
  };

  const onProfileUploadError = (error) => {
    console.log("onProfileUploadError", error);
  };

  const onProfileUploadSuccess = (value) => {
    console.log("onProfileUploadSuccess", value);
    const { url } = value;
    setProfilePicture(url);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="flex flex-col m-8">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          className="bg-white border rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />

        {/* <label htmlFor="profilePicture" className='block mb-2 text-sm font-medium text-gray-900'>Profile picture</label>
        <input
          id="profilePicture"
          className: 'block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white focus:outline-none'
          type="file"
          name="profilePicture"
          placeholder="Profile picture"
          value={profilePicture}
          onChange={handleProfilePictureChange}
        /> */}

        {profilePicture && (
          <img
            src={profilePicture}
            alt={name}
            className="w-1/2 rounded-md mt-4"
          />
        )}

        <IKContext
          // Required for image displayed
          urlEndpoint={process.env.REACT_APP_IMAGEKIT_URL}
          // Required for image upload
          publicKey={process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY}
          authenticationEndpoint={
            process.env.REACT_APP_API_BASE_URL +
            process.env.REACT_APP_AUTHENTICATION_ENDPOINT
          }
        >
          <IKUpload
            onError={onProfileUploadError}
            onSuccess={onProfileUploadSuccess}
          />
        </IKContext>

        <label htmlFor="pronoun">Pronoun</label>
        <select
          id="pronoun"
          className="bg-white border rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
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
            style={{ color: "mediumpurple" }}
            id="status-user"
            className="w-4 h-4 border-gray-300 focus:ring-purple-500 focus:border-purple-500"
            type="radio"
            name="status-user"
            checked={status === "user"}
            value="user"
            onChange={handleStatusChange}
          />
          <label htmlFor="status-user">User</label>

          <input
            style={{ color: "mediumpurple" }}
            id="status-admin"
            className="w-4 h-4 border-gray-300 focus:ring-purple-500 focus:border-purple-500"
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
          className="bg-white border rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
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
          className="bg-white border rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={handlePasswordChange}
        />

        {errorMessage && (
          <div className="bg-rose-200 border border-orange-600 p-4 mt-4 rounded-md">
            <span className="text-orange-700">{errorMessage}</span>
          </div>
        )}
        <button
          className="btn-rainbow mx-auto;
    mx-auto"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
