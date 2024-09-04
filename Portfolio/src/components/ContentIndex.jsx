import React from 'react'
import contentdata from '/src/jsondatas/contentdata.json'


function ContentIndex() {
    let datas = contentdata


    return (
        <>
            {
                datas.map((data)=>{
                    return(

                        <div key={data.id} className={`relative flex h-[100%] w-[100%] group pl-[2vw] justify-start gap-[1vw] items-center   ${data.bgcolor} overflow-hidden`}>
                            <div className='w-[9vw] h-[9vw] flex justify-center items-center rounded-full'>
                                <img className='w-[6vw] h-[6vw] group-hover:w-[8vw] group-hover:h-[8vw] transition-all duration-300 ease-in-out  rounded-full object-cover object-center' src={data.image} alt="pic" />
                            </div>
                            <h2 className='font-bold text-[1.3vw] tracking-wider '>{data.title}</h2>
                            <div className={`w-[7vw] h-[7vw] group-hover:w-[8vw] group-hover:h-[8vw] transition-all duration-300  z-10 bg-[${data.ringcolor}] absolute -right-[1.4vw] -top-[1vw] rounded-full`} ></div>
                            <div className={`w-[10vw] h-[10vw] group-hover:w-[11vw] group-hover:h-[11vw] transition-all duration-300 ${data.bgcolor} absolute -right-[2vw] -top-[1.8vw] rounded-full `}></div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ContentIndex