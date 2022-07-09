import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { logoutUserAC } from '../../redux/actionCreators/userAC';
import './Navbar.css'


function Navbar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userRed.user);
  console.log(user);
  const hendlerLogout = useCallback(() => {
    fetch('/auth/logout')
      .then((data) => data.json())
      .then((data) => {
        dispatch(logoutUserAC(data));
        navigate('/');
      });
  }, [dispatch, navigate]);
  return (
    <nav className="container">
      <div className="navig">
        {user ? (
          <div className="menu" id="navbarNav">
            <ul className="nav_ul">
              {/* <li className="logo">
                <Link to="/" className="logo">
                  Logo
                </Link>
              </li> */}
              <li className="nav_li">
                <Link to="/" className="nav-link">
                  Главная
                </Link>
              </li>
              <li className="nav_li">
                <Link to="/advert" className="nav-link">
                  Объявления
                </Link>
              </li>
              <li className="nav_li">
                <button className="nav-link" onClick={hendlerLogout}>
                  Выйти, {user.userName}
                </button>
              </li>
            </ul>
          </div>
          
        ) : (
          
          <div className="menu" id="navbarNav">
            <ul className="nav_ul">
              <li className="nav_li">
                <Link to="/" className="navbar-brand">
                  Logo
                </Link>
              </li>
              <li className="nav_li">
                <Link to="/" className="nav-link">
                  Главная
                </Link>
              </li>
              <li className="nav_li">
                <Link to="/advert" className="nav-link">
                  Объявления
                </Link>
              </li>
              <li className="nav_li">
                <Link to="/login" className="nav-link">
                  Логин
                </Link>
              </li>
              <li className="nav_li">
                <Link to="/registration" className="nav-link">
                  Регистрация
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
