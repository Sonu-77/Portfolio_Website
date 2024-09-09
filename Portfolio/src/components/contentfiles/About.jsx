import React from 'react'

function About() {
    return (
        <>
        <div className='flex flex-col gap-[3vw] lato-regular text-[#ffff]'>
            <div className='flex '>

                <div className='lg:w-[30vw] lg:h-[15vw] lg:p-[1vw] rounded-lg bg-[#0b4892] lg:mt-[10vw] '>

                    <p className='text-[1.4vw]' >
                    Hi, I'm Sonu Kachhap, a frontend developer from Jharkhand, currently pursuing my studies at University of Mysore. I have a deep passion for web development and a strong desire to create visually appealing and highly functional websites.
                    </p>
                </div>
                <div className='lg:mt-[10vw]'><h2> career Intro</h2></div>
            </div>

            <div className=' relative lg:w-[55vw] lg:h-[21vw] items-center'>


                <div className='lg:w-[30vw] lg:h-[21vw] lg:p-[1vw] rounded-lg bg-[#0b4892] absolute right-0 '>

                    <p className='text-[1.4vw]'>
                    My journey in frontend development began with a fascination for how design and code come together to create user-friendly experiences. I enjoy the challenge of translating complex ideas into simple, intuitive interfaces. With a solid foundation in HTML, CSS, and JavaScript, I also explore modern tools and frameworks like React.js to stay at the forefront of web development.
                    </p>
                </div>
            </div>

            <div className='flex '>

                <div className='lg:w-[30vw] lg:h-[12vw] lg:p-[1vw] rounded-lg bg-[#0b4892]  '>

                    <p className='text-[1.4vw]' >
                    Traveling: Exploring new places and cultures, always seeking new adventures and experiences.
                    </p>
                </div>
                <div className=''><h2> Hobbies</h2></div>
            </div>

            
            <div className='lg:w-[30vw] lg:h-[13vw] lg:p-[1vw] rounded-lg bg-[#0b4892] lg:ml-[20vw] '>

                <p className='text-[1.4vw]'>
                Sports: Playing and enjoying sports like football, volleyball, basketball, and badminton.

                </p>
            </div>
        </div>
        </>



    )
}

export default About