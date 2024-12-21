import React, { PureComponent } from "react";
import { BarChart, Bar, XAxis, Tooltip } from "recharts";
import data from "./data.json";
import styled from "styled-components";

const Text = styled.text`
  fill: hsl(28, 10%, 53%);
  font-size: 12px;
  text-anchor: middle;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

function Chart() {
  // This function renders the custom bar component.
  const CustomBar = (props) => {
    const { fill, x, y, width, height, radius, day, isHovered } = props;
    // get the current weekday in shorthand
    const currentDay = new Date()
      .toLocaleString("en-US", { weekday: "short" })
      .toLowerCase();
    // check if the current day matches the day of the bar
    return (
      <rect
        x={x}
        y={y}
        width={33}
        height={height}
        fill={
          isHovered
            ? "hsl(186, 34%, 70%)"
            : day === currentDay
              ? "hsl(186, 34%, 60%)"
              : fill
        }
        rx={3}
        ry={3}
        cursor="pointer"
      />
    );
  };
  // custom tooltip hover styles for bars
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { amount } = payload[0].payload;
      return (
        <div
          style={{
            backgroundColor: "hsl(25, 47%, 15%)",
            padding: "4px",
            borderRadius: "5px",
            color: "hsl(33, 100%, 98%)",
            fontSize: "0.875rem",
          }}
        >
          <p>{`$${amount}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
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
        <Tooltip content={CustomTooltip} />
        <Bar
          dataKey="amount"
          fill="hsl(10, 79%, 65%)"
          shape={(barProps) => (
            <CustomBar {...barProps} isHovered={barProps.isHovered} />
          )}
          // set the isHovered state if hovering on the bar
          onMouseEnter={(bar) => {
            bar.setState({ isHovered: true });
          }}
          onMouseLeave={(bar) => {
            bar.setState({ isHovered: false });
          }}
        />
      </BarChart>
      <div className="flex gap-9 text-gray">
        <Text>mon</Text>
        <Text>tue</Text>
        <Text>wed</Text>
        <Text>thu</Text>
        <Text>fri</Text>
        <Text>sat</Text>
        <Text>sun</Text>
      </div>
    </div>
  );
}

export default Chart;
