import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-oxqf1wgbjhodwndb.us.auth0.com"
     clientId="QlfJZsSQWV1fGYLyGT7mdis5CttnLGq8"
     authorizationParams={{
      redirect_uri: "http://localhost:5173"
     }}
     audience="https://realestate-s9k7.onrender.com"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);