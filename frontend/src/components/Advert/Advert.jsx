import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import { addCommetnAC } from '../../redux/actionCreators/advertsAC';
import { getFetchInitAdvertsAC, postFetchaddComment } from '../../redux/thunk/thunk';


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

  
  const { comments, adverts } = useSelector((state) => state.advertRed);
  const { user } = useSelector((state) => state.userRed);
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
          userId: user?.id ? user.id : null,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((data) => data.json())
        .then((res) => dispatch(addCommetnAC(res)))
        .then(()=>{setComment('')})
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
            <div>{ad.createdAt}</div>
            <input value={comment} onChange={handleChangeComment} />
            <button onClick={handleSendComment}>Комментировать</button>
            {comments.length > 0 &&
              comments.map((item) => <Comment comment={item}/>)}
          </div>
        </div>
      ) : (
        <div>no data</div>
      )}
    </div>
  );
}

export default Advert;
