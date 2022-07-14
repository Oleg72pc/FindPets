import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { getFetchLogoutUserAC } from '../../redux/thunk/thunk';
import './Navbar.css';
import logo from '../../img/logo1.png'

function Navbar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userRed.user);
  const hendlerLogout = useCallback(() => {
    dispatch(getFetchLogoutUserAC());
    navigate('/');
  }, [dispatch, navigate]);

  return (
    <>
      <nav className="navb">
        <div className="nav-wrapper">
          <div className="container">
            <Link to="/" className="brand-logo">
              <img src={logo} className="logo" alt="logo" /> Find Pets
            </Link>
            {user ? (
              <ul className="right hide-on-med-and-down ">
                <li className="textcolor">
                  <Link to="/"></Link>
                </li>
                <li>
                  <Link to="/adverts">Все объявления</Link>
                </li>
                <li>
                  <button
                    className="btn waves-effect waves-light"
                    type="submit"
                    name="action"
                    onClick={hendlerLogout}
                  >
                    Выйти, {user.userName}{' '}
                  </button>
                </li>
              </ul>
            ) : (
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link className="navLinkMob" to="/">Главная</Link>
                </li>
                <li>
                  <Link className="navLinkMob" to="/adverts">Все объявления</Link>
                </li>
                <li>
                  <Link className="navLinkMob" to="/login">Логин</Link>
                </li>
                <li>
                  <Link className="navLinkMob" to="/registration">Регистрация</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
