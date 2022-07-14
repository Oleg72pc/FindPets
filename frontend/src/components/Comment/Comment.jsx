import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCommetnAC } from '../../redux/actionCreators/advertsAC';
import './Comment.css'

function Comment(props) {
  const { comment } = props;
  //  const [user, setUser] = React.useState();
  // React.useEffect(() => {
  //   if (comment.userId) {
  //     fetch(`/user/${comment.userId}`)
  //       .then((data) => data.json())
  //       .then((res) => setUser(res));
  //   }
  // }, [comment.userId]);
  const { user } = useSelector((state) => state.userRed);

    const dispatch = useDispatch();
    const handleDeleteComment = () => {
      fetch(`/ad/comment/${comment.id}`, {
        method: 'DELETE',
      });
      dispatch(deleteCommetnAC(comment.id));
     
    };
  return (
    <div className="commar" key={comment.id}>
      <div className="grayt">{user ? <div>{user.userName}</div> : <div>Гость</div>}</div>
      <div>{comment.text}</div>
      <div className="graytdate">{`${new Date(comment.createdAt).getDate()}.${new Date(
        comment.createdAt
      ).getMonth()}.${new Date(comment.createdAt).getFullYear()}
       ${new Date(comment.createdAt).getHours()}:${new Date(
        comment.createdAt
      ).getMinutes()}`}</div>
      {user?.isAdmin && (
        <button className="btn btndelete" onClick={handleDeleteComment}>
          удалить
          
        </button>
      )}
    </div>
  );
}

export default Comment;
