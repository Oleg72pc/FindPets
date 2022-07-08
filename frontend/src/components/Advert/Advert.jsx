import React from 'react';
import { useParams } from 'react-router-dom';


function Advert(props) {
  const {advertId} = useParams();
  return (
    <div>
      param {advertId}
    </div>
  );
}

export default Advert;
