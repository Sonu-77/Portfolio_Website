import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import ContentIndex from './ContentIndex';

function Home() {
  return (
    <>
      <div className='lg:h-[100vh] lg:w-[100vw] sm:h-full sm:w-full   lg:flex lg:tracking-wider '>
        <div className='relative lg:h-[100vh] sm:h-[85vw] sm:w-full lg:w-[50vw] text-[#ffff] flex flex-col justify-center items-center ' >
          <video className="absolute top-0 left-0 sm:w-[100%] sm:h-full lg:w-[50vw] lg:h-[100vh] object-cover" autoPlay muted loop>
            <source src="./src/assets/bg-img.mp4" type="video/mp4" />
          </video>
          <div className='relative z-10 lg:w-[14vw] sm:w-[30vw] sm:h-[30vw]  lg:h-[14vw] rounded-full '>
            <img className=' lg:w-[14vw] sm:w-[30vw] sm:h-[30vw] lg:h-[14vw] rounded-full object-center object-cover' src="./src/assets/profilepic.jpeg" alt="pic" />
          </div>
          <div className='relative z-10 flex flex-col gap-1 sm:ml-[5vw] lg:ml-0'>
            <h1 className=' roboto-bold-italic lg:text-[3vw] sm:text-[5.2vw] uppercase sm:tracking-wider lg:tracking-normal'
              style={{
                backgroundImage: 'linear-gradient(to right, #FFFFFF, #B2BEB5)',
                WebkitBackgroundClip: 'text', // For Safari and Chrome
                backgroundClip: 'text', // For other browsers
                WebkitTextFillColor: 'transparent', // Makes the text transparent in Webkit-based browsers
              }}>Sonu Kachhap</h1>
            <p className='roboto-medium-italic lg:text-[1.1vw] sm:text-[3.7vw] uppercase'
            style={{
              backgroundImage: 'linear-gradient(to right, #FFFFFF, #B2BEB5)',
              WebkitBackgroundClip: 'text', // For Safari and Chrome
              backgroundClip: 'text', // For other browsers
              WebkitTextFillColor: 'transparent', // Makes the text transparent in Webkit-based browsers
            }}>Frontend Developer</p>
          </div>
          <div className='relative roboto-regular z-10 flex justify-start items-center lg:gap-[2vw] sm:gap-[4vw] lg:mt-[2vw] sm:mt-[5vw] sm:ml-[5vw] lg:ml-0 lg:mr-[3vw]'>
            <button className=' lg:w-[8vw] lg:h-[3vw] sm:w-[20vw] sm:h-[7vw] sm:text-[3vw] lg:text-[1vw] rounded-lg bg-red-400 hover:bg-zinc-500 '>Contact me</button>
            <div><a className='flex justify-center items-center lg:text-[1vw] sm:text-[3vw] gap-1 hover:text-[#d67892]' href="#">See more <FaLongArrowAltRight /> </a></div>
          </div>
        </div>
        <div className='lg:h-[100vh] sm:h-[200vw] sm:w-full lg:w-[50vw] flex flex-col '>
          <ContentIndex></ContentIndex>

        </div>
      </div>
    </>
  )
}

export default Home