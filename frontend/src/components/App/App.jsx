import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Advert from '../Advert/Advert';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { sessionUserAC } from '../../redux/actionCreators/userAC';

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('/auth/session')
      .then((data) => data.json())
      .then((data) => {
        dispatch(sessionUserAC(data));
      });
  }, [dispatch]);
  
  return (
    <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/advert" element={<Advert />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
