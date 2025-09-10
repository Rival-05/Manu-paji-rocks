import React from "react";

export const Hero = () => {
  return (
    <div className="my-24 flex flex-col items-center w-full">
      <button className="flex items-center gap-1 border border-slate-300/80 bg-slate-200 text-gray-800 text-xs font-medium px-2 py-1 rounded-full cursor-pointer hover:bg-slate-300/70 transition duration-300">
        How to work with lawyers
        <svg width="16" height="16" fill="none">
          <path
            stroke="#1E1F25"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity=".5"
            strokeWidth="1.25"
            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
          />
        </svg>
      </button>

      <div className="mt-8 text-center max-w-2xl">
        <h1 className="text-gray-900 text-6xl font-semibold tracking-tight">
          Magically simplify accounting and taxes
        </h1>
        <p className="max-w-xl mx-auto mt-5 text-gray-600 text-lg font-semibold tracking-wide">
          Automated bookkeeping, effortless tax filing, real time insights. Set
          up in 10 mins. Back to building by 7:35am
        </p>
      </div>
      <div className="flex items-center mt-8 gap-2">
        <button className="bg-[#2579F4] text-white py-2 px-4 rounded-lg font-medium text-sm shadow-lg text-shadow-md cursor-pointer hover:bg-[#2560F5] transition duration-300">
          Get Started
        </button>
        <button className="flex items-center bg-transparent text-gray-900 py-2 px-4 rounded-lg font-medium text-sm gap-2  cursor-pointer hover:bg-slate-300/60 transition duration-300">
          Pricing
          <svg width="16" height="16" fill="none">
          <path
            stroke="#1E1F25"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity=".5"
            strokeWidth="1.25"
            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
          />
        </svg>
        </button>
      </div>
    </div>
  );
};
