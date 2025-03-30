import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct import for React 18
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { UserProvider } from "./context/UserContext";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./index.css";

// ✅ React 18 requires createRoot() instead of render()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <UserProvider>
      <Router>
        <ToastContainer position="top-right" autoClose={2000} />
        <App />
      </Router>
    </UserProvider>
  </Provider>
);