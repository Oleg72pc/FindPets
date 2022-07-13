import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getFetchInitAdvertsAC } from '../../redux/thunk/thunk';
import init from '../../apimap';
import './Adverts.css';

function Adverts(props) {
  const data = useSelector((state) => state.advertRed.adverts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFetchInitAdvertsAC());
    window.ymaps.ready(init);
  }, [dispatch]);

  console.log(data);

  return (
    <>
      <section className="containerad">
        <div className="filterad">
          <h5 className="filterlistFirst">Объявления</h5>
          <div className="filterlist">
            <div className="filtercity">
              <p>Где вы ищете</p>
              <input
                className="city"
                name="city"
                type="text"
                placeholder="Введите город"
              />{' '}
              <button className="btn">выбрать</button>
            </div>
            <div className="Typean">
              <p>Кого вы ищете</p>
              <p>
                <label>
                  <input name="type" type="radio" value="cat" />
                  <span>Кошку</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="type" type="radio" value="dog" />
                  <span>Собаку</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="type" type="radio" value="other" />
                  <span>Другое</span>
                </label>
              </p>
            </div>
            <div className="Typean">
              <p>Тип объявления</p>
              <input type="text" placeholder="Все объявления" />{' '}
              <button className="btn">выбрать</button>
            </div>
          </div>
        </div>
        <div className="adlist">
          <h5 className="filterlistFirst">База пропавших животных</h5>
          <div className="allad">
            {data ? (
              data.map((item) => (
                <div key={item.id} className="cardad">
                  <Link className="formcard" to={`${item.id}`}>
                    <div>
                      <img className="sizeimgcards" src={item.photo} alt="dog" />
                    </div>
                    <div className="containerad">
                      <div className="titlead">{item.title}</div>
                      <div className="nametitle">Описание: {item.description} </div>
                      <div className="nametitle"> Локация: {item.location}</div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div>no data</div>
            )}
          </div>
        </div>
        <div className="grid-element bg-blue grid-main">
          <div id="map" className="map"></div>
        </div>
      </section>
    </>
  );
}

export default Adverts;
