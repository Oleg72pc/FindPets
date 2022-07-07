import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <>
      <nav>
        <Link className="navbar-brand" to="/">
          Главная
        </Link>
        <ul>
          <li>
            <Link  to="/">
              Главная
            </Link>
          </li>
          <li>
            <Link to="/cards">
              Курсы
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/command">
              Вы научитесь
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/aboutus">
              О нас
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
