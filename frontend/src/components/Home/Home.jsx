import React from 'react';
import './Home.css';

function Home(props) {
  return (
    <section className="hero">
      <img src="img/herobanner.png" alt="" className="heroimg" />
      <div className="container">
        <div className="hero-content">
          <h3>Сервис</h3>
          <h3>по поиску</h3>
          <p className="phome">пропавших домашних животных</p>
        </div>
        <div className="dog">
          <img src="img/gray.png" alt="" />
        </div>
      </div>

      <section class="services">
        <div class="container">
          <div class="service-down">
            <div class="box">
              <div class="box-back">
                <img className="team" src="img/team.webp" alt="" />
              </div>
              <h2>Мой питомец потерялся</h2>
              <p>Создать объявление о пропаже питомца, чтобы все увидели</p>
              <button className="btn">Создать объявление</button>
            </div>
            <div class="box">
              <div class="box-back">
                <img className="team" src="img/team2.webp" alt="" />
              </div>
              <h2>Найден чужой питомец</h2>
              <p>Вы нашли чужого питомца и хотите разместить объявление</p>
              <button className="btn">Создать объявление</button>
            </div>
          </div>
        </div>
      </section>
    </section>
    // <div classNameNameName="cont">
    //   <img classNameNameName="backphoto" src="img/bg.png" alt="animals" />
    //   <p classNameNameName="title1">ПОИСК ПРОПАВШИХ ЖИВОТНЫХ</p>
    //   <div classNameName="miss_found">
    //     <div classNameName="missing">
    //       <img classNameNameName="help" src="img/missing.png" alt="ad" />
    //       <div classNameNameName="text-ad">
    //         <h2>Мой питомец потерялся</h2>
    //         <p>Создать объявление о пропаже питомца,</p>
    //         <p>чтобы все увидели</p>
    //       </div>
    //       <button classNameNameName="btnad btn-brand">Создать объявление</button>
    //     </div>
    //     <div classNameName="missing">
    //       <img classNameNameName="help2" src="img/found.png" alt="ad" />
    //       <div classNameNameName="text-ad">
    //         <h2>Найден чужой питомец</h2>
    //         <p>Вы нашли чужого питомца и хотите</p>
    //         <p>разместить объявление</p>
    //       </div>
    //       <button classNameNameName="btnad btn-brand">Создать объявление</button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Home;
