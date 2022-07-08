import React from 'react';
import { logUserAC } from '../../redux/actionCreators/userAC';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const logUser = (e) => {
    e.preventDefault();
    const data = {
      phoneNumber: e.target.phoneNumber.value,
      password: e.target.password.value,
    };
    fetch('/auth/login', {
      headers: { 'content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(logUserAC(data));
      });

    navigation('/');
  };
  return (
    <form onSubmit={logUser} className="login-wrapper">
      <h1>Логин</h1>
      <input placeholder="Телефон" className="phoneNumber" name="phoneNumber" type="text" />
      <input placeholder="Пароль" className="password" name="password" type="password" />
      <button>Войти</button>
    </form>
  );
}

export default Login;
