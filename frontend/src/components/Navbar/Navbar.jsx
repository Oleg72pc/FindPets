import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { getFetchLogoutUserAC } from '../../redux/thunk/thunk';
import './Navbar.css'


function Navbar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userRed.user);
  const hendlerLogout = useCallback(() => {
      dispatch(getFetchLogoutUserAC())
      navigate('/');
  }, [dispatch, navigate]);
  return (
    <section className="header-down">
      <div className="container">
        <div className="logo-img">
          <h1>
            <img src="img/logo.png" alt="r" /> {' '}
            FindPets
          </h1>
        </div>
        <nav>
          {user ? (
            <ul className="ulfirst">
              <li>
                <Link to="/" classNameName="nav-link">
                  Главная{' '}
                </Link>
              </li>
              <li>
                <Link to="/adverts" classNameName="nav-link">
                  Объявления{' '}
                </Link>
              </li>
              <li>
                <button classNameName="btn-nav" onClick={hendlerLogout}>
                  Выйти, {user.userName}{' '}
                </button>
              </li>
            </ul>
          ) : (
            <ul className="ulfirst">
              <li>
                <Link to="/" classNameName="nav-link">
                  Главная{' '}
                </Link>
              </li>
              <li>
                <Link to="/adverts" classNameName="nav-link">
                  Объявления{' '}
                </Link>
              </li>

              <li>
                <Link to="/login" classNameName="nav-link">
                  Логин{' '}
                </Link>
              </li>
              <li>
                <Link to="/registration" classNameName="nav-link">
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
