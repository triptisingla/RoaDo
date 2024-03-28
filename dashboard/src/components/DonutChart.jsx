import { useMemo } from "react";
import * as d3 from "d3";

const MARGIN = 30;

const colors = [
  "#ffcb49",
  "#7464FF",
  "#4FD2B5",
  // "#9a6fb0",
  // "#a53253",
  // "#69b3a2",
];

export const DonutChart = ({ width, height, data, heading }) => {
  const radius = 100 - MARGIN;

  const pie = useMemo(() => {
    const pieGenerator = d3.pie().value((d) => d.value);
    return pieGenerator(data);
  }, [data]);

  const arcs = useMemo(() => {
    const arcPathGenerator = d3.arc();
    return pie.map((p) =>
      arcPathGenerator({
        innerRadius: 40,
        outerRadius: radius,
        startAngle: p.startAngle,
        endAngle: p.endAngle,
      })
    );
  }, [radius, pie]);

  return (
    <div className="donutChart card" style={{ width: "15rem" }}>
      <div className="card-body">
        <p>{heading}</p>
        <svg width={150} height={150} style={{ display: "inline-block" }}>
          <g transform={`translate(80,80)`}>
            {arcs.map((arc, i) => {
              return <path key={i} d={arc} fill={colors[i]} />;
            })}
            <text
              x="0"
              y="0"
              textAnchor="middle"
              alignmentBaseline="middle"
              fill="black"
              fontSize="15px"
            >
              Total:123456
            </text>
          </g>
        </svg>

        <div
          className="gradient upcoming d-flex flex-row justify-content-between px-2 my-2 rounded-1"
          style={{ width: "100%"}}
        >
          <div className="text" style={{ height: "100%" }}>
            Upcoming
          </div>
          <div className="value" style={{ height: "100%" }}>
            50
          </div>
        </div>
        <div
          className="gradient ongoing d-flex flex-row justify-content-between px-2 my-2 rounded-1"
          style={{ width: "100%"}}
        >
          <div className="text" style={{ height: "100%" }}>
            Ongoing
          </div>
          <div className="value" style={{ height: "100%" }}>
            100
          </div>
        </div>
        <div
          className="gradient completed d-flex flex-row justify-content-between px-2 my-2 rounded-1"
          style={{ width: "100%"}}
        >
          <div className="text" style={{ height: "100%" }}>
            Completed
          </div>
          <div className="value" style={{ height: "100%" }}>
            50
          </div>
        </div>
      </div>
    </div>
  );
};
