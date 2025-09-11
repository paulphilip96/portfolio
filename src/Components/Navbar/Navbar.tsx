import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import { NAVIGATION } from "../../Constants/General";
import LOGO from "../../Logos/LOGO_CIRCULAR.png";

import "./Navbar.scss";
import { APP_ROUTES } from "../../Constants/Routes";


const Navbar = () => {
  
  const location = useLocation();

  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    const currentPath = location.pathname;
    (currentPath === HOMEPAGE) ? setShow(false) : setShow(true)
  }, []);

  const { HOMEPAGE } = APP_ROUTES;

  return (
    <React.Fragment>
      {show && (
        <div className="Navbar">
          <Link to={HOMEPAGE}><img src={LOGO} alt="Logo"/></Link>

          {NAVIGATION.map((item) => (
            <Link to={item.path}>{item.label}</Link>
          ))}
        </div>
      )}
    </React.Fragment>
  )
}

export default Navbar;