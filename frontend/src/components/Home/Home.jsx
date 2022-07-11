import React from 'react';
import './Home.css';

function Home(props) {
  return (
    <>
      <section id="start" className="startSection">
        <div className="container">
          {/* <div className="row"> */}
          <div className="col-lg-6">
            <h1 className="display-5">
              ПОИСК <p className="forrad">ПРОПАВШИХ </p>
              ДОМАШНИХ ЖИВОТНЫХ
            </h1>
            <p className="startText">
              Найди своего питомца по фотографии или размести объявление о найденном
              животном
            </p>
          </div>
        </div>
        {/* </div> */}
      </section>

      <section className="services">
        <div className="container">
          <div className="service-down">
            <div className="box">
              <div className="box-back">
                <img className="team" src="img/team.webp" alt="" />
              </div>
              <h2>Мой питомец потерялся</h2>
              <p>Создать объявление о пропаже питомца, чтобы все увидели</p>
              <button className="btn">Создать объявление</button>
            </div>
            <div className="box">
              <div className="box-back">
                <img className="team" src="img/team2.webp" alt="" />
              </div>
              <h2>Найден чужой питомец</h2>
              <p>Вы нашли чужого питомца и хотите разместить объявление</p>
              <button className="btn">Создать объявление</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
