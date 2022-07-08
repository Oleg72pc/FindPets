import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postFetchUserLoginAC } from '../../redux/thunk/thunk';

function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const logUser = (e) => {
    e.preventDefault();
    const data = {
      phoneNumber: e.target.phoneNumber.value,
      password: e.target.password.value,
    };
    dispatch(postFetchUserLoginAC(data))

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
