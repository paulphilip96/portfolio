import { Carousel, Tag } from "antd";

import type { Experience } from "../../../../Types/PortfolioTypes";

import "./RegCarousel.scss";


interface RegCarouselI {
  data: Experience[][]
}

const RegCarousel = ({ data }: RegCarouselI) => {
  return (
    <div className="RegCarousel">
      <Carousel autoplay effect="scrollx" arrows>
        {data.map((group, i) => (
          <div className="carousel-slide" key={`carousel-slide-${i}`}>
            {group.map((item, j) => (
              <div className="carousel-block" key={`carousel-block-${j}`}>
                <div>
                  <div>{item.company}</div>
                  <Tag color="gold">{item.jobType}</Tag>
                </div>
                <img src={item.thumbnail} alt={item.company} />
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>

  )
}

export default RegCarousel;