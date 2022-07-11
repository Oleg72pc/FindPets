import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getFetchInitAdvertsAC } from '../../redux/thunk/thunk';
import init from '../../apimap'
import './Adverts.css';

function Adverts(props) {
  const data = useSelector((state) => state.advertRed.adverts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFetchInitAdvertsAC());
    window.ymaps.ready(init);
  }, [dispatch]);

  return (
    <>
      <section className="grid-12">
        <header className="grid-element bg-gray grid-header">
          <h1>Объявления</h1>
          <div className="adline-box">
            <div>
              <p>Где вы ищете</p>
              <input
                className="city"
                name="city"
                type="text"
                placeholder="Введите город"
              />{' '}
              <button className="btnnav">выбрать</button>
            </div>
            <div>
              <p>Кого вы ищете</p>
              <input type="radio" name='type' value='cat' /> <label>кошку</label>
              <input type="radio" name='type' value='dog' /> <label>собаку</label>
              <input type="radio" name='type' value='other' /> <label>другое</label>
            </div>
            <div>
              <p>Тип объявления</p>
              <input type="text" placeholder="Все объявления" /> <button>выбрать</button>
            </div>
          </div>
        </header>
        <aside className="grid-element bg-red grid-aside">
          <h1>База пропавших животных</h1>
          <div className="conteinerforad">
            {data ? (
              data.map((item) => (
                <Link key={item.id} to={`${item.id}`}>
                  <div key={item.id} className="cardad">
                    <img className="sizeimgcards" src={item.photo} alt="dog" />
                    <div className="containerad">
                      <div className="titlead">{item.title}</div>
                      <div>
                        <p className="nametitle">Описание:</p> {item.description}
                      </div>
                      <div>
                        <p className="nametitle">Локация:</p> {item.location}
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div>no data</div>
            )}
          </div>
        </aside>
        <main className="grid-element bg-blue grid-main">
         <div id="map" className='map'></div>
        </main>
      </section>
    </>
  );
}

export default Adverts;
