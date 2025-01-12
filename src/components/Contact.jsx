import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return ( <div className='borber-b border-neutral-800 pb-20'>
    <motion.h2
     whileInView={{opacity:1, y:0}}
     initial={{opacity:0, y:-100}}
     transition={{duration:1}}
    className='my-10 text-center text-4xl'>संपर्क <span className='text-neutral-500'>(Get in Touch)</span></motion.h2>
    <div className='text-center tracking-tighter'>
        <motion.p
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x:-100}}
         transition={{duration:0.5}}
        className='my-4'>
            Vyankatesh Nagar, Jalna - 431203
        </motion.p>
        <motion.p 
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x:100}}
         transition={{duration:0.5}}
        className='my-4'>+91 9156474904</motion.p>
        <a href='mailto: vihan.rg@gmail.com' className='border-b'>
                 vihan.rg@gmail.com 
        </a>
    </div>
  </div>
  )
}

export default Contact