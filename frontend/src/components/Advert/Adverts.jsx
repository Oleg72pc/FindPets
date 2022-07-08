import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFetchInitAdvertsAC } from '../../redux/thunk/thunk';
import './Adverts.css'

function Adverts(props) {
  const data = useSelector((state) => state.advertRed.adverts);
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getFetchInitAdvertsAC())
  }, [dispatch]);
  return (
    <>
      {data ? (
        data.map((item) => (
          <div key={item.id} className="card">
            <img src={item.photo} alt="dog" />
            <div className="container">
              <div>{item.title}</div>
              <div>{item.description}</div>
              <div>{item.location}</div>
            </div>
          </div>
        ))
      ) : (
        <div>no data</div>
      )}
    </>
  );
}

export default Adverts;
