import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaGithubSquare,
  FaLinkedin,
  FaDribbbleSquare,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const icons = [
    { component: FaFacebookSquare, key: "facebook" },
    { component: FaInstagram, key: "instagram" },
    { component: FaGithubSquare, key: "github" },
    { component: FaLinkedin, key: "linkedin" },
    { component: FaDribbbleSquare, key: "dribbble" },
  ];

  return (
    <footer>
      <div className="max-w-[1240px] mx-auto py-16 px-4 flex flex-col md:flex-row gap-10 text-gray-300">
        <div className="col-span-2 md:w-2/5">
          <motion.a
            className="inline-block font-bold text-[#00df9a] text-3xl"
            href="/"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            viewport={{ once: true }}
          >
            React.
          </motion.a>
          <motion.p
            className="text-sm pt-4"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 0.4 }}
            viewport={{ once: true }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            quibusdam recusandae cupiditate necessitatibus amet ab porro optio
            dolorem neque, vel architecto molestias voluptate saepe illo.
          </motion.p>
          <div className="flex space-x-4 pt-4">
            {icons.map((icon, index) => {
              const IconComponent = icon.component;
              return (
                <motion.div
                  key={icon.key}
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", delay: 0.6 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <IconComponent size={20} />
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="md:w-3/5 flex justify-between">
          {["Solutions", "Support", "Company", "Legal"].map((section, index) => (
            <motion.div
              key={section}
              className="w-fit"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 1.6 + 0.2 * index }}
              viewport={{ once: true }}
            >
              <h6 className="font-bold uppercase text-center md:text-left">
                {section}
              </h6>
              <ul className="text-center md:text-left">
                {section === "Solutions" && (
                  <>
                    <li className="py-2 text-sm">Analytics</li>
                    <li className="py-2 text-sm">Marketing</li>
                    <li className="py-2 text-sm">Commerce</li>
                    <li className="py-2 text-sm">Insights</li>
                  </>
                )}
                {section === "Support" && (
                  <>
                    <li className="py-2 text-sm">Pricing</li>
                    <li className="py-2 text-sm">Documentation</li>
                    <li className="py-2 text-sm">Guides</li>
                    <li className="py-2 text-sm">API Status</li>
                  </>
                )}
                {section === "Company" && (
                  <>
                    <li className="py-2 text-sm">About</li>
                    <li className="py-2 text-sm">Blog</li>
                    <li className="py-2 text-sm">Jobs</li>
                    <li className="py-2 text-sm">Press</li>
                  </>
                )}
                {section === "Legal" && (
                  <>
                    <li className="py-2 text-sm">Claim</li>
                    <li className="py-2 text-sm">Policy</li>
                    <li className="py-2 text-sm">Terms</li>
                  </>
                )}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
}
