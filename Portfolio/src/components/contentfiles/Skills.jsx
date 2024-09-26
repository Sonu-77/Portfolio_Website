import React from 'react'
import skillsdata from "@/jsondatas/skillsdata.json"
import './About.css'



function Skills() {
    return (
        <div className="lg:w-[74vw] lg:h-[126vh] relative bg-[#EDF1F4] lg:flex gap-2 lg:justify-center "
        style={{
            background: `linear-gradient(to right,#274060,#FFFFFF)`,
          }}>
            <div className="absolute  lg:top-[7vw] lg:left-[15vw]  lg:w-[30vw] lg:h-[5vw]  ">
                <h2
                    className="text-[2.5vw] font-bold tracking-wider uppercase lg:ml-[1vw]"
                    style={{
                        backgroundImage: "linear-gradient(to right, #09203F,#537895)",
                        WebkitBackgroundClip: "text", // For Safari and Chrome
                        backgroundClip: "text", // For other browsers
                        WebkitTextFillColor: "transparent", // Makes the text transparent in Webkit-based browsers
                    }}
                >
                    Skills
                </h2>
            </div>
            <div className=" absolute lg:top-[11vw] lg:left-[15.4vw] lg:w-[10vw] lg:h-[0.2vw] rounded-3xl lg:ml-[0.5vw] lg:mb-[4vw] "
          style={{
            background: `linear-gradient(to right,#D3CCE3,#007991,#78ffd6,#E9E4F0)`,
          }}>
            <div className="lg:w-[01vw] lg:h-[0.2vw] rounded-full absolute  animate-moveSkills custom-shadow-about "
              style={{
              background: `linear-gradient(to right,#ffffff,#0083B0,#00B4DB,#ffffff)`,
            }}></div>
          </div>
            <div className='absolute lg:top-[14vw] lg:w-[50vw]  lg:left-[18vw]  flex flex-wrap  gap-5  '>
                {
                    skillsdata.map((item)=>{
                        return(

                            <div key={item.id} className='lg:w-[15vw] lg:h-[15vw] group  flex flex-col justify-center items-center shadow-md '>
                                <div className='lg:h-[7vw] lg:w-[7vw] rounded-full  flex justify-center items-center shadow-lg '
                                style={{
                                    background: `linear-gradient(to right,#ffffff,#0083B0,#ffffff)`,
                                }}>
                                    <img width={55}  src={item.image} alt="pic" className='shadow-md group-hover:animate-rotate360 ' /> 
                                    
                                </div>
                                <h2 className='lg:mt-3  lato-black tracking-wider text-[1vw] '>{item.title}</h2>
                                <div className='text-[#0083B0]'>----------------</div>
                                <p className='text-[0.7vw] capitalize '>{item.descp}</p>
                            </div>
                        )
                    })
                }

            </div>

        </div>

    )
}

export default Skills