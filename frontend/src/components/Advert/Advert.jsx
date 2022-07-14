/* eslint-disable eqeqeq */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams} from 'react-router-dom';
import Comment from '../Comment/Comment';
import { addCommetnAC, deleteAdvertAC } from '../../redux/actionCreators/advertsAC';
import { getFetchInitAdvertsAC, postFetchaddComment } from '../../redux/thunk/thunk';


function Advert(props) {
  const { advertId } = useParams();
  const navigate =useNavigate()
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

  const ad = React.useMemo(
    // eslint-disable-next-line eqeqeq
    () => adverts.find((el) => el.id == advertId),
    [adverts, advertId]
  );
    
  const handleChangeComment = (evt) => {
    setComment(evt.currentTarget.value)
  }


    const handleSendComment = () => {
      fetch('/ad/comment', {
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

    const handleDeleteAdvert = () => {
      fetch(`http://localhost:4000/ad/delete/${advertId}`, {
        method: 'DELETE',
      }).then(()=>{
         dispatch(deleteAdvertAC(advertId));
         navigate('/adverts');
      })
     
      
    }
  return (
    <>
      <div className="contentAdvert">
        {ad ? (
          <div key={ad.id} className="card">
            <img style={{ width: '200px' }} src={ad.photo} alt="dog" />
            <div className="container">
              <div>{ad.title}</div>
              <div>{ad.description}</div>
              <div>{ad.location}</div>
              <div>{
                  `${new Date(ad.createdAt).getDate()}.${new Date(ad.createdAt).getMonth()}.${new Date(ad.createdAt).getFullYear()}
                   ${new Date(ad.createdAt).getHours()}:${new Date(ad.createdAt).getMinutes()}`
              }</div>
              <input value={comment} onChange={handleChangeComment} />
              <button onClick={handleSendComment}>Комментировать</button>
              {user?.isAdmin && <button onClick={handleDeleteAdvert}>удалить нахр</button>}
              {comments.length > 0 && comments.filter(item=> item.adId == advertId).map((item) => <Comment comment={item}  key={item.id}/>)}
            </div>
          </div>
        ) : (
          <div>no data</div>
        )}
      </div>
    </>
  );
}

export default Advert;
