import React, { useState } from "react";
import "./Tracking.css";
import { api } from "../../Api";
import Loading from "../../UI/Loading/Loading";
import { MdOutlineDateRange } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Tracking = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(null);

  const CheckPost = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (check) {
      try {
        const response = await api.get(`/check/${check}`);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log("dashboard", error);
        setLoading(false);
      }
    } else {
      alert("Введите трек код!");
    }
  };

  return (
    <div className="tracking">
      <div className="container">
        <form onSubmit={CheckPost} className="form">
          <div className="login_form_head">
            <div>
              <span className="text_center">Отслеживание</span>
              <p className="text_gray">
                Узнайте где находится на данный момент ваш груз или посылка
              </p>
            </div>
          </div>
          <div className="input_box">
            <label className="label_form">Трек код</label>
            <input
              className="input_form"
              value={check}
              onChange={(e) => setCheck(e.target.value)}
              type="text"
              placeholder="Введите свой трек код"
              required
            />
          </div>
          <button
            disabled={loading}
            style={{ marginTop: 20 }}
            onSubmit={CheckPost}
            className="button_form"
          >
            {loading ? <Loading white={true} /> : "Отследить"}
          </button>
        </form>
        {data.date ? (
          <div className="div">
            <div className="column">
              <div className="flexing top">
                <MdOutlineDateRange className="icon" />
                <div>
                  <h5>{data.date}</h5>
                  <p>дата</p>
                </div>
              </div>
              <div className="hr"></div>
              <div className="flexing bottom">
                <IoIosInformationCircleOutline className="icon" />
                <div>
                  <h5>{data.info}</h5>
                  <p>информация</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="div">
            В базе данных нет информации по данному трек-коду
          </div>
        )}
      </div>
    </div>
  );
};

export default Tracking;
