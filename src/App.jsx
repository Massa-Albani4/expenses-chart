import React from "react";
import Chart from "./Chart";
import logo from "./assets/logo.svg";

function App() {
  return (
    <main className="flex h-screen flex-col items-center bg-biege-200 px-4 font-body text-brown">
      <section className="mt-16 flex w-full flex-row items-center justify-center gap-[10.4rem] rounded-[.6rem] bg-red py-4 text-biege-100 md:w-[21rem] md:gap-40 md:rounded-xl md:py-4 lg:mt-20 lg:w-96 lg:gap-48 lg:rounded-[.85rem] lg:py-[1.1rem]">
        <div>
          <p className="text-sm font-normal text-biege-200 md:mb-[.2rem] md:text-xs lg:mb-[.2rem] lg:text-sm">
            My balance
          </p>
          <p className="text-[1.39rem] font-bold text-biege-100 md:text-xl lg:text-2xl lg:font-semibold">
            $921.48
          </p>
        </div>
        <img
          className="h-10 w-14 md:h-8 md:w-11 lg:size-14"
          src={logo}
          alt="logo"
        />
      </section>
      <section className="xl:mt-5 xl:w-[31rem] xl:rounded-[1.2rem] xl:px-9 xl:py-8 mt-4 w-full rounded-lg bg-biege-100 px-5 py-4 md:w-[21rem] md:rounded-xl md:px-6 md:py-4">
        <h1 className="xl:text-3xl mb-8 text-2xl font-bold md:mb-7 md:text-xl">
          Spending - Last 7 days
        </h1>
        <div className="relative right-1">
          <Chart />
        </div>
        <div className="xl:mb-3 xl:mt-7 xl:pt-7 mb-1 mt-6 flex flex-row border-t-2 border-biege-200 pt-6 md:mb-3 md:mt-6 md:pt-6">
          <div className="mr-[5.35rem]">
            <p className="xl:mb-2 xl:text-lg mb-[.1rem] text-sm text-gray md:mb-[.2rem] md:text-xs">
              Total this month
            </p>
            <p className="xl:text-5xl text-[1.75rem] font-bold md:text-3xl">
              $478.33
            </p>
          </div>
          <div className="xl:mt-8 ml-[.45rem] mt-5 md:ml-0">
            <p className="xl:-mb-1 xl:ml-20 xl:text-lg -mb-[.15rem] ml-[3.8rem] text-sm font-bold md:mb-[.02rem] md:ml-[3.3rem] md:text-xs">
              +2.4%
            </p>
            <p className="xl:text-lg text-sm text-gray md:text-xs">
              from last month
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
