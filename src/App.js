// import logo from './logo.svg';
import './App.css';
// react-router-dom node package 
import { Routes, Route } from "react-router-dom";
// custom components
import Layout from './components/Layout';
import Home from './components/Home';
import DosingInvegaSustenna from './components/DosingInvegaSustenna';
import DosingInvegaTrinza from './components/DosingInvegaTrinza';

function App() {
  const reg = <sup>&reg;</sup>; // ®
  // the route for '/dosing-tool-invega-sustenna' is for converting doses from "Oral Antipsychotics to Invega Sustenna", (<DosingInvegaSustenna />)
  // the route for '/dosing-tool-invega-trinza' is for converting doses from "Invega Sustenna to Invega Trinza", (<DosingInvegaTrinza />)
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          {<Route path="/dosing-tool" element={<Home />} />}
          <Route path="/dosing-tool/1" element={<DosingInvegaSustenna reg={reg} />} />
          <Route path="/dosing-tool/2" element={<DosingInvegaTrinza reg={reg} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
