import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { PeliculaProvider } from "./context/PeliculaContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserProvider>
      <PeliculaProvider>
        <PayPalScriptProvider
          options={{
            "client-id":
              "AZc7yPXHg2IevIKYWE87PZ40fLhlf-0lFkUNpq7vK4BcSgI-WtfMaBhrMeSsKNtn3HbPtzeOQH0YiLMR",
          }}
        >
          <App />
        </PayPalScriptProvider>
      </PeliculaProvider>
    </UserProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
