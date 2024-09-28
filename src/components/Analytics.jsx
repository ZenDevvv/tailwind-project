import React from "react";
import analytics from "../assets/laptop.jpg";
import { motion } from "framer-motion";

export default function Analytics() {
  return (
    <section className="w-full bg-white h-screen md:h-[600px] grid place-items-center overflow-x-hidden">
      <div className="flex flex-col gap-10 md:gap-0 md:flex-row max-w-[1240px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "tween", duration: 0.7 }}
          className="flex-1"
        >
          <img src={analytics} alt="Analytics" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "tween", duration: 0.7 }}
          className="flex-1 flex flex-col justify-center px-4"
        >
          <p className="text-primary font-bold">DATA ANALYTICS DASHBOARD</p>
          <h2 className="text-4xl font-bold py-4 text-black">Manage Data Analytics Centrally</h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            quisquam.
          </p>
          <button className="mx-auto md:mx-0 bg-primary text-black font-bold px-6 py-3 my-4 rounded-md  w-[200px] hover:scale-105 duration-300 hover:bg-black hover:text-white">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
}
