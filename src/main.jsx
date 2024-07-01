import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Context
import { MovieProvider } from "./components/Context/MovieContext.jsx";

// Component
import App from "./App.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <MovieProvider>
                <App />
            </MovieProvider>
        </BrowserRouter>
    </React.StrictMode>
);
