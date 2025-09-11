import moment from "moment";

import "./Footer.scss";


const Footer = () => {
  
  const getCurrentYear = (): number => {
    const now = moment();
    return now.year();
  }

  return (
    <div className="Footer">
      <hr />
      <div>&copy; {getCurrentYear()} Paul Philip. Built / hosted with React, Node.js & AWS</div>
    </div>
  )
}

export default Footer;