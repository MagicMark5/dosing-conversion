// import logo from './logo.svg';
import './App.css';
// react-router-dom node package 
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
// custom components
import Layout from './components/Layout';
import Home from './components/Home';
import DosingInvegaSustenna from './components/DosingInvegaSustenna';
import DosingInvegaTrinza from './components/DosingInvegaTrinza';

function App() {
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);

  const closeModal = () => {
    setModal(false);
  };

  const reg = <sup>&reg;</sup>; // ®


  return (
    <div className="App">
      <Routes>
        <Route element={<Layout modal={modal} closeModal={closeModal} toggle={toggle} />}>
          {<Route path="/" element={<Home modal={modal} />}>
            <Route path="/dosing-tool" />
          </Route>}
          <Route path="/dosing-tool/1" element={<DosingInvegaSustenna modal={modal} reg={reg} />} />
          <Route path="/dosing-tool/2" element={<DosingInvegaTrinza modal={modal} reg={reg} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
