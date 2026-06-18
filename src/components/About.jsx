import React from 'react'
import aboutImg from "../assets/about1.jpg";
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0}}
        initial= {{opacity:0, y: -100}}
        transition={{ duration: 0.5 }}
        >
            About
            <span className="text-neutral-500"> Me</span>
        </motion.h1>
        <div className="flex flex-wrap">
            <motion.div 
            className="w-full lg:w-1/2 lg:p-8"
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 0.5}}
            >
                <div className="flex items-center justify-center">
                    <img 
                    className="rounded-2xl" 
                    src={aboutImg} 
                    alt="about" 
                    width={450}
                    height={450}
                    />
                </div>
            </motion.div>
            <motion.div 
            className="w-full lg:w-1/2"
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 0.5}}
            >
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}
