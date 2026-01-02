import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb, SiLaravel, SiMysql, SiTypescript, SiPhp } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

export const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                className="my-20 text-center text-4xl"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
            >
                Technologies
            </motion.h1>

            <motion.div
                className="flex flex-wrap items-center justify-center gap-4"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
            >

                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>


                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                >
                    <SiLaravel className="text-7xl text-red-600" />
                </motion.div>

                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    variants={iconVariants(4.5)}
                    initial="initial"
                    animate="animate"
                >
                    <SiMysql className="text-7xl text-blue-500" />
                </motion.div>

                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    variants={iconVariants(5.5)}
                    initial="initial"
                    animate="animate"
                >
                    <SiTypescript className="text-7xl text-blue-600" />
                </motion.div>

                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                >
                    <SiPhp className="text-7xl text-purple-600" />
                </motion.div>

            </motion.div>
        </div>
    )
}
