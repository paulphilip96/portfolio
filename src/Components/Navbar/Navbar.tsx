import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { NAVIGATION } from "../../Constants/General";
import LOGO from "../../Logos/LOGO_CIRCULAR.png";
import { APP_ROUTES } from "../../Constants/API";
import ContactModal from "../ContactModal/ContactModal";

import "./Navbar.scss";


const Navbar = () => {
  
  const location = useLocation();

  const [show, setShow] = useState<boolean>(true);
  const [openContactModal, setOpenContactModal] = useState<boolean>(false);

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
            <HashLink smooth to={item.path}>{item.label}</HashLink>
          ))}
          <div onClick={() => setOpenContactModal(true)}>Contact Me</div>
        </div>
      )}

      <ContactModal show={openContactModal} setShow={setOpenContactModal} />
    </React.Fragment>
  )
}

export default Navbar;