import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if a user is logged in on component mount
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          // Dispatch login action if user data is available
          dispatch(login({ userData }));
        } else {
          // Dispatch logout action if no user data is available
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  // Render the app content after loading is complete
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        {/* Render the header */}
        <Header />
        <main>
          {/* Render nested routes */}
          <Outlet />
        </main>
        {/* Render the footer */}
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
