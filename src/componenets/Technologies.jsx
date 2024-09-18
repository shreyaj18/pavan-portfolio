import { FaPython } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { PiNetwork } from "react-icons/pi";

import { animate, motion } from "framer-motion"
import { FaHtml5 } from "react-icons/fa";

const  iconVariants = (duration) =>({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition : {
      duration :duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    },
  },
})



function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <motion.div 
           whileInView={{opacity: 1, x: 0}}
           initial={{opacity:0, x: -100}}
           transition={{duration:1.5}}
          className="flex flex-wrap items-center justify-center gap-4 ">
          <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPython className="text-7xl text-blue-400"/>
          </motion.div>
          

          <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJava className="text-7xl text-yellow-400"/>
          </motion.div>

          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate" 
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl text-blue-400"/>
          </motion.div>

          

          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate" 
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <PiNetwork className="text-7xl text-white"/>
          </motion.div>
          
          <motion.div
            variants={iconVariants(4.5)}
            initial="initial"
            animate="animate"
           className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className="text-7xl text-red-600"/>
          </motion.div>
        
          <motion.div 

            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
              
            className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaCss3Alt className="text-7xl text-yellow-500"/>
          </motion.div>

          





        </motion.div>
    </div>
  )
}

export default Technologies