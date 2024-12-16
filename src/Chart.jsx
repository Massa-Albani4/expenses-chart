import React from "react";
import { BarChart, Bar, XAxis, Tooltip } from "recharts";
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
  return (
    <BarChart width={365} height={200} data={data}>
      <XAxis dataKey="day" tick={renderXAxisTick} />
      <Bar dataKey="height1" barSize={122} fill="hsl(10, 79%, 65%)" x={422} />
      <Bar dataKey="height2" barSize={122} fill="hsl(10, 79%, 65%)" />
      <Bar dataKey="height3" barSize={122} fill="hsl(10, 79%, 65%)" />
      <Bar dataKey="height4" barSize={122} fill="hsl(10, 79%, 65%)" />
      <Bar dataKey="height5" barSize={122} fill="hsl(10, 79%, 65%)" />
      <Bar dataKey="height6" barSize={122} fill="hsl(10, 79%, 65%)" />
      <Bar dataKey="height7" barSize={122} fill="hsl(10, 79%, 65%)" />
    </BarChart>
  );
}

export default Chart;
