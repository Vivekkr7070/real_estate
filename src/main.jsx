import React, { useEffect } from "react"; // Import useEffect
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const AuthWrapper = () => {
  useEffect(() => {
    const loadData = async () => {
      console.log(import.meta.env.VITE_AUTH_DOMAIN);
    };
    loadData(); 
  }, []);

  return <App />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH_DOMAIN}
      clientId={import.meta.env.VITE_AUTH_CLIENT_ID}
      authorizationParams={{
        redirect_uri: import.meta.env.VITE_AUTH_REDIRECT_URI,
        audience: import.meta.env.VITE_AUTH_AUDIENCE,
        scope: "openid profile email",
      }}
    >
      <AuthWrapper />
    </Auth0Provider>
  </React.StrictMode>
);