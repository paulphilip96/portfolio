import { Tag } from "antd";
import { useLocation } from "react-router-dom";
import moment from "moment";
import classNames from "classnames";

import { APP_ROUTES } from "../../Constants/General";
import packageJson from "../../../package.json";

import "./Footer.scss";


const Footer = () => {
  const location = useLocation();

  const getCurrentYear = (): number => {
    const now = moment();
    return now.year();
  }

  const appVersion = packageJson.version;
  const altClassName = (location.pathname === APP_ROUTES.HOMEPAGE) || (location.pathname === APP_ROUTES.PORTFOLIO);
  
  return (
    <div className={classNames("Footer", { "alt": altClassName })}>
      <Tag color="cyan">{`v${appVersion}`}</Tag>

      <div className="Footer__Right">
        <hr />
        <div>&copy; {getCurrentYear()} Paul Philip. Built / hosted with React, Node.js & AWS</div>
      </div>
    </div>
  )
}

export default Footer;