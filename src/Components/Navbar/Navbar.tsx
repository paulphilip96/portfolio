import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useMediaQuery } from "react-responsive";

import { APP_ROUTES, NAVIGATION } from "../../Constants/General";
import ContactModal from "../ContactModal/ContactModal";

import "./Navbar.scss";


const Navbar = () => {
  
  const location = useLocation();
  const isTablet = useMediaQuery({ maxWidth: 780 });
  const { HOMEPAGE } = APP_ROUTES;

  const [show, setShow] = useState<boolean>(true);
  const [openContactModal, setOpenContactModal] = useState<boolean>(false);

  useEffect(() => {
    const currentPath = location.pathname;
    (currentPath === HOMEPAGE) ? setShow(false) : setShow(true)
  }, [location.pathname]);

  const filteredNavigation = isTablet
    ? (NAVIGATION
      .filter((item) => !item.path.startsWith(APP_ROUTES.PORTFOLIO))
      .concat({ path: APP_ROUTES.PORTFOLIO, label: "Portfolio" })
    )
    : NAVIGATION

  return (
    <React.Fragment>
      {show && (
        <div className="Navbar">
          {filteredNavigation.map((item) => (
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