import React from 'react'
// import photo from '../Components/photos/Aboutimage.png'
import coverimage from '../Components/photos/cover.png'
import {motion} from 'framer-motion'


export function About(props) {
    

    return (
        <>
         <div className='border-b border-neutral-900 pb-4 lg:mb-35 pt-10'>
            <h2 className='text-blue-300 text-center text-2xl pb-2'>About Me</h2>
            <div className='flex flex-wrap'>
                <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:0.5}}
                className='w-full lg:w-1/2 lg:p-8'>
                <div className=' items-center  justify-center  '>
                    <img className='rounded-2xl h-72 ' src={coverimage} alt="" />
                </div>
                </motion.div>
                <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:0.5}}
                className="w-full lg:w-1/2 ">
                <div className=" flex justify-center lg:justify-center">
                    <p className='my-4 max-w-xl py-6 mr-4'>I am a B.Tech student at Sri indu college of engineering and technology, pursuing Information Technology. Alongside my core academic studies, I have a keen interest in web development and technology. I enjoy exploring the world of programming, learning new tools, and building projects that solve real-world problems.

My journey in tech started with curiosity about how systems and applications work, and it has grown into a passion for creating innovative solutions. I thrive on learning, adapting to new challenges, and collaborating with others to bring creative ideas to life. Outside of academics, I love exploring new technologies, staying updated on trends, and finding inspiration for personal and professional growth.
                    </p>
                </div>
                </motion.div>
            </div>
            </div>
        </>
    )
}
export default About ;
