import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../Api";

const Activation = () => {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const fetchData = async (e) => {
    e.preventDefault();
    if (code.length !== 6) {
      alert("Введите шестизначный код", "error");
    }
    if (code.length == 6) {
      setLoading(true);
      try {
        const response = await api.post("/auth/activation", {
          code,
          email: email,
        });
        if (response.data.response === true) {
          localStorage.setItem("email", email);
          localStorage.setItem("token", response.data.token);
          navigate("/dashboard");
        } else {
          alert(response.data.message, "error");
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
  };

  return (
    <div className="container">
      <form onSubmit={fetchData} className="form">
        <div className="login_form_head">
          <div>
            <span className="text_center">Введите код</span>
            <p className="text_gray">
              Мы отправили код на вашу электронную почту
            </p>
          </div>
        </div>
        <div className="input_box">
          <label className="label_form">Код</label>
          <input
            style={{ textAlign: "center" }}
            className="input_form"
            value={code}
            type="number"
            placeholder="Код потверждения"
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>
        <button
          style={{ marginBottom: 20 }}
          disabled={loading}
          onSubmit={fetchData}
          className="button_form"
        >
          {loading ? "loading..." : "Подвердить"}
        </button>
      </form>
    </div>
  );
};

export default Activation;
