import React, { useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";

import { BACKGROUND_VIDEO_URL, NAVIGATION } from "../../Constants/General";
import Loader from "../../Components/Loader/Loader";
import ContactModal from "../../Components/ContactModal/ContactModal";

import "./Homepage.scss";


const Homepage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [openContactModal, setOpenContactModal] = useState<boolean>(false);

  const handleOnCanPlay = () => {
    setIsVideoLoaded(true);
  };

  return (
    <React.Fragment>
      <div className="Homepage">
        {/* Loader */}
        <Loader show={!isVideoLoaded} />

        {/* Video */}
        <video 
          ref={videoRef} 
          onCanPlay={handleOnCanPlay}
          autoPlay 
          muted 
          loop 
          playsInline 
          className="Homepage__Video"
        >
          <source src={BACKGROUND_VIDEO_URL} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* Opacity Layer */}
        <div className="Homepage__Layer"></div>

        {/* Content */}
        <div className="Homepage__Content">
          <h1>Paul Philip</h1>
          <h2>Software Engineer</h2> 
          <div className="navigation">
            {NAVIGATION.map((item) => (
              <React.Fragment>
                <hr /><HashLink smooth to={item.path}>{item.label}</HashLink><hr />
              </React.Fragment>
            ))}
            <hr /><div onClick={() => setOpenContactModal(true)}>Contact Me</div><hr />
          </div>
        </div>
      </div>

      <ContactModal show={openContactModal} setShow={setOpenContactModal} />
    </React.Fragment>

  )
}

export default Homepage;