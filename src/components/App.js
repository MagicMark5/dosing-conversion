import '../styles/App.scss';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Layout from './Layout';
import Home from './Home';
import DosingInvegaSustenna from './DosingInvegaSustenna';
import DosingInvegaTrinza from './DosingInvegaTrinza';

function App() {
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);

  const closeModal = () => {
    setModal(false);
    window.scrollTo(0,0);
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
