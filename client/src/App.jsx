import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import IndexPage from "./pages/IndexPage";
import DashboardPage from "./pages/DashboardPage";
import axios from "axios";
import { RequireAuth } from "react-auth-kit";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  axios.defaults.baseURL = "http://localhost:4000";
  axios.defaults.withCredentials = true;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth loginPath="/login">
              {" "}
              <DashboardPage />
            </RequireAuth>
          }
        />
        <Route
          path="/favourites"
          element={
            <RequireAuth loginPath="/login">
              <FavoritesPage />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
}
//hello
export default App;
