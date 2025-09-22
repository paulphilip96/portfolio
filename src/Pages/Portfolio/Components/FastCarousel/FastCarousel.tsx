import Marquee from "react-fast-marquee";

import "./FastCarousel.scss";


interface FastCarouselI {
  data: string[];
}

const FastCarousel = ({ data }: FastCarouselI) => {
  return (
    <div className="FastCarousel">
      <Marquee gradient={false} speed={60} pauseOnHover={true}>
        {data.map((logo, index) => (
          <span key={`marquee-${index}`}>
            <img src={logo} alt={logo} />
          </span>
        ))}
      </Marquee>
    </div>
  )
}

export default FastCarousel;