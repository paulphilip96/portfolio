import React, { useState } from "react";
import { Button} from "antd";

import { EXPERIENCE, EXTRAS, STATS, TECH_STACK_LOGOS } from "./Constants/projects";
import { APP_ROUTE_IDS, APP_ROUTES } from "../../Constants/General";
import { chunkArray } from "../../Helpers/UtilityHelpers";
import FastCarousel from "./Components/FastCarousel/FastCarousel";
import Stats from "./Components/Stats/Stats";
import RegCarousel from "./Components/RegCarousel/RegCarousel";
import Extras from "./Components/Extras/Extras";
import ContactModal from "../../Components/ContactModal/ContactModal";
import HEADSHOT from "./Images/About/PROFILE_PIC.jpeg";

import "./Portfolio.scss";
import { HashLink } from "react-router-hash-link";


const Portfolio = () => {
  
  const [showContactModal, setShowContactModal] = useState<boolean>(false);

  const slides = chunkArray(EXPERIENCE, 3)

  return (
    <React.Fragment>
      <div className="Portfolio">
        {/* About */}
        <div className="Portfolio__About wrapper" id={APP_ROUTE_IDS.ABOUT}>
          <div className="Portfolio__About__Intro">
            <div className="image-wrapper">
              <img src={HEADSHOT} alt="About Me" />
            </div>
            <h1>Hi! I'm Paul</h1>
          </div>

          <div className="Portfolio__About__Heading">
            <h3>I develop internal tools that streamline business operations</h3>
            <div>Invoicing Platforms | Timesheet Portals | CRM's | Data Parsers | Other Efficiency-Focused Solutions</div>
            <Button variant="outlined" color="cyan">
              <HashLink to={APP_ROUTES.EXPERIENCE} smooth>View More</HashLink>
            </Button>
          </div>
        </div>

        {/* Experience */}
        <div className="Portfolio__Experience wrapper" id={APP_ROUTE_IDS.EXPERIENCE}>
          <div className="Portfolio__Experience__Carousel container">
            <h1>Projects & Roles</h1>
            <RegCarousel data={slides} />
          </div>

          <div className="Portfolio__Experience__TechStack container">
            <h1>Tech Stack</h1>
            <FastCarousel data={TECH_STACK_LOGOS} />
          </div>
        </div>

        <div className="Portfolio__Stats">
          {STATS.map((stat) => (
            <Stats data={stat} />
          ))}
        </div>

        {/* Extras */}
        <div className="Portfolio__Extras wrapper" id={APP_ROUTE_IDS.EXTRAS}>
          <div className="Portfolio__Extras__Left">
            <h3>Thanks for visiting! Feel free to reach out</h3>
            <Button
              variant="outlined" 
              color="cyan"
              onClick={() => setShowContactModal(true)}
            >Contact Me</Button>
          </div>
          <div className="Portfolio__Extras__Right">
            <h1>Extras</h1>
            <Extras data={EXTRAS} />
          </div>
        </div>
      </div>
      
      {/* Contact Modal */}
      <ContactModal show={showContactModal} setShow={setShowContactModal} />
    </React.Fragment>
  )
}

export default Portfolio;