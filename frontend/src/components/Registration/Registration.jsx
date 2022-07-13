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
        <div className="container">
          <div className="row">
            <div className="input-field col s12 waves-light">
              <i class="material-icons prefix">account_box</i>
              <input type="text" name="userName" />
              <label for="userName">Логин</label>
            </div>
            {errorREG && <div className="error-massage">{errorREG}</div>}
          </div>
          <div className="row">
            <div className="input-field col s12 waves-light">
              <i class="material-icons prefix">call</i>
              <input type="text" name="phoneNumber" />
              <label for="phoneNumber">Телефон</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i class="material-icons prefix">enhanced_encryption</i>
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

export default Registration;
