import React, { PureComponent } from "react";
import { BarChart, Bar, XAxis, Tooltip } from "recharts";
import data from "./data.json";

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
  const BarDesktop = (props) => {
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
        width={45}
        height={height}
        fill={
          isHovered
            ? "hsl(186, 34%, 70%)"
            : day === currentDay
              ? "hsl(186, 34%, 60%)"
              : fill
        }
        rx={window.innerWidth < 375 ? 3 : 5}
        ry={window.innerWidth < 375 ? 3 : 5}
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
        width={window.innerWidth === 1920 ? 450 : 342}
        height={window.innerWidth === 1920 ? 140 : 170}
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
          shape={(barProps) =>
            window.innerWidth === 1920 ? (
              <BarDesktop {...barProps} isHovered={barProps.isHovered} />
            ) : (
              <CustomBar {...barProps} isHovered={barProps.isHovered} />
            )
          }
          // set the isHovered state if hovering on the bar
          onMouseEnter={(bar) => {
            bar.setState({ isHovered: true });
          }}
          onMouseLeave={(bar) => {
            bar.setState({ isHovered: false });
          }}
        />
      </BarChart>
      <div className="ml-[.6rem] mt-3 flex text-xs text-gray xl:ml-[.65rem] xl:mt-3 xl:text-lg">
        <p className="mr-6 xl:mr-7">mon</p>
        <p className="mr-6 xl:mr-[1.85rem]">tue</p>
        <p className="mr-6 xl:mr-[1.85rem]">wed</p>
        <p className="mr-7 xl:mr-9">thu</p>
        <p className="mr-8 xl:mr-10">fri</p>
        <p className="mr-6 xl:mr-8">sat</p>
        <p className="mr-6 xl:mr-6">sun</p>
      </div>
    </div>
  );
}

export default Chart;
