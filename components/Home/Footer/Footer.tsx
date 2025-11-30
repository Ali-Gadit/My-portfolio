import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715]'>
        <div>
            <Image src="/logo3.png.png" alt='LOGO' width={180} height={180} className='mx-auto'/>
        </div>
        <div className='flex flex-wrap justify-center gap-x-8 gap-y-4 text-white mt-8'>
           <Link href="#" className='relative after:h-[3px] after:bg-yellow-400 after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right'>Home</Link>
           <Link href="#services" className='relative after:h-[3px] after:bg-yellow-400 after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right'>Services</Link>
           <Link href="#projects" className='relative after:h-[3px] after:bg-yellow-400 after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right'>Projects</Link>
           <Link href="#reviews" className='relative after:h-[3px] after:bg-yellow-400 after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right'>Reviews</Link>
           <Link href="#contact" className='relative after:h-[3px] after:bg-yellow-400 after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right'>Contact</Link>
        </div>
        
        {/* Social Media Links */}
        <div className='flex justify-center gap-6 mt-8'>
            <Link href="https://www.linkedin.com/in/muhammad-ali-gadit/" target='_blank' className='text-white hover:text-blue-400 transition-colors duration-300'>
                <FaLinkedin size={24} />
            </Link>
            <Link href="https://x.com/Ali__Gadit" target='_blank' className='text-white hover:text-blue-400 transition-colors duration-300'>
                <FaTwitter size={24} />
            </Link>
            <Link href="https://github.com/Ali-Gadit" target='_blank' className='text-white hover:text-gray-400 transition-colors duration-300'>
                <FaGithub size={24} />
            </Link>
        </div>

        <p className='text-white text-opacity-60 mt-6 text-center'>
          &copy; {new Date().getFullYear()} My Personal Portfolio. All Rights Reserved.
        </p>
      
    </div>
  )
}

export default Footer
