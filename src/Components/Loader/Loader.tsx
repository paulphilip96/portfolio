import { PacmanLoader } from "react-spinners";

import "./Loader.scss";
import React from "react";


interface LoaderI {
  show: boolean
}

const Loader = ({ show }: LoaderI) => {
  return (
    <React.Fragment>
    {show && (
      <div className="Loader">
        <PacmanLoader color="#FFD700" size={40} />
        <div className="loading-text">LOADING</div>
      </div>
      )}
    </React.Fragment>
  )
}

export default Loader;