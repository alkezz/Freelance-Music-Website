import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import DonationPage from "./components/DonationPage/DonationPage copy"
import MusicPage from './components/MusicPage/MusicPage';
import FourZeroFour from './components/FourZeroFour/FourZeroFour';
import Palestine from './components/DonationPage/Palestine';
import './App.css';

/**
 * React component for rendering the main routes of the application.
 *
 * @return {JSX} Routes and Route components for different paths
 */
function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      {/* <Route exact path='/donate' element={<DonationPage />} /> */}
      <Route exact path='/music' element={<MusicPage />} />
      <Route path='*' element={<FourZeroFour />} />
    </Routes>
  );
}

export default App;
