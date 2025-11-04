import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import {TbBrandNextjs} from "react-icons/tb"
import {SiExpress, SiMongodb} from "react-icons/si"
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { GrDatabase } from "react-icons/gr";
// import {DiRedis} from "react-icons/di"
import {FaNodeJs} from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si";
// import {BiLogoPostgresql} from "react-icons/bi"
import {motion} from "framer-motion"

const iconVariants=(duration) =>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat: Infinity,
            repeatType:'reverse',
        }
    }
})
export function Technologies(props) {
    

    return (
        <>
        <div className='border-b border-neutral-900 pb-4 lg:mb-35 flex-row'>
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className='text-blue-300 text-center my-10 text-4xl'>Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
  variants={iconVariants(2)}
  initial='initial'
  animate='animate'
  className="rounded-2xl border-4 border-neutral-800 p-4">
  <SiHtml5 className='text-6xl text-orange-500 size-8' />
</motion.div>

<motion.div 
  variants={iconVariants(3)}
  initial='initial'
  animate='animate'
  className="rounded-2xl border-4 border-neutral-800 p-4">
  <SiCss3 className='text-6xl text-blue-500 size-8' />
</motion.div>

<motion.div 
  variants={iconVariants(4)}
  initial='initial'
  animate='animate'
  className="rounded-2xl border-4 border-neutral-800 p-4">
  <SiJavascript className='text-6xl text-yellow-400 size-8' />
</motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial='initial'
            animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className='text-6xl text-cyan-400 size-8' />    
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial='initial'
            animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandNextjs className='text-6xl text-white size-8' />    
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial='initial'
            animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className='text-6xl text-green-500 size-8' />    
            </motion.div>
            <motion.div 
            variants={iconVariants(7)}
            initial='initial'
            animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className='text-6xl text-green-400 size-8' />   
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial='initial'
            animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTailwindcss className='text-6xl text-cyan-400 size-8' />   
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial='initial'
            animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiExpress className='text-6xl text-white-400 size-8' />   
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial='initial'
            animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className='text-6xl text-white-400 size-8' />   
            </motion.div>
            
            
        </motion.div>
        </div>
        
            
        </>
    )
}
export default Technologies;
