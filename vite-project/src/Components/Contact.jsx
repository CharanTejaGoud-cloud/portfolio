import React from 'react'
import {motion} from 'framer-motion'
import resume from "./photos/RESUME.pdf"

export function Contact(props) {
    

    return (
        <>
           <motion.div 
           whileInView={{opacity:1,y:0}}
           initial={{opacity:0,y:-100}}
           transition={{duration:1.5}}
           className="border-b border-neutral-900 pb-10 justify-center items-center flex">
            <motion.h2 
            className='my-2 text-center text-4xl'>Get in Touch</motion.h2>
            </motion.div> 
            <motion.div 
           whileInView={{opacity:1,y:0}}
           initial={{opacity:0,y:-100}}
           transition={{duration:1.5}}
           className="border-b border-neutral-900 pb-2 justify-center items-center flex">

            <a className='bg-white px-2 py-3 mb-5 text-black rounded-xl text-center items-center ' href={resume}>
                Download CV
            </a>
           </motion.div>

            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1,delay:0.5}}
            className='text-center tracking-tighter mt-3'>
                <a href="#" className='border-b my-4'>charangoudchinthapalli@gmail.com</a>
                <motion.p className='my-2'>20-91/1/A R.B Nagar Shamshabad</motion.p>
                <motion.p
                 whileInView={{opacity:1,x:0}}
                 initial={{opacity:0,x:200}}
                 transition={{duration:1.5,delay:1}}
                >Contact: +91: 6302017977</motion.p>
                {/* <a href="#" className='border-b'>charangoudchinthapalli@gmail.com</a> */}
            </motion.div>
        </>
    )
}
export default Contact
