import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-black">
      <motion.div
        initial={{ y: 100, opacity: 0}}
        animate={{ y: 0, opacity: 1,}}
        transition={{ type: "tween", duration: 0.7 }}
        className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center"
      >
        <p className="text-primary font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center gap-1 md:gap-4 py-4">
          <p className="text-xl sm:text-4xl md:text-5xl font-bold">
            Fast, flexible financing for
          </p>
          <ReactTyped
            className="text-xl sm:text-4xl md:text-5xl font-bold"
            strings={["BTB", "BTC", "SAAS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-sm font-semibold text-gray-500 px-2">
          Monitor your data analytics to increase revenue for BTB, STC, & STC
          platforms
        </p>
        <button className="bg-primary w-[200px] mx-auto px-6 py-3 my-4 rounded-md text-black font-bold cursor-pointer hover:scale-105 duration-300">
          Get Started
        </button>
      </motion.div>
    </section>
  );
}
