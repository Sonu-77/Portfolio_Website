import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function InsideContentSpace({ data }) {
    return (
        <div className='relative'>
            <div className='lg:h-[47.5vw] lg:w-[25vw]  bg-[#a93456] fixed lg:right-[1vw] lg:top-[1vw] rounded-xl  lg:flex lg:flex-col lg:items-center '>
                <div className='lg:h-[40vw] lg:w-[22vw] lg:mt-[2vw] lg:border-b-[0.06vw]  lg:border-[#000000]  lg:flex lg:flex-col lg:items-end lg:justify-between '>
                    <div className='lg:text-[2vw] lg:h-[3vw] lg:w-[3vw] flex justify-center items-center lg:hover:text-[3vw]  ' >
                        <RxCross2 />
                    </div>
                    <div className='lg:h-[26vw] lg:w-[10vw] lg:mb-[1vw]  lg:flex lg:flex-col lg:justify-between lg:items-center '>
                        <div className='lg:h-[15vw] lg:w-[10vw]  lg:pt-[2vw]  '>
                            <h2 className='rotate-[270deg] lg:h-[5vw] lg:w-[12vw] lg:pl-1 lg:pt-3 lg:tracking-wider lg:mt-[4vw] uppercase text-[#ffff]  roboto-medium lg:text-[2vw] '>About Me</h2>
                        </div>
                        {
                            data.map((item) => {
                                return (
                                    item.id == 1 && (<div className='lg:w-[9vw] lg:h-[9vw] sm:w-[27vw] sm:h-[27vw] flex justify-center items-center rounded-full'>
                                        <img className='lg:w-[6vw] lg:h-[6vw] sm:w-[23vw] sm:h-[23vw] lg:group-hover:w-[8vw] sm:group-hover:w-[27vw] sm:group-hover:h-[27vw] lg:group-hover:h-[8vw] transition-all duration-300 ease-in-out  rounded-full object-cover object-center' src={item.image} alt="pic" />
                                    </div>)
                                )
                            })
                        }
                    </div>
                </div>
                <div className='lg:flex lg:h-[5vw] lg:w-[22vw]  lg:justify-between text-[#fff]'>
                    <div className='lg:flex lg:justify-center lg:items-center lg:gap-[1vw]'>
                        <FaChevronLeft />
                        <h3>Blog</h3>
                    </div>
                    <div className='lg:flex lg:justify-center  lg:items-center lg:gap-[1vw]'>
                        <h3>Service</h3>
                        <FaChevronRight />
                    </div>
                </div>
            </div>
            <div className='lg:w-[74vw] lg:h-[100vw] bg-[#44f470] lg:flex lg:justify-center  '>
                <h2 className='lg:mt-[10vw] lg:text-[2vw] roboto-bold-italic uppercase '>The content for each index </h2>
            </div>
            

        </div>
    )
}

export default InsideContentSpace