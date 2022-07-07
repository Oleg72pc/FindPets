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
      login: e.target.login.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    fetch('http://localhost:4000/registration', {
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
      <input className="login" name="login" type="text" placeholder="введите логин" />
      <input
        className="phoneName"
        name="phoneName"
        type="text"
         placeholder="введите телефон"
      />
      <input
        className="password"
        name="password"
        type="password"
        placeholder="введите пароль"
      />
      <button>Зарегистрироваться</button>
    </form>
  );
}

export default Registration;
