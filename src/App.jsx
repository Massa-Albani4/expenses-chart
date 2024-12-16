import React from "react";
import data from "./data.json";
import Chart from "./Chart";

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-biege-200 font-body text-brown">
      <div className="flex flex-row bg-red text-biege-100">
        <div>
          <p className="text-sm">My balance</p>
          <p className="text-lg font-bold">$921.48</p>
        </div>
        <div>
          <svg
            width="72"
            height="48"
            viewBox="0 0 72 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <circle fill="#382314" cx="48" cy="24" r="24" />
              <circle stroke="#FFF" strokeWidth="2" cx="24" cy="24" r="23" />
            </g>
          </svg>
        </div>
      </div>
      <div className="bg-biege-100">
        <h1 className="text-xl font-bold">Spending - Last 7 days</h1>
        <Chart />
        <div className="flex flex-row border-t-2 border-biege-200">
          <div>
            <p className="text-sm text-gray">Total this month</p>
            <p className="text-xl font-bold">$478.33</p>
          </div>
          <div>
            <p className="text-sm font-bold">+2.4%</p>
            <p className="text-sm text-gray">from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
