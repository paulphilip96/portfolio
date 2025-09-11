import React, { useRef, useState } from "react";

import { BACKGROUND_VIDEO_URL, NAVIGATION } from "../../Constants/General";
import Loader from "../../Components/Loader/Loader";

import "./Homepage.scss";
import { Link } from "react-router-dom";


const Homepage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleOnCanPlay = () => {
    setIsVideoLoaded(true);
  };

  return (
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
              <hr /><Link to={item.path}>{item.label}</Link><hr />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Homepage;