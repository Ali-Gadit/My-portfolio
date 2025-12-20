"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from '@/data/data';
import { HiBars3BottomRight } from "react-icons/hi2";
// define props type
type Props ={
    openNav:()=>void
}
const Navbar=({openNav}:Props)=>{
    const [navBg,setNavBg] = useState(false)
    useEffect(()=>{ 
        const handler =()=>{
            if(window.scrollY>=90){
                setNavBg(true)
            }
            if(window.scrollY <90){
                setNavBg(false)
            }
        };
        window.addEventListener("scroll",handler)
        return()=>{
            window.removeEventListener("scroll",handler)
        }



    },[])
  return (
    <div className={`fixed ${navBg ? 'bg-[#240b39]':'fixed'} h-[12vh] z-[10]  w-full transition-all duration-200` }>
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* logo */}
        <Image
          src="/logo3.png.png"
          alt="LOGO"
          width={90}
          height={170}
          priority
          className="ml-[-1.5rem] sm:ml-[0]"
        />

        {/* nav Links */}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navLink) => {
              return (
                <Link key={navLink.id} href={navLink.url}>
                  <p
                    className="relative text-base font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px]
                    after:bg-yellow-400 text-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right"
                  >
                    {navLink.label}
                  </p>
                </Link>
              );
            })}
          </div>
          {/* button */}
          <div className="flex items-center space-x-4 ">
            <Link href="#contact">
              <button className="px-4 py-2 sm:px-6 sm:py-3 md:px-10 md:py-3 text-blue-800 font-semibold sm:text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
                Hire Me
              </button>
            </Link>
            {/* burger */}
            <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
