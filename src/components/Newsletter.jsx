import React from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="w-full bg-black">
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "tween", duration: 0.7, delay: 0.5 }}

      className="flex flex-col md:flex-row max-w-[1240px] mx-auto p-4 gap-2 justify-evenly py-14">
        <div className="flex flex-1 flex-col justify-center items-center md:items-start">
          <h1 className="text-white text-2xl font-bold text-center md:text-left xl:text-3xl">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className="text-white text-sm text-center md:text-left py-4">
            Sign up to our newsletter and stay up to date
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-center xl:pt-4">
          <div className="flex h-[40px] justify-between items-center gap-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="flex-auto w-2/3 p-3 rounded-md text-black"
            />
            <button className="bg-primary text-black font-bold px-auto py-3 my-4 rounded-md flex-auto w-1/3 max-w-[200px] hover:scale-105 duration-300 hover:bg-black hover:text-white">
              Subscribe
            </button>
          </div>
          <p className="text-white text-sm text-center md:text-left py-4">
            We care about your data in our{" "}
            <span className="text-primary hover:underline cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
