import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

import type { Extra } from "../../../../Types/PortfolioTypes";

import "./Extras.scss";


interface ExtrasI {
  data: Extra[]
}

const Extras = ({ data }: ExtrasI) => {

  const { Meta } = Card;

  return (
    <div className="Extras">
      {data.map((item, index) => (
        <React.Fragment>
          {item.isExternal ? (
            <Link to={item.path} target="_blank" key={`extras-link-${index}`}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    alt={item.alt}
                    src={item.src}
                  />
                }
              >
                <Meta title={item.title} description={item.description} />
              </Card>
            </Link>
          ) : (
            <a href={item.path} target="_blank">
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    alt={item.alt}
                    src={item.src}
                  />
                }
              >
                <Meta title={item.title} description={item.description} />
              </Card>
            </a>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Extras;