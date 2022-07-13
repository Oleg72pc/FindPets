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
      <div className="contlog">
        <h3 className="log">Регистрация</h3>
        {errorREG && <div className='error-massage'>{errorREG}</div>}
        <div className="container">
          <div className="row">
            <div className="input-field col s12 waves-light">
              <input type="text" name="userName" />
              <label htmlFor="userName">Логин</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 waves-light">
              <input type="text" name="phoneNumber" />
              <label htmlFor="phoneNumber">Телефон</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input type="password" name="password" />
              <label htmlFor="password">Пароль</label>
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

export default Registration;
