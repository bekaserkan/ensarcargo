import React from "react";
import "./Main.css";
import photo1 from "../../img/apps.svg";
import photo2 from "../../img/apps (1).svg";
import photo3 from "../../img/apps (2).svg";
import cont from "../../img/photo (7).svg";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="container">
        <div className="blocks_one">
          <div className="block">
            <h1>ДОСТАВКА ТОВАРОВ ИЗ КИТАЯ ПО САМЫМ БЫСТРЫМ СРОКАМ</h1>
            <p style={{ marginTop: 20 }} className="text">
              Регистрируйся и получи свой код склада в Китае. Выкупай товары
              Оптом и Розницу самостоятельно или с помощью нашей компании,
              отслеживай их по трек номеру.
            </p>
            <div
              onClick={() => navigate("/tracking")}
              style={{ marginTop: 30 }}
              className="button_form din"
            >
              Отслеживание
            </div>
          </div>
          <div>
            <img className="image" src={cont} alt="" />
          </div>
        </div>
        <div className="blocks_two">
          <img src={photo1} alt="" />
          <img src={photo2} alt="" />
          <img src={photo3} alt="" />
        </div>
        <div style={{ marginTop: 160 }} className="pod">
          <h2>
            Поможем зарегистрироваться на нужном сайте , найти товар у
            проверенного поставщика, оформить заказ и произвести оплату
          </h2>
          <div className="boxs">
            <div className="box reddin">
              <p>1</p>
              <div>
                <h3>Пройдите регистрацию</h3>
                <p className="texting">
                  Регистрируйтесь и получите свой код склада в Китае
                </p>
              </div>
            </div>
            <div className="box">
              <p>2</p>
              <div>
                <h3>Без знаний китайского</h3>
                <p className="texting">
                  Поможем оформить заказ. заполнить форму правильно
                </p>
              </div>
            </div>
            <div className="box">
              <p>3</p>
              <div>
                <h3>Выкупайте любой товар</h3>
                <p className="texting">
                  Выкупайте товары Оптом и Розницу, отслеживайте по трек номеру
                </p>
              </div>
            </div>
            <div className="box">
              <p>4</p>
              <div>
                <h3>Доставка за 15-16 дней</h3>
                <p className="texting">
                  Мы доставим ваши товары в Кыргызстан безопасно за самый
                  короткий срок
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
