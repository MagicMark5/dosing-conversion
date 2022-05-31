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

  // the route for '/dosing-tool-invega-sustenna' is for converting doses from "Oral Antipsychotics to Invega Sustenna", (<DosingInvegaSustenna />)
  // the route for '/dosing-tool-invega-trinza' is for converting doses from "Invega Sustenna to Invega Trinza", (<DosingInvegaTrinza />)

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          {<Route path="/" element={<Home />} />}
          <Route path="/dosing-tool-invega-sustenna" element={<DosingInvegaSustenna />} />
          <Route path="/dosing-tool-invega-trinza" element={<DosingInvegaTrinza />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
