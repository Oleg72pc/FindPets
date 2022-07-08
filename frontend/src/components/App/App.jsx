import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Adverts from '../Advert/Adverts';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getFetchUserSessionAC } from '../../redux/thunk/thunk';

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFetchUserSessionAC())
  }, [dispatch]);
  
  return (
    <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/advert" element={<Adverts />} />
            <Route path="/advert/:advertId" element={<Adverts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
