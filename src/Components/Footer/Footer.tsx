import { Tag } from "antd";
import moment from "moment";

import packageJson from "../../../package.json";

import "./Footer.scss";


const Footer = () => {

  const getCurrentYear = (): number => {
    const now = moment();
    return now.year();
  }

  const appVersion = packageJson.version;

  return (
    <div className="Footer">
      <Tag color="gold">{`v${appVersion}`}</Tag>

      <div className="Footer__Right">
        <hr />
        <div>&copy; {getCurrentYear()} Paul Philip. Built / hosted with React, Node.js & AWS</div>
      </div>
    </div>
  )
}

export default Footer;