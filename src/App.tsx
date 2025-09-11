import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Pages/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

import "antd/dist/reset.css";
import "./App.scss"


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
