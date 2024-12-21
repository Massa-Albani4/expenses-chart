import React from "react";
import Chart from "./Chart";
import logo from "./assets/logo.svg";

function App() {
  return (
    <main className="flex h-screen flex-col items-center bg-biege-200 px-4 font-body text-brown">
      <div className="mt-16 flex w-full flex-row items-center justify-center gap-[10.5rem] rounded-lg bg-red px-5 py-4 text-biege-100 xl:w-[30rem] xl:gap-72 xl:rounded-2xl xl:px-7 xl:py-5">
        <div>
          <p className="text-sm font-normal xl:mb-[.4rem] xl:text-base">
            My balance
          </p>
          <p className="text-[1.39rem] font-bold xl:text-3xl">$921.48</p>
        </div>
        <img className="h-10 w-14" src={logo} alt="logo" />
      </div>
      <div className="mt-4 w-full rounded-lg bg-biege-100 px-5 py-4">
        <h1 className="mb-11 text-2xl font-bold xl:text-3xl">
          Spending - Last 7 days
        </h1>
        <div className="relative right-1">
          <Chart />
        </div>
        <div className="mt-5 flex flex-row border-t-2 border-biege-200 pt-6">
          <div className="mr-[5.35rem]">
            <p className="mb-[.1rem] text-sm text-gray xl:text-lg">
              Total this month
            </p>
            <p className="text-[1.75rem] font-bold xl:text-5xl">$478.33</p>
          </div>
          <div className="ml-[.45rem] mt-5">
            <p className="-mb-[.15rem] ml-[3.8rem] text-sm font-bold xl:text-lg">
              +2.4%
            </p>
            <p className="text-sm text-gray xl:text-lg">from last month</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
