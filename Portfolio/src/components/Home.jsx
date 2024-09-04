import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import ContentIndex from './ContentIndex';

function Home() {
  return (
    <>
    <div className='h-[100vh] w-[100vw]  flex tracking-wider '>
        <div className='relative h-[100vh] w-[50vw]  text-[#ffff] flex flex-col justify-center items-center align-baseline ' >
          <video className="absolute top-0 left-0 w-[50vw] h-[100vh] object-cover" autoPlay muted loop>
            <source src="./src/assets/bg-img.mp4" type="video/mp4" />              
          </video>
          <div className='relative z-10 w-[14vw] h-[14vw] rounded-full '>
            <img className=' w-[14vw] h-[14vw] rounded-full object-center object-cover' src="./src/assets/profilepic.jpeg" alt="pic" />
          </div>
          <div className='relative z-10 flex flex-col gap-1'>
            <h1 className=' text-[3vw] '>Sonu Kachhap</h1>
            <p className='text-[1.1vw]'>I am a Frontend Developer</p>
          </div>
          <div className='relative z-10 flex justify-start items-center gap-[2vw] mt-[2vw] mr-[3vw]'>
            <button className=' w-[8vw] rounded-lg h-[3vw] bg-red-400 hover:bg-zinc-500 '>Contact me</button>
            <div><a className='flex justify-center items-center text-[1vw] gap-1 hover:text-[#d67892]' href="#">See more <FaLongArrowAltRight /> </a></div>
          </div>
        </div>
        <div className='h-[100vh] w-[50vw] flex flex-col   bg-sky-500 '>
        <ContentIndex></ContentIndex>
        
        </div>
    </div>
    </>
  )
}

export default Home