import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Projects() {
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
          My Latest Projects
        </h2>
      </div>
      <div className=" absolute lg:h-[30vw] lg:w-[30vw] bg-teal-500 lg:top-[5vw] left-[16vw] rounded-2xl mt-[10vw] ">
        <div className="lg:h-[20vw] lg:w-[30vw] group flex justify-center items-center rounded-2xl bg-black ">
          <img
            className="lg:h-[20vw] lg:w-[30vw] bg-cover rounded-2xl  transition-all duration-600 ease group-hover:h-[19vw] group-hover:w-[29vw]   "
            src="https://images.pexels.com/photos/355762/pexels-photo-355762.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="pic"
          />
        </div>
        <div className="flex justify-between items-center mt-[2vw] ">
          <div className="lg:h-[4vw] lg:w-[23vw]  lg:ml-[1vw] ">
            <h3 className="uppercase">title</h3>
            <p>Descption</p>
          </div>
          <div className="lg:h-[3vw] lg:w-[3vw] rounded-full bg-lime-600 flex justify-center items-center lg:mr-[1vw] ">
            <a href="#">
              <FaArrowRightLong />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
