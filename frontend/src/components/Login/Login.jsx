import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postFetchUserLoginAC } from '../../redux/thunk/thunk';
import './Login.css';

function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const logUser = (e) => {
    e.preventDefault();
    const data = {
      phoneNumber: e.target.phoneNumber.value,
      password: e.target.password.value,
    };
    dispatch(postFetchUserLoginAC(data));

    navigation('/');
  };
  return (
    <form onSubmit={logUser} className="login-wrapper">
      <div className="contlog">
        <h3 className="log">Логин</h3>
        <div className="container">
          <div className="row">
            <div className="input-field col s12 waves-light">
              <input type="text" name="phoneNumber" />
              <label for="phoneNumber">Телефон</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input type="password" name="password" />
              <label for="password">Пароль</label>
            </div>
          </div>
        </div>
        <div className="rowlog">
          <button className="waves-effect waves-light btn">Войти</button>
        </div>
      </div>
    </form>
  );
}

export default Login;
