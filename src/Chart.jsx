import React, { PureComponent } from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";
import data from "./data.json";

function Chart() {
  const renderXAxisTick = (tickItem) => {
    return (
      <text
        x={tickItem.x}
        y={tickItem.y}
        dy={14}
        fill="hsl(28, 10%, 53%)"
        fontSize={12}
        textAnchor="middle"
      >
        {tickItem.payload.value}
      </text>
    );
  };
  const CustomBar = (props) => {
    const { fill, x, y, width, height, radius, day } = props;
    const currentDay = new Date()
      .toLocaleString("en-US", { weekday: "short" })
      .toLowerCase();
    return (
      <rect
        x={x}
        y={y}
        width={33}
        height={height}
        fill={day === currentDay ? "hsl(186, 34%, 60%)" : fill}
        rx={3}
        ry={3}
      />
    );
  };

  return (
    <BarChart
      width={342}
      height={180}
      data={data}
      margin={{
        top: 0,
        right: 29,
        left: 0,
        bottom: 0,
      }}
    >
      <XAxis dataKey="day" tick={renderXAxisTick} stroke="transparent" />
      <Bar
        dataKey="height"
        fill="hsl(10, 79%, 65%)"
        shape={(barProps) => <CustomBar {...barProps} />}
      />
    </BarChart>
  );
}

export default Chart;
