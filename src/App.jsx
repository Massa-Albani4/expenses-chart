import React from "react";
import Chart from "./Chart";
import logo from "./assets/logo.svg";

function App() {
  return (
    <main className="flex h-screen flex-col items-center bg-biege-200 px-4 font-body text-brown">
      <section className="md:w-[21rem] md:rounded-xl md:gap-44 md:py-4 mt-16 flex w-full flex-row items-center justify-center gap-[10.4rem] rounded-[.6rem] bg-red py-4 text-biege-100 xl:mt-52 xl:w-[31rem] xl:gap-[16.5rem] xl:rounded-[1.2rem] xl:py-6">
        <div>
          <p className="md:text-xs md:mb-[.2rem] text-sm font-normal text-biege-200 xl:mb-[.4rem] xl:text-base">
            My balance
          </p>
          <p className="md:text-xl text-[1.39rem] font-bold xl:text-3xl xl:font-semibold">
            $921.48
          </p>
        </div>
        <img
          className="md:w-11 md:h-8 h-10 w-14 xl:size-16"
          src={logo}
          alt="logo"
        />
      </section>
      <section className="md:w-[21rem] md:rounded-xl md:px-6 md:py-4 mt-4 w-full rounded-lg bg-biege-100 px-5 py-4 xl:mt-5 xl:w-[31rem] xl:rounded-[1.2rem] xl:px-9 xl:py-8">
        <h1 className="md:text-xl md:mb-7 mb-8 text-2xl font-bold xl:text-3xl">
          Spending - Last 7 days
        </h1>
        <div className="relative right-1">
          <Chart />
        </div>
        <div className="md:mt-6 md:pt-6 md:mb-3 mb-1 mt-6 flex flex-row border-t-2 border-biege-200 pt-6 xl:mb-3 xl:mt-7 xl:pt-7">
          <div className="mr-[5.35rem]">
            <p className="md:text-xs md:mb-[.2rem] mb-[.1rem] text-sm text-gray xl:mb-2 xl:text-lg">
              Total this month
            </p>
            <p className="md:text-3xl text-[1.75rem] font-bold xl:text-5xl">
              $478.33
            </p>
          </div>
          <div className="md:ml-0 ml-[.45rem] mt-5 xl:mt-8">
            <p className="md:ml-[3.3rem] md:mb-[.02rem] md:text-xs -mb-[.15rem] ml-[3.8rem] text-sm font-bold xl:-mb-1 xl:ml-20 xl:text-lg">
              +2.4%
            </p>
            <p className="md:text-xs text-sm text-gray xl:text-lg">
              from last month
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
