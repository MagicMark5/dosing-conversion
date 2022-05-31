// import logo from './logo.svg';
import './App.css';
// react-router-dom node package 
import { Routes, Route } from "react-router-dom";
// custom components
import Layout from './components/Layout';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          {<Route path="/" element={<Home />} />}
          {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/timelines" element={<Timelines />} />     */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
