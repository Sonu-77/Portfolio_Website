import React from 'react'
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";

function InsideContentSpace({ data }) {
    return (
        <div className='relative '>
            <div className='lg:h-[47.5vw] lg:w-[25vw] sm:h-[40vw] sm:w-[94vw] fixed sm:ml-[3vw] lg:right-[1vw]   lg:top-[1vw] rounded-xl sm:flex lg:flex lg:flex-col lg:items-center overflow-hidden '
                style={{ background: `linear-gradient(to left,${data.from},${data.to})` }}
            >

                <div className={`lg:w-[14vw] sm:w-[28vw] lg:h-[14vw] sm:h-[28vw]  z-10 absolute lg:-right-[4vw] sm:-right-[3vw] sm:-top-[3vw] lg:-top-[1.3vw] rounded-full`}
                    style={{ background: `linear-gradient(to left,${data.from},${data.to})` }}>

                </div>
                <div className={`lg:w-[16vw] lg:h-[16vw] opacity-[0.4] sm:h-[35vw] sm:w-[35vw]  transition-all duration-300 absolute lg:-right-[4vw] lg:-top-[1.8vw] sm:-right-[3vw] sm:-top-[3vw] rounded-full `}
                    style={{ background: `linear-gradient(to top,${data.from},${data.to})` }}>
                </div>

                <div className='lg:h-[40vw] sm:h-[35vw] sm:w-full bg-[#b12345]  lg:w-[22vw] group lg:mt-[2vw] sm:mt-[3vw] lg:border-b-[0.06vw]  lg:border-[#cfd9df] flex flex-col lg:items-end lg:justify-between '>
                        <div className='lg:text-[1.6vw] sm:text-[5vw] z-20  lg:h-[3vw] lg:w-[3vw] flex justify-center items-center lg:group-hover:text-[2.4vw] text-[#cfd9df] transition-all duration-300 ease-in-out sm:absolute lg:relative sm:right-[4vw] lg:pl-[5vw] ' >
                    <Link to={"/"}>
                            <VscChromeClose />
                    </Link>
                        </div>
                    <div className='lg:h-[26vw] lg:w-[10vw] lg:mb-[1vw]  lg:flex lg:flex-col lg:justify-between lg:items-center '>
                        <div className='lg:h-[15vw] lg:w-[10vw]  lg:pt-[2vw]  '>
                            <h2 className='rotate-[270deg] lg:h-[5vw] lg:w-[12vw] lg:pl-1 lg:pt-3 lg:tracking-widest lg:mt-[4vw] uppercase text-[#ffff]  roboto-medium lg:text-[2vw] '>
                                {data.title}
                            </h2>
                        </div>
                        <div className='lg:w-[9vw] lg:h-[9vw] sm:w-[27vw] sm:h-[27vw] flex justify-center items-center rounded-full'>
                            <img className='lg:w-[6vw] lg:h-[6vw] sm:w-[23vw] sm:h-[23vw] rounded-full object-cover object-center' src={data.image} alt="pic" />
                        </div>
                    </div>
                </div>
                <div className='lg:flex lg:h-[5vw] lg:w-[22vw]  lg:justify-between text-[#fff]'>
                    <div className='lg:flex lg:justify-center lg:items-center lg:gap-[1vw]'>
                        <FaChevronLeft />
                        <Link to={`/${data.left}`}><h3 className='uppercase lg:text-[1vw] lg:tracking-wide  '>{data.left}</h3></Link>
                    </div>
                    <div className='lg:flex lg:justify-center  lg:items-center lg:gap-[1vw]'>
                    <Link to={`/${data.right}`}><h3 className='uppercase lg:text-[1vw] lg:tracking-wide  '>{data.right}</h3></Link>
                        <FaChevronRight />
                    </div>
                </div>
            </div>
            <div className='lg:w-[74vw] lg:h-[100vw] bg-[#999c9a] lg:flex lg:justify-center  '>
                <h2 className='lg:mt-[10vw] lg:text-[2vw] roboto-bold-italic uppercase '>The content for {data.title} </h2>
            </div>


        </div>
    )
}

export default InsideContentSpace