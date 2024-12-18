import React from "react";
import Chart from "./Chart";

function App() {
  return (
    <div className="flex h-screen flex-col items-center bg-biege-200 px-4 font-body text-brown">
      <div className="mt-16 flex w-full flex-row gap-[9.3rem] rounded-lg bg-red px-5 py-4 text-biege-100">
        <div>
          <p className="text-sm font-normal">My balance</p>
          <p className="text-[1.39rem] font-bold">$921.48</p>
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
      <div className="mt-4 w-full rounded-lg bg-biege-100 p-5">
        <h1 className="mb-11 text-2xl font-bold">Spending - Last 7 days</h1>
        <div className="relative right-1">
          <Chart />
        </div>
        <div className="mt-5 flex flex-row border-t-2 border-biege-200 pt-6">
          <div className="mr-[5.35rem]">
            <p className="mb-[.1rem] text-sm text-gray">Total this month</p>
            <p className="text-[1.75rem] font-bold">$478.33</p>
          </div>
          <div className="ml-[.45rem] mt-6">
            <p className="-mb-[.15rem] ml-[3.8rem] text-sm font-bold">+2.4%</p>
            <p className="text-sm text-gray">from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
