import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from "./component/NavbarCom"
import Footer from "./component/Footer" 

import HomePage from './pages/HomePage';
import KelasPage from './pages/KelasPage';
import Testimonial from './pages/Testimonial';
import SyaratKetenPage from './pages/SyaratKetenPage';
import FaqPage from './pages/FaqPage';

function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' Component={HomePage}></Route>
        <Route path='/kelas' Component={KelasPage}></Route>
        <Route path='/testimonial' Component={Testimonial}></Route>
        <Route path='/faq' Component={FaqPage}></Route>
        <Route path='/syaratketen' Component={SyaratKetenPage}></Route>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
