import React from 'react';

function Comment(props) {
  const { comment } = props;
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    if (comment.userId) {
      console.log(comment.userId)
      fetch(`http://localhost:4000/user/${comment.userId}`)
        .then((data) => data.json())
        .then((res) => setUser(res));
    }
  }, [comment.userId]);
  return (
    <div key={comment.id}>
      <div>{user ? <div>{user.userName}</div> : <div>anonimius</div>}</div>
      <div>{comment.text}</div>
      <div>{comment.createdAt}</div>
    </div>
  );
}

export default Comment;
