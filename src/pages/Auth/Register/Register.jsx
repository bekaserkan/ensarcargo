import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { api } from "../../../Api";
import Loading from "../../../UI/Loading/Loading";

const Register = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const [inputData, setInputData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirm_password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (inputData.password === inputData.confirm_password) {
      const dataNew = {
        email: inputData.email,
        full_name: inputData.first_name,
        phone: inputData.last_name,
        password: inputData.password,
        password2: inputData.confirm_password,
      };
      try {
        const response = await api.post("/register/", dataNew);
        if (response.data.response === true) {
          localStorage.setItem("email", inputData.email);
          navigate("/activation");
          console.log(inputData.email);
        } else {
          if (response.data.message) {
            alert(response.data.message, "error");
          }
          setError(response.data);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      setLoading(false);
      alert("Пароли не совпадают", "error");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <div className="login_form_head">
          <span className="text_center">Регистрация</span>
        </div>
        <div className="input_box">
          <label className="label_form">ФИО</label>
          <input
            className="input_form"
            type="text"
            value={inputData.first_name}
            onChange={(e) =>
              setInputData({
                ...inputData,
                first_name: e.target.value,
              })
            }
            name="first_name"
            placeholder="Имя и Фамилия"
            required
          />
          {error.first_name && <p className="red">{error.first_name}</p>}
        </div>
        <div className="input_box">
          <label className="label_form">Номер телефона</label>
          <input
            className="input_form"
            type="number"
            value={inputData.last_name}
            onChange={(e) =>
              setInputData({
                ...inputData,
                last_name: e.target.value,
              })
            }
            name="last_name"
            placeholder="Введите номер телефона"
            required
          />
          {error.last_name && <p className="red">{error.last_name}</p>}
        </div>
        <div className="input_box">
          <label className="label_form">Почта</label>
          <input
            className="input_form"
            onChange={(e) =>
              setInputData({ ...inputData, email: e.target.value })
            }
            value={inputData.email}
            type="text"
            placeholder="Электронная почта"
            required
          />
          {error.email && <p className="red">{error.email}</p>}
        </div>
        <div className="input_box">
          <label className="label_form">Пароль</label>
          <input
            className="input_form"
            onChange={(e) =>
              setInputData({ ...inputData, password: e.target.value })
            }
            value={inputData.password}
            type={visible ? "text" : "password"}
            placeholder="Пароль"
            required
          />
          <span className="span-icon" onClick={() => setVisible(!visible)}>
            {" "}
            {visible ? <FaEye /> : <FaEyeSlash />}{" "}
          </span>
          {error.confirm_password && (
            <p className="red">{error.confirm_password}</p>
          )}
          {error.non_field_errors && (
            <p className="red">{error.non_field_errors}</p>
          )}
        </div>
        <div className="input_box">
          <label className="label_form"> Повторить пороль </label>
          <input
            className="input_form"
            onChange={(e) =>
              setInputData({
                ...inputData,
                confirm_password: e.target.value,
              })
            }
            value={inputData.confirm_password}
            type={visible2 ? "text" : "password"}
            placeholder="Повторите пороль"
            required
          />
          <span className="span-icon" onClick={() => setVisible2(!visible2)}>
            {" "}
            {visible2 ? <FaEye /> : <FaEyeSlash />}{" "}
          </span>
        </div>
        <button
          style={{ margin: "20px 0" }}
          disabled={loading}
          className="button_form"
          onSubmit={handleSubmit}
        >
          {loading ? <Loading white={true} /> : "Зарегистрироваться"}
        </button>
        <p className="texting">
          Уже есть аккаунт ?{" "}
          <NavLink className="text_link" to="/login">
            Войти
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Register;
