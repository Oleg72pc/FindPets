import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Adverts from '../Adverts/Adverts';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
// import { sessionUserAC } from '../../redux/actionCreators/userAC';
import './App.css'
import Advert from '../Advert/Advert';
import AdventForm from '../AdventForm/AdventForm';
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
            <Route path="/adverts" element={<Adverts />} />
            <Route path="/adverts/:advertId" element={<Advert />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/form/:name" element={<AdventForm />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
