import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { getFetchLogoutUserAC } from '../../redux/thunk/thunk';
import './Navbar.css';
import logo from '../../img/logo7.png'

function Navbar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userRed.user);
  const hendlerLogout = useCallback(() => {
    dispatch(getFetchLogoutUserAC());
    navigate('/');
  }, [dispatch, navigate]);
  return (
    <section className="header-down">
      <div className="container">
        <div className="logo-img">
          <Link to="/" className="nav-logo">
            <p className="nav-h1">
              <img src={logo} className='logo' alt="logo" /> FindPets
            </p>{' '}
          </Link>
        </div>
        <nav>
          {user ? (
            <ul className="ulfirst">
              <li>
                <Link to="/" className="nav-link">
                  Главная{' '}
                </Link>
              </li>
              <li>
                <Link to="/adverts" className="nav-link">
                  Все объявления{' '}
                </Link>
              </li>
              <li>
                <button
                  className="btn-nav1"
                  onClick={hendlerLogout}
                >
                  Выйти, {user.userName}{' '}
                </button>
              </li>
            </ul>
          ) : (
            <ul className="ulfirst">
              <li>
                <Link to="/" className="nav-link">
                  Главная{' '}
                </Link>
              </li>
              <li>
                <Link to="/adverts" className="nav-link">
                  Все объявления{' '}
                </Link>
              </li>

              <li>
                <Link to="/login" className="nav-link">
                  Логин{' '}
                </Link>
              </li>
              <li>
                <Link to="/registration" className="nav-link">
                  Регистрация{' '}
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </section>

    // <nav classNameName="container">
    //   <div classNameName="navig">
    //     {user ? (
    //       <div classNameName="menu" id="navbarNav">
    //         <ul classNameName="nav_ul">
    //           {/* <li classNameName="logo">
    //             <Link to="/" classNameName="logo">
    //               Logo
    //             </Link>
    //           </li> */}
    //           <li classNameName="nav_li">
    //             <Link to="/" classNameName="nav-link">
    //               Главная
    //             </Link>
    //           </li>
    //           <li classNameName="nav-item">
    //             <Link to="/adverts" classNameName="nav-link" >
    //               Объявления
    //             </Link>
    //           </li>
    //           <li classNameName="nav_li">
    //             <button classNameName="nav-link" onClick={hendlerLogout}>
    //               Выйти, {user.userName}
    //             </button>
    //           </li>
    //         </ul>
    //       </div>
    //     ) : (

    //       <div classNameName="menu" id="navbarNav">
    //         <ul classNameName="nav_ul">
    //           <li classNameName="nav_li">
    //             <Link to="/" classNameName="navbar-brand">
    //               Logo
    //             </Link>
    //           </li>
    //           <li classNameName="nav_li">
    //             <Link to="/" classNameName="nav-link">
    //               Главная
    //             </Link>
    //           </li>
    //           <li classNameName="nav-item">
    //             <Link to="/adverts" classNameName="nav-link" >
    //               Объявления
    //             </Link>
    //           </li>
    //           <li classNameName="nav_li">
    //             <Link to="/login" classNameName="nav-link">
    //               Логин
    //             </Link>
    //           </li>
    //           <li classNameName="nav_li">
    //             <Link to="/registration" classNameName="nav-link">
    //               Регистрация
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     )}
    //   </div>
    // </nav>
  );
}

export default Navbar;
