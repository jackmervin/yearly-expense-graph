import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const datapointvalue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaxiam = Math.max(...datapointvalue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxiam}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
