import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getFetchInitAdvertsAC } from '../../redux/thunk/thunk';
import init from '../../apimap';
import './Adverts.css';
import { useState } from 'react';
import { filterAdventsAC, resetFilterAdventsAC } from '../../redux/actionCreators/advertsAC';

function Adverts(props) {
  const { info, filterAdverts}  = useSelector((state) => state.advertRed);
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFetchInitAdvertsAC());
    window.ymaps.ready(init);
  }, [dispatch]);

  const filterAdvertsFunction = (e)=>{
    setState(true)
  dispatch(filterAdventsAC(e))
  }
  const resetFilterAdvertsFunction = (e)=>{
    dispatch(resetFilterAdventsAC())
    setState(false)
  }
  return (
    <>
      <section className="containerad">
        <div className="filterad">
          <h5 className="filterlistFirst">Объявления</h5>
          <div className="filterlist">
            <div className="filtercity">
              <p>Где вы ищете</p>
              <select onChange={filterAdvertsFunction} name='cityId' className="browser-default">
            <option value=''>Все города</option>
            { info.city && info.city.map(el => <option key={el.id} value={el.id}>{el.title}</option>)}
          </select>
            </div>
            <div className="Typean">
              <p>Кого вы ищете</p>
              {info.typeAnimal && info.typeAnimal.map(el => 
              <p key={el.id}>
                <label>
                <input type="radio" name='typeId' value={el.id} onChange={filterAdvertsFunction} /><span>{el.title}</span> 
                </label>
              </p>
              )}
            </div>
            <div className="Typean">
              <p>Тип объявления</p>
              <p>
              <label>
              <input type="radio" name='title' value='Нашелся' onChange={filterAdvertsFunction}/> <span>О находке</span>
              </label>
              </p>
              <p>
              <label>
              <input type="radio" name='title' value='Потерялся' onChange={filterAdvertsFunction}/> <span>О пропаже</span>
              </label>
              </p>
              <br/>
              { state && <button className="btn" onClick={resetFilterAdvertsFunction}>Сбросить фильтры</button>}
            </div>
          </div>
        </div>
        <div className="alllist">
          <h5 className="filterlistFirst">База пропавших животных</h5>
          <div className="allad">
            {filterAdverts ? (
              filterAdverts.map((item) => (
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
