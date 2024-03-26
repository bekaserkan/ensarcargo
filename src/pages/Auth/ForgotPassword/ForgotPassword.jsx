import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../Api";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/forgot-password/", {
        email,
      });
      if (response.data.response === true) {
        localStorage.setItem("email", email);
        alert(response.data.message, "success");
        navigate("/activation/verify");
      } else {
        if (response.data.message) {
          alert(response.data.message, "error");
        }
        setError(response.data);
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
          <div>
            <span className="text_center">Забыли пароль?</span>
            <p className="text_gray">
              Мы отправим код на вашу электронную почту
            </p>
          </div>
        </div>
        <div className="input_box">
          <label className="label_form">Почта</label>
          <input
            className="input_form"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Электронная почта"
            required
          />
          {error.email && <p className="red">{error.email}</p>}
        </div>
        <button
          disabled={loading}
          style={{ marginTop: 20 }}
          onSubmit={handleSubmit}
          className="button_form"
        >
          {loading ? "loading..." : "Получить код"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
