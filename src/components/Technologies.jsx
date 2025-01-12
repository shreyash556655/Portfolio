import React from 'react'
import { FaCss3, FaHtml5 } from 'react-icons/fa'
import { SiCplusplus } from 'react-icons/si'
import { motion } from 'framer-motion'
import { DiPython } from 'react-icons/di';

const TechnologiesIcons = ({ Icon, color, x }) => {
    return (
        <motion.div
            className='rounded-2xl border-4 border-neutral-800 p-4'
            animate={{
                y: [0, -10, 10],
                transition: {
                    y: {
                        duration: x,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "reverse"
                    }
                }
            }}
        >
            <Icon className={`text-7xl ${color}`} />
        </motion.div>
    )
}

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className='my-20 text-center text-4xl'
            >
                संगणक भाषाएँ/आंकड़ा भंडार <span className='text-neutral-500'>(Languages)</span>
            </motion.h2>
            <div className='flex flex-wrap items-center justify-center gap-2'>
            <TechnologiesIcons Icon={FaHtml5} color="text-blue-600" x={2.5} />
                <TechnologiesIcons Icon={FaCss3} color="text-blue-500" x={2} />
                <TechnologiesIcons Icon={SiCplusplus} color="text-blue-500" x={3} />
                <TechnologiesIcons Icon={DiPython} color="text-blue-600" x={2.5} />
            </div>
        </div>
    )
}

export default Technologies