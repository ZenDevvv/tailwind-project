import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";
import { motion } from "framer-motion";

export default function Subscription() {
  return (
    <section className="bg-white py-20">
      <div className="text-black flex flex-col p-4 gap-12 md:gap-4 md:flex-row justify-between items-center max-w-[1000px] mx-auto">
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition:{ type: "tween", duration: 0.7} }}
        whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
        className="w-full flex flex-col justify-center flex-1 relative shadow-xl p-4 rounded-lg py-12 h-full max-h-[420px] border">
          <img
            className="w-[100px] mx-auto left-0 right-0"
            src={single}
            alt=""
          />
          <h2 className="text-xl font-bold text-center p-2">Single User</h2>
          <h1 className="text-4xl font-extrabold text-center p-6">$149</h1>
          <div className="flex flex-col justify-between">
            <p className="text-center font-semibold p-2 border-t border-b">
              500GB Storage
            </p>
            <p className="text-center font-semibold p-2">1 Granted User</p>
            <p className="text-center font-semibold p-2 border-t border-b">
              Send up to 2GB
            </p>
          </div>
          <button className="bg-black block text-white hover:text-primary  w-[150px] mx-auto rounded-md p-2 mt-4 duration-300">
            Start Trial
          </button>
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition:{ type: "tween", duration: 0.7, delay: 0.15} }}
        whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
        className="bg-gray-200 w-full flex flex-col justify-center flex-1 relative shadow-xl p-4 rounded-lg py-12 max-h-[440px]">
          <img
            className="w-[100px] mx-auto left-0 right-0"
            src={single}
            alt=""
          />
          <h2 className="text-xl font-bold text-center p-2">Partnership</h2>
          <h1 className="text-4xl font-extrabold text-center p-6">$199</h1>
          <div className="flex flex-col justify-between">
            <p className="text-center font-semibold p-2 border-t border-b border-gray-300">
              1TB Storage
            </p>
            <p className="text-center font-semibold p-2">3 Granted User</p>
            <p className="text-center font-semibold p-2 border-t border-b border-gray-300">
              Send up to 10GB
            </p>
          </div>
          <button className="bg-black block text-white hover:text-primary  w-[150px] mx-auto rounded-md p-2 mt-4 duration-300">

            Start Trial
          </button>
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition:{ type: "tween", duration: 0.7, delay: 0.3} }}
        whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
        className="w-full flex flex-col justify-center flex-1 relative shadow-xl p-4 rounded-lg py-12 h-full max-h-[420px] border">
          <img
            className="w-[100px] mx-auto left-0 right-0"
            src={single}
            alt=""
          />
          <h2 className="text-xl font-bold text-center p-2">Group Account</h2>
          <h1 className="text-4xl font-extrabold text-center p-6">$299</h1>
          <div className="flex flex-col justify-between">
            <p className="text-center font-semibold p-2 border-t border-b">
              5TB Storage
            </p>
            <p className="text-center font-semibold p-2">10 Granted User</p>
            <p className="text-center font-semibold p-2 border-t border-b">
              Send up to 20GB
            </p>
          </div>
          <button className="bg-black block text-white hover:text-primary  w-[150px] mx-auto rounded-md p-2 mt-4 duration-300">

            Start Trial
          </button>
        </motion.div>
      </div>
    </section>
  );
}
