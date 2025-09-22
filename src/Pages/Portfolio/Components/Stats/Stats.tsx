import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import type { Stats as StatsType } from "../../../../Types/PortfolioTypes";

import "./Stats.scss";

interface StatsI {
  data: StatsType
}

const Stats = ({ data }: StatsI) => {
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  return (
    <div className="Stats" ref={ref}>
      <h4>
        {inView ? <CountUp end={data.value} duration={data.duration} /> : "0"}+
      </h4>
      <div>{data.label}</div>
    </div>
  )
}

export default Stats;