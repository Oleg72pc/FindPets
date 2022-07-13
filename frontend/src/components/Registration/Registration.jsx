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
    dispatch(postFetchUserRegistrationAC(data));
    navigation('/');
  };
  return (
    <form onSubmit={addUser} className="login-wrapper">
      <div className="contlog">
        <h3 className="log">Регистрация</h3>
        <div className="container">
          <div className="row">
            <div className="input-field col s12 waves-light">
              <input type="text" name="userName" />
              <label for="userName">Логин</label>
            </div>
          </div>
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
    // <form onSubmit={addUser} className="login-wrapper">
    //   <div className="container1">
    //     <div className="service-down1">
    //       <div className="box1">
    //         <h1>Регистрация</h1>
    //         <div className="box-back1">
    //           <img className="team1-log" src="img/article.webp" alt="" />
    //         </div>
    //         <input
    //           className="phoneNumber"
    //           name="userName"
    //           type="text"
    //           placeholder="Введите логин"
    //         />
    //         <input
    //           placeholder="Телефон"
    //           className="phoneNumber"
    //           name="phoneNumber"
    //           type="text"
    //         />
    //         <input
    //           className="password"
    //           name="password"
    //           type="password"
    //           placeholder="Введите пароль"
    //         />
    //         <button className="btn1">Войти</button>
    //       </div>
    //     </div>
    //   </div>
    // </form>
  );
}

export default Registration;
