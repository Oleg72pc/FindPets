import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home'
import Footer from '../Footer/Footer';
import Advert from '../Advert/Advert';
import Support from '../Support/Support';
import { store } from '../../redux/store';

function App(props) {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Advert />} />
            <Route path="/login" element={<Support />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
