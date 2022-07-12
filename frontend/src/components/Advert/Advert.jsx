import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getFetchInitAdvertsAC } from '../../redux/thunk/thunk';

function Advert(props) {

  const { advertId } = useParams();
  // const [data, setData] = React.useState();
  // React.useEffect(() => {
  //   fetch(`/ad/${advertId}`)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setData(result);
  //     });
  // }, [advertId]);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFetchInitAdvertsAC());
  }, [dispatch]);

  const data = useSelector((state) => state.advertRed.adverts);
  const [comment, setComment] = React.useState("");
  // eslint-disable-next-line eqeqeq
  const ad = React.useMemo(() => data.find((el) => el.id == advertId), [data, advertId])


  const handleChangeComment = (evt) => {
    setComment(evt.currentTarget.value)
  }

  const handleSendComment = () => {
    fetch('/ad/comment', {
      method: 'POST',
      body: JSON.stringify({
        text: comment,
        adId: advertId,
        userId: 1,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((data) => data.json())
      .then((res) => console.log(res));
  }

  return (
    <div className="contentAdvert">
      {ad ? (
        <div key={ad.id} className="card">
          <img style={{ width: '200px' }} src={ad.photo} alt="dog" />
          <div className="container">
            <div>{ad.title}</div>
            <div>{ad.description}</div>
            <div>{ad.location}</div>
            <input value={comment} onChange={handleChangeComment} />
            <button onClick={handleSendComment}>Комментировать</button>
            {ad.comment && comment.map(item => (
            <div key={item.id}>{item.text}</div>
            ))}
          </div>
        </div>
      ) : (
        <div>no data</div>
      )}
    </div>
  );
}

export default Advert;
