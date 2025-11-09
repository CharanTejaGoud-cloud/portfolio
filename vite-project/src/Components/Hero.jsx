import React from 'react'
import coverimage from '../Components/photos/cover.png'
import { motion } from "framer-motion"

export function Hero(props) {

    const container=(delay)=>({
        hidden:{x:-100,opacity:0},
        visible:{
            x:20,
            opacity:1,
            transition:{
                duration:0.5,
                delay:delay
            }
        }
    })
    

    return (
        <>
           <div className='border-b border-neutral-900 pb-4 lg:mb-35  '>
            <div className='flex flex-wrap '>
            <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg-text-9xl font-poppins '>Charan teja Goud</motion.h1>
            <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-800 bg-clip-text  tracking-tight text-transparent font-poppins '>Full Stack Developer</motion.span>
                <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className='my-2 max-w-xl py-6 font-light tracking-tighter '>Hi, I’m a Full stack developer who loves building full-stack web applications. I enjoy creating intuitive and responsive user interfaces with React, designing robust back-end systems using Node.js and Express, and working with MongoDB to handle data effectively. Whether it’s solving problems, improving performance, or collaborating with others to bring ideas to life, I’m passionate about creating web solutions that make a real impact. I’m always eager to learn new technologies and stay up-to-date with the latest industry trends. When I’m not coding, I enjoy exploring creative ideas and finding inspiration for future projects..</motion.p>
                </div>
                </div>    
            {/* <div className='w-full lg:w-1/6 lg:p-6 '>
            <div className='flex justify-between w-96 pb-8 '>
                <motion.img 
                initial={{x:100,opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{duration:0.5,delay:1.2}}
                className='rounded-2xl max-w-lg h-96 ' src={coverimage} alt="" />
                </div> 
            </div> */}
            
            </div>
            </div>
        </>
    )
}
export default Hero
