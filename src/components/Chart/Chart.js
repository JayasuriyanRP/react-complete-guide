import "./Chart";
import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValue = props.dataPoints?.map((dataPoint) => dataPoint.value);
  const totalExpense = Math.max(...dataPointValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalExpense}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
