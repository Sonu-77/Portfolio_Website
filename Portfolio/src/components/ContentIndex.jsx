import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import contentdata from '/src/jsondatas/contentdata.json'


function ContentIndex() {
    let datas = contentdata

    let handleClick = (e) => {
        console.log(e.target.innerText)
    }


    return (
        <>


            {
                datas.map((data) => {
                    return (


                        <div key={data.id} onClick={handleClick} className={`relative flex lg:h-[100%] sm:h-[50vw] sm:w-[100%] lg:w-[100%] group lg:pl-[2vw] sm:pl-[4vw] justify-start lg:gap-[1vw] sm:gap-[3vw] items-center overflow-hidden`}
                            style={{ background: `linear-gradient(to right,${data.from},${data.to})` }}
                        >
                            <div className='lg:w-[9vw] lg:h-[9vw] sm:w-[27vw] sm:h-[27vw] flex justify-center items-center rounded-full'>
                                <img className='lg:w-[6vw] lg:h-[6vw] sm:w-[23vw] sm:h-[23vw] lg:group-hover:w-[8vw] sm:group-hover:w-[27vw] sm:group-hover:h-[27vw] lg:group-hover:h-[8vw] transition-all duration-300 ease-in-out  rounded-full object-cover object-center' src={data.image} alt="pic" />
                            </div>
                            <h2 className='roboto-medium lg:text-[1.3vw] sm:text-[4.5vw] text-[#ffff] tracking-wider uppercase '>{data.title}</h2>
                            <div className={`lg:w-[7vw] sm:w-[28vw] lg:h-[7vw] sm:h-[28vw] lg:group-hover:w-[8vw] lg:group-hover:h-[8vw] sm:group-hover:w-[25vw] sm:group-hover:h-[25vw] transition-all duration-300  z-10 absolute lg:-right-[1.4vw] sm:-right-[3vw] sm:-top-[3vw] lg:-top-[1vw] rounded-full`}
                                style={{ backgroundColor: `${data.to}` }}></div>
                            <div className={`lg:w-[10vw] lg:h-[10vw] sm:h-[35vw] sm:w-[35vw] lg:group-hover:w-[11vw] lg:group-hover:h-[11vw] sm:group-hover:w-[32vw] sm:group-hover:h-[32vw] transition-all duration-300 absolute lg:-right-[2vw] lg:-top-[1.8vw] sm:-right-[3vw] sm:-top-[3vw] rounded-full `}
                                style={{ background: `linear-gradient(to right,${data.from},${data.to})` }}></div>
                        </div>



                    )
                })
            }

        </>
    )
}

export default ContentIndex