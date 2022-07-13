import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postFetchUserRegistrationAC } from '../../redux/thunk/thunk';

function Registration(props) {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const {errorREG, statusREG} = useSelector((state) => state.userRed);
  const addUser = (e) => {
    e.preventDefault();

    const data = {
      userName: e.target.userName.value,
      phoneNumber: e.target.phoneNumber.value,
      password: e.target.password.value,
    };
    dispatch(postFetchUserRegistrationAC(data));
  };
  useEffect(()=>{
    if(statusREG){
        navigation('/');
    } 
  },[statusREG, navigation]);

  return (
    <form onSubmit={addUser} className="login-wrapper">
      <div className="container1">
        <div className="service-down1">
          <div className="box1">
            <h1>Регистрация</h1>
            <div className="box-back1">
              <img className="team1-log" src="img/article.webp" alt="" />
            </div>
            {errorREG && <div className='error-massage'>{errorREG}</div>}
            <input
              className="phoneNumber"
              name="userName"
              type="text"
              placeholder="Введите логин"
            />
            <input
              placeholder="Телефон"
              className="phoneNumber"
              name="phoneNumber"
              type="text"
            />
            <input
              className="password"
              name="password"
              type="password"
              placeholder="Введите пароль"
            />
            <button className="btn1">Войти</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Registration;
