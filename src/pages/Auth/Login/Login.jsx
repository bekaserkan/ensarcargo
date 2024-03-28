import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { api } from "../../../Api";
import Loading from "../../../UI/Loading/Loading";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/login/", {
        email,
        password,
      });
      localStorage.setItem("email", email);
      if (response.data.response === true) {
        const { token } = response.data;
        localStorage.setItem("token", token);
        navigate("/dashboard");
      } else {
        if (response.data.message) {
          alert(response.data.message, "error");
        }
        if (response.data.isactivated == false) {
          alert(response.data.message, "error");
          navigate("/activation");
        }
        setErrorLogin(response.data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <div className="login_form_head">
          <span className="text_center">Войти</span>
        </div>
        <div className="input_box">
          <label className="label_form">Почта</label>
          <input
            className="input_form"
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Электронная почта"
            required
          />
          {errorLogin.email && <p className="red">{errorLogin.email}</p>}
        </div>
        <div className="input_box">
          <label className="label_form">Пароль</label>
          <input
            className="input_form"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={visible ? "text" : "password"}
            placeholder="Введите пароль"
            required
          />
          <span className="span-icon" onClick={() => setVisible(!visible)}>
            {visible ? <FaEye /> : <FaEyeSlash />}{" "}
          </span>
          {errorLogin.password && <p className="red">{errorLogin.password}</p>}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <NavLink className="text_link" to="/forgot-password">
            Забыл(-а) пароль?
          </NavLink>
        </div>
        <button
          disabled={loading}
          style={{ margin: "20px 0" }}
          onSubmit={handleSubmit}
          className="button_form"
        >
          {loading ? <Loading white={true} /> : "Войти"}
        </button>
        <p className="texting">
          Ещё нет аккаунта?
          <NavLink className="text_link" to="/register">
            Зарегистрироваться
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
