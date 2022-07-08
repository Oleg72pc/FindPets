import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { logUserAC } from '../../redux/actionCreators/userAC';


function Navbar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userRed.user);
  const hendlerLogout = useCallback(() => {
    fetch('/auth/logout')
      .then((data) => data.json())
      .then((data) => {
        dispatch(logUserAC(data));
        navigate('/');
      });
  }, [dispatch, navigate]);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {user ? (
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="navbar-brand" >
                  Logo
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" >
                  Главная
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/advert" className="nav-link" >
                  Объявления
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={hendlerLogout}
                >
                  Выйти, {user.userName}
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="navbar-brand">
                  Logo
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" >
                  Главная
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/advert" className="nav-link" >
                  Объявления
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link" >
                  Логин
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/registration" className="nav-link" >
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
