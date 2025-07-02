import "./App.css";

import AppRoutes from "./routes/Approutes"
import React from "react";
import { ReturnBoxProvider } from "./context/ReturnContext";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ReturnBoxProvider>
    <Router>
      <div className="app">
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        <AppRoutes />
      </div>
    </Router>
    </ReturnBoxProvider>
  
  );
}

export default App;