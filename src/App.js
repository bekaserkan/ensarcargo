import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Main from "./pages/Main/Main";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Activation from "./pages/Auth/Activation/Activation";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const PrivateRoute = ({ element }) => {
    const token = localStorage.getItem("token");

    return token ? element : <Navigate to="/login" replace />;
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="activation" element={<Activation />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute element={<Dashboard />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
