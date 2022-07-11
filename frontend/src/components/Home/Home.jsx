import React from 'react';
import './Home.css';
import {useNavigate} from 'react-router-dom'


function Home(props) {
  const navigate = useNavigate()
  return (
    <>
      <section id="start" className="startSection">
        <div className="container">
          {/* <div className="row"> */}
          <div className="col-lg-6">
            <h1 className="display-5">
              ПОИСК <p class="forrad">ПРОПАВШИХ </p>
              
              ДОМАШНИХ ЖИВОТНЫХ
            </h1>
            <p className="startText">Найди своего питомца по фотографии или размести объявление о найденном животном</p>
          </div>
        </div>
        {/* </div> */}
      </section>

      <section class="services">
        <div class="container">
          <div class="service-down">
            <div class="box">
              <div class="box-back">
                <img className="team" src="img/team.webp" alt="" />
              </div>
              <h2>Мой питомец потерялся</h2>
              <p>Создать объявление о пропаже питомца, чтобы все увидели</p>
              <button onClick={()=> navigate('./form/missing')} className="btn">Создать объявление</button>
            </div>
            <div class="box">
              <div class="box-back">
                <img className="team" src="img/team2.webp" alt="" />
              </div>
              <h2>Найден чужой питомец</h2>
              <p>Вы нашли чужого питомца и хотите разместить объявление</p>
              <button onClick={()=> navigate('./form/found')} className="btn">Создать объявление</button>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}

export default Home;
