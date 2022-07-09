import React from 'react';
import './Advert.css'

function Advert(props) {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    fetch('http://localhost:4000/ad')
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      });
  }, []);
  return (
    <div className='contentAdvert'>
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
    </div>
  );
}

export default Advert;
