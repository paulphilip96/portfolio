import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { ConfigProvider, theme } from "antd";

import { APP_ROUTES } from "./Constants/General";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Homepage from "./Pages/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import TypingTest from "./Pages/TypingTest/TypingTest";
import Holiday from "./Pages/Holiday/Holiday";

import 'react-vertical-timeline-component/style.min.css';
import "antd/dist/reset.css";
import "./App.scss"


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>

        <ToastContainer />
        <Navbar />
        
        <Routes>
          <Route path={APP_ROUTES.HOMEPAGE} element={<Homepage />} />
          <Route path={APP_ROUTES.PORTFOLIO} element={<Portfolio />} />
          <Route path={APP_ROUTES.TYPING_TEST} element={<TypingTest />} />
          <Route path={APP_ROUTES.HOLIDAY} element={<Holiday />} />
        </Routes>
        
        <Footer />
        </ConfigProvider> 
      </BrowserRouter>
    </div>
  )
}

export default App
