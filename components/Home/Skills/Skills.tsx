import React from 'react'
import SectionHeading from '../Helper/SectionHeading'
import { skillsData } from '@/data/data'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715]' id='skills'>
        <SectionHeading>My Skills</SectionHeading>
        <div className='mt-20 w-[80%] mx-auto grid grid-cols-1
         sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          xl:grid-cols-5 gap-4'>
            {skillsData.map((skill,i)=>{
                return ( <div data-aos="flip-left" data-aos-delay={`${i*150}`} data-aos-anchor-placement="top-center" key={skill.id} className='h-full'>
                    <SkillCard skill={skill}/>

                </div>
                );
            })}
          </div>
      
    </div>
  )
}

export default Skills
