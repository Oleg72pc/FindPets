import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postFetchUserRegistrationAC } from '../../redux/thunk/thunk';


function Registration(props) {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const addUser = (e) => {
    e.preventDefault();

    const data = {
      userName: e.target.userName.value,
      phoneNumber: e.target.phoneNumber.value,
      password: e.target.password.value,
    };
    dispatch(postFetchUserRegistrationAC(data))
    navigation('/');
  };
  return (
    <form onSubmit={addUser} className="login-wrapper">
      <h1>Регистрация</h1>
      <input className="userName" name="userName" type="text" placeholder="Введите логин" />
      <input
        className="phoneNumber"
        name="phoneNumber"
        type="text"
        placeholder="Введите телефон"
      />
      <input
        className="password"
        name="password"
        type="password"
        placeholder="Введите пароль"
      />
      <button>Зарегистрироваться</button>
    </form>
  );
}

export default Registration;
