import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import DonationPage from "./components/DonationPage/DonationPage"
import MusicPage from './components/MusicPage/MusicPage';
import FourZeroFour from './components/FourZeroFour/FourZeroFour';
import Portfolio from "./components/Portfolio/Portfolio"
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='donate' element={<DonationPage />} />
      <Route path='/music' element={<MusicPage />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='*' element={<FourZeroFour />} />
    </Routes>
  );
}

export default App;
