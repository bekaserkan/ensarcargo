import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { api } from "../../Api";
import Loading from "../../UI/Loading/Loading";
import copyImage from "../../img/copy (1).svg";
import { ALert } from "../../UI/Alert/Alert";

const Dashboard = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    api
      .get("/user-info/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("dashboard", error);
        setLoading(false);
      });
  }, []);

  function copy(value) {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        ALert("Успешно скопировано!", "success");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  }

  console.log(user);

  return (
    <div className="dashboard">
      <div className="container">
        {loading ? (
          <div className="loading_div">
            <Loading />
          </div>
        ) : (
          <div className="profile">
            <div className="grid">
              <form className="form">
                <div className="login_form_head">
                  <span className="text_first">Личный данные</span>
                </div>
                <div className="input_box">
                  <label className="label_form">ФИО</label>
                  <input
                    className="input_form"
                    value={user.full_name}
                    type="text"
                    placeholder=""
                    disabled={true}
                  />
                </div>
                <div className="input_box">
                  <label className="label_form">Номер телефона</label>
                  <input
                    className="input_form"
                    value={user.phone}
                    type="text"
                    placeholder=""
                    disabled={true}
                  />
                </div>
                <div className="input_box">
                  <label className="label_form">Трек код</label>
                  <input
                    className="input_form"
                    value={user.code}
                    type="text"
                    placeholder=""
                    disabled={true}
                  />
                  <span className="span-icon" onClick={() => copy(user.code)}>
                    <img src={copyImage} alt="" />
                  </span>
                </div>
              </form>
              <form className="form">
                <div className="login_form_head">
                  <span className="text_first">Адреса</span>
                </div>
                <div className="input_box">
                  <label className="label_form">Трек код</label>
                  <input
                    className="input_form"
                    value={"18160860859"}
                    type="text"
                    placeholder=""
                    disabled={true}
                  />
                  <span
                    className="span-icon"
                    onClick={() => copy("18160860859")}
                  >
                    <img src={copyImage} alt="" />
                  </span>
                </div>
                <div className="input_box">
                  <label className="label_form">Трек код</label>
                  <input
                    className="input_form"
                    value={"浙江省 金华市 义乌市"}
                    type="text"
                    placeholder=""
                    disabled={true}
                  />
                  <span
                    className="span-icon"
                    onClick={() => copy("浙江省 金华市 义乌市")}
                  >
                    <img src={copyImage} alt="" />
                  </span>
                </div>
                <div className="input_box">
                  <label className="label_form">Трек код</label>
                  <input
                    className="input_form"
                    value={"下湾2区 6栋7号 107仓库"}
                    type="text"
                    placeholder=""
                    disabled={true}
                  />
                  <span
                    className="span-icon"
                    onClick={() => copy("下湾2区 6栋7号 107仓库")}
                  >
                    <img src={copyImage} alt="" />
                  </span>
                </div>
              </form>
            </div>
            <div className="podwhite">
              <div className="video_box">
                <h4>POIZON</h4>

                <div className="video">
                  <iframe
                    className="video"
                    src="https://www.youtube.com/embed/-Rl8DqH7ZLg"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="video_box">
                <h4>PINDUODUO</h4>

                <div className="video">
                  <iframe
                    className="video"
                    src="https://www.youtube.com/embed/-Rl8DqH7ZLg"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="video_box">
                <h4>TAOBAO</h4>

                <div className="video">
                  <iframe
                    className="video"
                    src="https://www.youtube.com/embed/-Rl8DqH7ZLg"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
