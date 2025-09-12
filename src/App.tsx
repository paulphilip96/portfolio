import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Homepage from "./Pages/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import TypingTest from "./Pages/TypingTest/TypingTest";

import "antd/dist/reset.css";
import "./App.scss"


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/typing_test" element={<TypingTest />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
