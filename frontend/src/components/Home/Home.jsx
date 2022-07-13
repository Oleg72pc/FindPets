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

        <div className="container1">
          <div className="serv">
            <div className="row">
              <div className="col s12 m6">
                <div className="card">
                  <div className="card-image">
                    <img src="img/catdog.png" alt="1" />
                    <button
                      className="btn waves-effect waves-light heig"
                      onClick={() => navigate('./form/missing')}
                    >
                      Создать объявление
                    </button>
                  </div>
                  <span className="card-title">Мой питомец потерялся</span>
                  <div className="card-content">
                    <p>Создать объявление о пропаже питомца, чтобы все увидели</p>
                  </div>
                </div>
              </div>

              <div className="col s12 m6">
                <div className="card">
                  <div className="card-image">
                    <img className='imgHome' src="img/dogcat.png" alt="1" />
                    <button
                      className="btn waves-effect waves-light heig"
                      onClick={() => navigate('./form/found')}
                    >
                      Создать объявление
                    </button>
                  </div>
                  <span className="card-title">Найден чужой питомец</span>
                  <div className="card-content">
                    <p>Вы нашли чужого питомца и хотите разместить объявление</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="service-down">
            <div className="box">
              <div className="box-back">
                <img className="team" src="img/team.webp" alt="" />
              </div>
              <h2>Мой питомец потерялся</h2>
              <p>Создать объявление о пропаже питомца, чтобы все увидели</p>
              <button onClick={()=> navigate('./form/missing')} className="btn">Создать объявление</button>
            </div>
            <div className="box">
              <div className="box-back">
                <img className="team" src="img/team2.webp" alt="" />
              </div>
              <h2>Найден чужой питомец</h2>
              <p>Вы нашли чужого питомца и хотите разместить объявление</p>
              <button onClick={()=> navigate('./form/found')} className="btn">Создать объявление</button>
            </div>
          </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
