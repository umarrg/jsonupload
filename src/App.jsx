import { useState } from 'react'
import reactLogo from './assets/react.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { Home } from './pages/home'
import { AppBar } from './components/appBar'
import { Data } from './pages/data';
import { Box } from '@chakra-ui/react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box className="App" bg="#F7FAFC" >
      <Router>
        <AppBar />
        

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/data" element={<Data />} />

          </Routes>
        
      </Router>



    </Box>
  )
}

export default App
