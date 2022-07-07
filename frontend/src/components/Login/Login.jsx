import React from 'react';
import { logUserAC } from '../../redux/actionCreators/userLogAC';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const logUser = (e) => {
    e.preventDefault();

    const data = {
      login: e.target.login.value,
      password: e.target.password.value,
    };
    fetch('http://localhost:4000/login', {
      headers: { 'content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(logUserAC(data));
      });

    navigation('/login');
  };
  return (
    <form onSubmit={logUser} className="login-wrapper">
      <h1>Логин</h1>
      <input placeholder="логин" className="login" name="login" type="text" />
      <input placeholder="Пароль" className="password" name="password" type="password" />
      <button>Войти</button>
    </form>
  );
}

export default Login;
