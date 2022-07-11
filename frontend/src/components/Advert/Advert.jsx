import React from 'react';
import { useParams } from 'react-router-dom';


function Advert(props) {
    const {advertId} = useParams();
  const [data, setData] = React.useState();
  React.useEffect(() => {
    fetch(`/ad/${advertId}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      });
  }, []);
  return (
    <div className='contentAdvert'>
      {data ? (
          <div key={data.id} className="card">
            <img style={{width: '200px'}} src={data.photo} alt="dog" />
            <div className="container">
              <div>{data.title}</div>
              <div>{data.description}</div>
              <div>{data.location}</div>
            </div>
          </div>
  
      ) : (
        <div>no data</div>
      )}
    </div>
  );
}

export default Advert;
