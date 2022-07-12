import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addCommetnAC } from '../../redux/actionCreators/advertsAC';
import { postFetchaddComment } from '../../redux/thunk/thunk';


function Advert(props) {
  const { advertId } = useParams();
  const dispatch = useDispatch();
  const { comments, adverts } = useSelector((state) => state.advertRed);
  const [comment, setComment] = React.useState('');

  React.useEffect(() => {
    dispatch(postFetchaddComment(advertId));
  }, [dispatch, advertId]);
  
  console.log(comments)

  const ad = React.useMemo(
    // eslint-disable-next-line eqeqeq
    () => adverts.find((el) => el.id == advertId),
    [adverts, advertId]
  );
    
  const handleChangeComment = (evt) => {
    setComment(evt.currentTarget.value)
    
  }

    const handleSendComment = () => {
      fetch('http://localhost:4000/ad/comment', {
        method: 'POST',
        body: JSON.stringify({
          text: comment,
          adId: advertId,
          userId: 1,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((data) => data.json())
        .then((res) => dispatch(addCommetnAC(res)));
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
            {comments.length > 0 &&
              comments.map((item) => <div key={item.id}>{item.text}</div>)}
          </div>
        </div>
      ) : (
        <div>no data</div>
      )}
    </div>
  );
}

export default Advert;
