import React from "react";
import ProjectSlideSection from "./ProjectSlideSection";
import './About.css'



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
        }}>
        <div className="lg:w-[01vw] lg:h-[0.2vw] rounded-full bg-white absolute  animate-moveProject custom-shadow-project "
          style={{
            background: `linear-gradient(to right,#ffffff,#0083B0,#00B4DB,#ffffff)`,
          }}></div>
      </div>
      <div className="absolute lg:h-[32vw] lg:w-[50vw] lg:top-[15vw] left-[16vw] flex gap-[2vw] justify-center items-center  ">
          <ProjectSlideSection></ProjectSlideSection>
      </div>
      
    </div>
  );
}

export default Projects;










