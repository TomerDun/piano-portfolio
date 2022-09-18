import './App.css';
import ContactSect from './components/ContactSect';
import Hero from './components/Hero';
import MusicSect from './components/MusicSect';
import Navbar from './components/Navbar';
import ServicesSect from './components/ServicesSect';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Sheets from './components/Sheets';
import Portfolio from './components/Portfolio';
import StockMusic from './components/StockMusic';
import LessonsSect from './components/LessonsSect';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {
  const [modalOpen, setModalOpen] = useState(false);  
  return (
    <Router>
      <div>
        <Modal isOpen={modalOpen} handleClose={() => setModalOpen(false)} />
        <Navbar setModalOpen={setModalOpen}/>
        <Routes>
          <Route path='/' element={
            <>
              <Hero />
              <MusicSect />
              <ServicesSect />
              <LessonsSect />
              <ContactSect />
            </>
          } />          

          <Route path='/sheets' element={<Sheets modalOpen={modalOpen} setModalOpen={setModalOpen} />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/stock-music' element={<StockMusic />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
