import React from 'react'
import skillsdata from "@/jsondatas/skillsdata.json"



function Skills() {
    return (
        <div className="lg:w-[74vw] lg:h-[120vw] relative bg-slate-500 lg:flex gap-2 lg:justify-center ">
            <div className="absolute  lg:top-[7vw] lg:left-[15vw]  lg:w-[30vw] lg:h-[5vw]  ">
                <h2
                    className="text-[2.5vw] font-bold tracking-wider uppercase lg:ml-[1vw]"
                    style={{
                        backgroundImage: "linear-gradient(to  right, #23074d,#cc5333)",
                        WebkitBackgroundClip: "text", // For Safari and Chrome
                        backgroundClip: "text", // For other browsers
                        WebkitTextFillColor: "transparent", // Makes the text transparent in Webkit-based browsers
                    }}
                >
                    Skills
                </h2>
            </div>
            <div className='absolute lg:top-[14vw] lg:w-[50vw]  lg:left-[18vw]  flex flex-wrap  gap-2  '>
                {
                    skillsdata.map((item)=>{
                        return(

                            <div key={item.id} className='lg:w-[15vw] lg:h-[15vw]  flex flex-col justify-center items-center '>
                                <div className='lg:h-[7vw] lg:w-[7vw] rounded-full border flex justify-center items-center '>
                                    <img width={55}  src={item.image} alt="pic" /> 
                                    
                                </div>
                                <h2>{item.title}</h2>
                                <div>-----------</div>
                                <p>{item.descp}</p>
                            </div>
                        )
                    })
                }

            </div>

        </div>

    )
}

export default Skills