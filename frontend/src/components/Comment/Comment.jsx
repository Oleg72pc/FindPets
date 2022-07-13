import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCommetnAC } from '../../redux/actionCreators/advertsAC';

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
    <div key={comment.id}>
      <div>{user ? <div>{user.userName}</div> : <div>Гость:</div>}</div>
      <div>{comment.text}</div>
      <div>{
      `${new Date(comment.createdAt).getDate()}.${new Date(comment.createdAt).getMonth()}.${new Date(comment.createdAt).getFullYear()}
       ${new Date(comment.createdAt).getHours()}:${new Date(comment.createdAt).getMinutes()}`
       }</div>
      {user?.isAdmin && <button onClick={handleDeleteComment}>delete</button>}
    </div>
  );
}

export default Comment;
