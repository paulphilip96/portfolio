import { Tag } from "antd";
import { useLocation } from "react-router-dom";
import moment from "moment";
import classNames from "classnames";

import packageJson from "../../../package.json";

import "./Footer.scss";
import { APP_ROUTES } from "../../Constants/API";


const Footer = () => {
  const location = useLocation();

  const getCurrentYear = (): number => {
    const now = moment();
    return now.year();
  }

  const appVersion = packageJson.version;
  const altClassName = (location.pathname === APP_ROUTES.HOMEPAGE);
  
  return (
    <div className={classNames("Footer", { "alt": altClassName })}>
      <Tag color="yellow">{`v${appVersion}`}</Tag>

      <div className="Footer__Right">
        <hr />
        <div>&copy; {getCurrentYear()} Paul Philip. Built / hosted with React, Node.js & AWS</div>
      </div>
    </div>
  )
}

export default Footer;