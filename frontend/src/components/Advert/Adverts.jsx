import React from 'react';
import './Adverts.css'

function Adverts(props) {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    fetch('/ad')
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);
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
