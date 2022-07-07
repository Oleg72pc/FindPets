import React from 'react';
import { useDispatch } from 'react-redux';
import { addUserAC } from '../../redux/actionCreators/userAC';
import { useNavigate } from 'react-router-dom';

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

    fetch('/registration', {
      headers: { 'content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => dispatch(addUserAC(data)));

    navigation('/registration');
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
