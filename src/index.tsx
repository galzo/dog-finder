import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./components/App";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
root.render(
    <Auth0Provider
        domain="dog-finder.eu.auth0.com"
        clientId="8AQ2bGZCSUHQ41Et9f139z6aabFNanxG"
        authorizationParams={{
            redirect_uri: `${window.location.origin}/dog-finder`,
            audience: "https://galzo.github.io/dog-finder/",
            scope: "read:dogs",
        }}
    >
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
