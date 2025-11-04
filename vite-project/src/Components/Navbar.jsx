import React from 'react'
import logo from '../Components/photos/logo.png'
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import { MdOutlineFileDownload } from "react-icons/md"
import resume from "./photos/RESUME.pdf"

export function Navbar(props) {
    

    return (
        <>
           <nav className='mb-20 flex items-center justify-between'>
            <div className='flex flex-shrink-0 items-center overflow-hidden text-neutral-300'>
                    <img className='w-36 ' src={logo}alt="" />
                    </div>
                    <div className='flex gap-4 px-10 text-2xl cursor-pointer text-white pr-2'>
            <a href={resume}>
            <MdOutlineFileDownload />
            </a>
            <a href="https://www.linkedin.com/in/charan-teja-goud-chinthapally-181580322">
            <FaLinkedin/>
            </a>
            <a href="https://www.linkedin.com/in/charan-teja-goud-chinthapally-181580322">
            <FaGithub/>
            </a>
            <a href="https://www.instagram.com/charan_goud_03/?hl=en">
            <FaInstagram/>
            </a>
            {/* <a href="https://x.com/charan_goud_03">
            <FaTwitter/>
            </a> */}

        </div>
                    </nav> 
        </>
    )
}
export default Navbar
