import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Main from "./pages/Main/Main";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Activation from "./pages/Auth/Activation/Activation";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Tracking from "./pages/Tracking/Tracking";
import { ALert } from "./UI/Alert/Alert";
import { api } from "./Api";

function App() {
  const [time, setTime] = useState([]);
  const location = useLocation();

  useEffect(() => {
    api
      .get("work-time")
      .then((response) => {
        setTime(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const PrivateRoute = ({ element }) => {
    const token = localStorage.getItem("token");

    return token
      ? element
      : ALert("Войдите чтобы узнать больше!", "warning") || (
          <Navigate to="/login" replace />
        );
  };

  return (
    <div className="App">
      <Header time={time} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="activation" element={<Activation />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route
          path="dashboard"
          element={<PrivateRoute element={<Dashboard />} />}
        />
        <Route path="tracking" element={<Tracking />} />
      </Routes>
      <Footer time={time} />
    </div>
  );
}

export default App;
