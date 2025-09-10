import React from "react";

export const Hero = () => {
  return (
    <div className="font-paaji my-40 flex flex-col items-center">
      <h1 className="selection:bg-primary/20 max-w-3xl bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-7xl leading-tight font-bold text-transparent">
        Unleash the power of intuitive finance
      </h1>
      <p className="selection:bg-primary/20 mx-auto mt-4 max-w-3xl text-center text-xl leading-relaxed font-semibold text-neutral-400">
        Say goodbye to the <span className="text-primary">outdated</span>{" "}
        financial tools. Every small business owner, regardless of the
        background, can now manage their business like a pro. Simple. Intuitive.
        And <span className="text-primary">never boring</span>.
      </p>
      <div className="mt-8 flex w-full max-w-xl justify-center gap-4">
        <input
          type="text"
          placeholder="Enter your email"
          className="focus:ring-primary/80 flex-1 rounded-lg border border-neutral-600 px-2 text-sm font-medium tracking-wide text-neutral-300 transition duration-300 focus:ring-1 focus:outline-none"
        />
        <button className="selection:bg-primary/20 relative cursor-pointer rounded-xl border border-neutral-500 bg-transparent px-4 py-2 text-sm font-medium tracking-wide text-neutral-500 transition duration-300 hover:text-neutral-200">
          Join the waitlist
          <div className="via-primary absolute inset-x-0 -bottom-0 h-px w-full bg-gradient-to-r from-transparent to-transparent" />
        </button>
      </div>
    </div>
  );
};
