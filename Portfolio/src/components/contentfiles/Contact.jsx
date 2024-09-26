import React from "react";
import "./Contact.css";
import './About.css'

function Contact() {
  return (
    <>
      <div
        className="lg:w-[74vw] lg:h-[100vh] relative"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/9668534/pexels-photo-9668534.jpeg?auto=compress&cs=tinysrgb&w=2400")`,
          backgroundSize: "cover",
        }}
      >
        <div className="sm:w-full  lg:w-[50vw] lg:h-[30vw] sm:h-[105vw] lg:pl-[12vw] mt-[8vw] ml-[5vw] ">
          <div className="lg:mt-[7vw] lg:w-[25vw] lg:h-[5vw] lg:mb-[1vw]  ">
            <h2
              className="text-[2.5vw] font-bold tracking-wider uppercase lg:ml-[1vw]"
              style={{
                backgroundImage: "linear-gradient(to  right, #bdc3c7,#2c3e50)",
                WebkitBackgroundClip: "text", // For Safari and Chrome
                backgroundClip: "text", // For other browsers
                WebkitTextFillColor: "transparent", // Makes the text transparent in Webkit-based browsers
              }}
            >
              Contact Me
            </h2>
          </div>
          <div className=" absolute lg:top-[11vw] lg:left-[17.5vw] lg:w-[17.3vw] lg:h-[0.2vw] rounded-3xl lg:ml-[0.5vw] lg:mb-[4vw] lg:mt-[0.5vw] "
          style={{
            background: `linear-gradient(to right,#D3CCE3,#007991,#78ffd6,#E9E4F0)`,
          }}>
            <div className="lg:w-[01vw] lg:h-[0.2vw] rounded-full bg-white absolute  animate-moveContact custom-shadow-about "
              style={{
              background: `linear-gradient(to right,#ffffff,#0083B0,#00B4DB,#ffffff)`,
            }}></div>
          </div>
          <div className="lg:mt-[4vw]">
            <form
              className="lato-regular sm:flex sm:w-[90vw] lg:w-[30vw]  sm:ml-[5vw] sm:flex-col sm:justify-center sm:items-center sm:gap-[4vw] lg:gap-[1.5vw]"
              action=""
            >
              <input
                className="custom-shadow lg:h-[3.5vw] capitalize  sm:w-full sm:h-[12vw] sm:pl-[4vw] placeholder:font-bold placeholder:sm:text-[#000000] sm:placeholder:pl-[2vw] lg:placeholder:pl-[0.01vw]  outline-none rounded-md"
                required
                type="text"
                name="name"
                placeholder="Your Name"
              />
              <input
                className="custom-shadow lg:h-[3.5vw]  sm:w-full sm:h-[12vw] sm:pl-[4vw] placeholder:font-bold placeholder:sm:text-[#000000] sm:placeholder:pl-[2vw] lg:placeholder:pl-[0.01vw]  outline-none rounded-md"
                required
                type="number"
                name="Phone number"
                placeholder="Phone Number"
              />
              <input
                className="custom-shadow lg:h-[3.5vw]  sm:w-full sm:h-[12vw] sm:pl-[4vw] placeholder:font-bold placeholder:sm:text-[#000000] sm:placeholder:pl-[2vw] lg:placeholder:pl-[0.01vw]  outline-none rounded-md"
                required
                type="email"
                name="email"
                placeholder="Email"
              />
              <textarea
                className="custom-shadow lg:h-[5.5vw] lg:pt-[0.5vw]  sm:w-full sm:h-[25vw] sm:pl-[4vw] sm:pt-[4vw] placeholder:font-bold placeholder:sm:text-[#000000] sm:placeholder:pt-[6vw] sm:placeholder:pl-[2vw] lg:placeholder:pl-[0.01vw]  lg:placeholder:pt-[0.1vw]   outline-none rounded-md"
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <button
                className="sm:w-[25vw]  lg:w-[6vw] lg:h-[2vw]  bg-[#f07b27] lg:mt-[1vw]  sm:text-[#ffff] sm:text-[3.4vw] lg:text-[1.1vw] rounded sm:h-[10vw] uppercase font-bold  outline-none"
                type="submit"
                style={{
                  background: `linear-gradient(to top left,#bdc3c7,#2c3e50,#ba2348)`,
                }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
