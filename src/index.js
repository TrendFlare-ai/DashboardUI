import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "App";

// Vision UI Dashboard React Context Provider
import { VisionUIControllerProvider } from "context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Auth0Provider
    domain="dev-z8tivme55voqva1b.us.auth0.com"
    clientId="374NJxdkkNUXdhFPf045sn7xBY4vsaOQ"
    authorizationParams={{
      redirect_uri: "https://dev-z8tivme55voqva1b.us.auth0.com",
    }}
  >
    <BrowserRouter>
      <VisionUIControllerProvider>
        <App />
      </VisionUIControllerProvider>
    </BrowserRouter>
  </Auth0Provider>
);
