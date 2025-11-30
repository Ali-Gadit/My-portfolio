import React from 'react'
import SectionHeading from '../Helper/SectionHeading'
import { aboutInfo } from '@/data/data'
import { FaCheck } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]' id='about'>
        <SectionHeading>About Me</SectionHeading>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20'>
            {/* Text content */}
            <div  data-aos="fade-left" data-aos-anchor-placement="top-center">
                <h1 className='bg-gradient-to-r from-[#8750f7] bg-clip-text text-transparent   to-[#ffffff] text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold   '>{aboutInfo.title}</h1>
            <p className='mt-6 text-base text-gray-500'>{aboutInfo.description}</p>
            
<div className='mt-8'>
    <div className='flex items-center space-x-2 mb-6'>
        <div className='w-7 h-7 bg-blue-800 rounded-lg flex flex-col items-center justify-center'>
            <FaCheck className='text-white' />
        </div>
        <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>Frontend Developer</p>

    </div>
    <div className='flex items-center space-x-2 mb-6'>
        <div className='w-7 h-7 bg-blue-800 rounded-lg flex flex-col items-center justify-center'>
            <FaCheck className='text-white' />
        </div>
        <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>Agentic AI Developer</p>

    </div>

    </div>        
    </div>
    {/*Stats COntent */}
    <div  data-aos="zoom-in" data-aos-delay="105" data-aos-anchor-placement="top-center" className='grid grid-cols-2 gap-16 items-center lg:mx-auto'>
        {/* 1st stat */}
        <div>
            <Image
            src="/customer.png"
            alt="image"
            width={80}
            height={80}
            className='mx-auto'
             />
             <p className='mt-3 font-bold text-xl text-white text-center'>{aboutInfo.client}</p>
        </div>
        {/* 2nd stat */}
        <div>
            <Image
            src="/experience.png"
            alt="image"
            width={80}
            height={80}
            className='mx-auto'
             />
             <p className='mt-3 font-bold text-xl text-white text-center'>{aboutInfo.experience}</p>
        </div>
        {/* 3rd stat */}
        <div>
            <Image
            src="/completed.png"
            alt="image"
            width={80}
            height={80}
            className='mx-auto'
             />
             <p className='mt-3 font-bold text-xl text-white text-center'>{aboutInfo.projects}</p>
        </div>
        {/* 4th stat */}
        <div>
            <Image
            src="/rocket.png"
            alt="image"
            width={80}
            height={80}
            className='mx-auto'
             />
             <Link href={aboutInfo.website} target='_blank' className='mt-3 font-bold text-xl text-[#8750f7] text-center block hover:underline'>CodeVerse Innovations</Link>
        </div>

    </div>
        </div>
    </div>
  )
}

export default About
