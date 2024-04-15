import './App.css'
import styled from 'styled-components'
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';

const AppWrapper = styled.div`
  height: 100vh;
`;


function App() {

  return (
    <AppWrapper>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </AppWrapper>
  );
}

export default App
