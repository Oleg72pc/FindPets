import React from 'react';
import './Home.css';

function Home(props) {
  return (
    <div className="cont">
      <img className="backphoto" src="img/bg.png" alt="animals" />
      <p className="title1">ПОИСК ПРОПАВШИХ ЖИВОТНЫХ</p>
      <div class="miss_found">
        <div class="missing">
          <img className="help" src="img/missing.png" alt="ad" />
          <div className="text-ad">
            <h2>Мой питомец потерялся</h2>
            <p>Создать объявление о пропаже питомца,</p>
            <p>чтобы все увидели</p>
          </div>
          <button className="btnad btn-brand">Создать объявление</button>
        </div>
        <div class="missing">
          <img className="help2" src="img/found.png" alt="ad" />
          <div className="text-ad">
            <h2>Найден чужой питомец</h2>
            <p>Вы нашли чужого питомца и хотите</p>
            <p>разместить объявление</p>
          </div>
          <button className="btnad btn-brand">Создать объявление</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
