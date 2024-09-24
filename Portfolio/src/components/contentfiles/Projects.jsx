import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Projects() {
  return (
    <div className="lg:w-[74vw] lg:h-[100%] relative lg:flex gap-2 lg:justify-center "
    style={{
      background: `linear-gradient(to right,#93A5CF,#E4EfE9 50%,#ffffff 100%)`,
    }}>
      <div className="absolute  lg:top-[7vw] lg:left-[15vw]  lg:w-[40vw] lg:h-[5vw]  ">
        <h2
          className="text-[2.5vw] font-bold tracking-wider uppercase lg:ml-[1vw]"
          style={{
            backgroundImage: "linear-gradient(to  right,#09203F ,#537895)",
            WebkitBackgroundClip: "text", // For Safari and Chrome
            backgroundClip: "text", // For other browsers
            WebkitTextFillColor: "transparent", // Makes the text transparent in Webkit-based browsers
          }}
        >
          My Latest Projects
        </h2>
      </div>
      <div className=" absolute lg:top-[11vw] lg:left-[15.4vw] lg:w-[29.5vw] lg:h-[0.2vw] rounded-3xl lg:ml-[0.5vw] lg:mb-[4vw] "
          style={{
            background: `linear-gradient(to right,#D3CCE3,#007991,#764BA2 ,#E9E4F0)`,
          }}></div>
      <div className="absolute lg:top-[5vw] left-[16vw] flex gap-[2vw] ">

        <div className="lg:h-[30vw] lg:w-[24vw] rounded-2xl mt-[10vw] ">
          <div className="lg:h-[20vw] lg:w-[24vw] group flex justify-center items-center rounded-2xl ">
            <img
              className="lg:h-[20vw] lg:w-[24vw] bg-cover rounded-2xl  transition-all duration-600 ease group-hover:h-[19vw] group-hover:w-[23vw]   "
              src="https://images.pexels.com/photos/355762/pexels-photo-355762.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="pic"
            />
          </div>
          <div className="lg:h-[10vw] lg:w-[24vw] rounded-2xl flex justify-between items-center bg-amber-600 ">
            <div className="lg:h-[4vw] lg:w-[23vw]  lg:ml-[1vw] ">
              <h3 className="uppercase">title</h3>
              <p>Descption</p>
            </div>
            <div className="lg:h-[3.5vw] lg:w-[4vw] text-[1.5vw] rounded-full  bg-lime-600 flex justify-center items-center lg:mr-[1vw] transition-all duration-300  ease lg:hover:h-[4.5vw] lg:hover:w-[5.5vw] ">
              <a href="#">
                <FaArrowRightLong />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;










