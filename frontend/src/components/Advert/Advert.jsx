/* eslint-disable eqeqeq */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import { addCommetnAC, deleteAdvertAC } from '../../redux/actionCreators/advertsAC';
import { getFetchInitAdvertsAC, postFetchaddComment } from '../../redux/thunk/thunk';
import './Advert.css';

function Advert(props) {
  const { advertId } = useParams();
  const navigate = useNavigate();
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
    setComment(evt.currentTarget.value);
  };

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
      .then(() => {
        setComment('');
      });
  };

  const handleDeleteAdvert = () => {
    fetch(`/ad/delete/${advertId}`, {
      method: 'DELETE',
    }).then(() => {
      dispatch(deleteAdvertAC(advertId));
      navigate('/adverts');
    });
  };
  return (
    <div className="container">
      <div className="">
        <div>
          {ad ? (
            <div key={ad.id} className="contoc">
              <img className="imgonecardid" src={ad.photo} alt="dog" />
              <div className="textob">
                <div className="titlec">Подробная информация</div>
                <div>
                  <span className="grayt">Тип объявления:</span> {ad.title}
                </div>
                <div>
                  {' '}
                  <span className="grayt">Локация:</span> {ad.location}
              
                </div>
                <div>
                  <span className="grayt">Дата пропажи:</span>{' '}
                  {`${new Date(ad.createdAt).getDate()}.${new Date(
                    ad.createdAt
                  ).getMonth()}.${new Date(ad.createdAt).getFullYear()}
                   ${new Date(ad.createdAt).getHours()}:${new Date(
                    ad.createdAt
                  ).getMinutes()}`}
                  <div>
                    <span className="grayt">Описание: </span>
                    {ad.description}
                  </div>
                  <div>
                    <span className="grayt">Имя хозяина: </span>
                    {ad.User.userName}
                  </div>
                  <div>
                    <span className="grayt">Связаться: </span>
                    {ad.User.phoneNumber}
                  </div>
                </div>
              {user?.isAdmin && (
                <button className="btn btndelete2" onClick={handleDeleteAdvert}>
                  удалить объявление
                </button>
              )}
              </div>

            </div>
          ) : (
            <div>no data</div>
          )}
        </div>
      </div>
      {/* <div className="formformap">map</div> */}
      <div className="commentscard">
        <input
          placeholder="Оставить комментарий"
          value={comment}
          onChange={handleChangeComment}
        />
        <button className="btn" onClick={handleSendComment}>
          Комментировать
        </button>{' '}
        {comments.length > 0 &&
          comments
            .filter((item) => item.adId == advertId)
            .map((item) => <Comment comment={item} />)}
      </div>
    </div>
  );
}

export default Advert;
