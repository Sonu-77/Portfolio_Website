import React from "react";

function About() {
  return (
    <>
      <div className="lg:w-[74vw] lg:h-[100vw] relative">
        <div className="lg:w-[43vw] absolute left-[16vw] lg:h-[80vw]  ">
          <div className="lg:mt-[7vw] lg:w-[15vw] lg:h-[5vw]  ">
            <h2 className="text-[2.5vw] font-bold tracking-wider uppercase lg:ml-[1vw]"
            style={{
                backgroundImage: 'linear-gradient(to  right, #23074d,#cc5333)',
                WebkitBackgroundClip: 'text', // For Safari and Chrome
                backgroundClip: 'text', // For other browsers
                WebkitTextFillColor: 'transparent', // Makes the text transparent in Webkit-based browsers
              }}
              >About Me</h2>
          </div>
          <div className="flex flex-col gap-[3vw] lg:mt-[2vw]">
            <div
              className="lg:h-[30.2vw] lg:w-[25vw] ml-[1vw]  rounded-tr-[4vw] relative"
              style={{
                background: `linear-gradient(to bottom right,#bdc3c7,#2c3e50,#c31432,#240b36,#f5af19)`,
              }}
            >
              <div className="absolute z-10 rotate-[270deg] top-[14vw] -right-[9vw]">
                <h2 className="text-[3vw] tracking-wide uppercase dancing-script-font "
                style={{
                    backgroundImage: 'linear-gradient(to  right, #2E3192,#1BFFFF)',
                    WebkitBackgroundClip: 'text', // For Safari and Chrome
                    backgroundClip: 'text', // For other browsers
                    WebkitTextFillColor: 'transparent', // Makes the text transparent in Webkit-based browsers
                  }}>
                  Sonu Kachhap
                </h2>
              </div>
              <img
                className="lg:h-[30vw] lg:w-[25vw] object-cover rounded-tr-[4vw] absolute -left-1  "
                src="https://images.pexels.com/photos/1813923/pexels-photo-1813923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="pic"
              />
            </div>
            <div className="group flex flex-col gap-[1.5vw]">
              <h2 className="lg:ml-[30vw] lg:h-[5vw] lg:w-[10vw] flex justify-center items-center  dancing-script-font group-hover:text-[2.5vw] uppercase text-[2vw] transition-all duration-300 ease-in-out "
              style={{
                backgroundImage: 'linear-gradient(to  right, #2E3192,#1BFFFF)',
                WebkitBackgroundClip: 'text', // For Safari and Chrome
                backgroundClip: 'text', // For other browsers
                WebkitTextFillColor: 'transparent', // Makes the text transparent in Webkit-based browsers
              }}>
                Intro
              </h2>
              <div
                className="lg:h-[20vw] lg:w-[30vw] ml-[1vw] bg-[#000000] rounded-xl lg:ml-[20vw]  relative"
                style={{
                  background: `linear-gradient(to bottom right,#bdc3c7,#2c3e50,#c31432,#240b36,#f5af19)`,
                }}
              >
                <div
                  className="lg:h-[20vw] lg:w-[30vw]  absolute  rounded-xl -left-1  -top-1 p-[1vw] "
                  style={{
                    background: `linear-gradient(to bottom right,#2E3192,#1BFFFF)`,
                  }}
                >
                  <p className="text-[1.2vw] text-[#ffff] ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Consectetur incidunt porro ipsam facilis provident dolor
                    explicabo modi sit earum. Impedit atque magni magnam
                    numquam, mollitia eligendi ipsa neque cumque sonuautem.
                  </p>
                </div>
              </div>
            </div>
            <div className="group flex flex-col gap-[1.5vw]">
            <h2 className=" lg:h-[5vw] lg:w-[13vw] flex justify-center items-center transition-all duration-300 ease-in-out dancing-script-font group-hover:text-[2.5vw] uppercase text-[2vw] "
            style={{
                backgroundImage: 'linear-gradient(to  right, #2E3192,#1BFFFF)',
                WebkitBackgroundClip: 'text', // For Safari and Chrome
                backgroundClip: 'text', // For other browsers
                WebkitTextFillColor: 'transparent', // Makes the text transparent in Webkit-based browsers
              }}>
                hobbies
              </h2>
              <div
                className="lg:h-[20vw] lg:w-[30vw] ml-[1vw] bg-[#000000] rounded-xl   relative"
                style={{
                  background: `linear-gradient(to bottom right,#bdc3c7,#2c3e50,#c31432,#240b36,#f5af19)`,
                }}
              >
                <div
                  className="lg:h-[20vw] lg:w-[30vw] absolute  rounded-xl -left-1  -top-1 p-[1vw] "
                  style={{
                    background: `linear-gradient(to bottom right,#2E3192,#1BFFFF)`,
                  }}
                >
                  <p className="text-[1.2vw] text-[#ffff] ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Consectetur incidunt porro ipsam facilis provident dolor
                    explicabo modi sit earum. Impedit atque magni magnam
                    numquam, mollitia eligendi ipsa neque cumque sonuautem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
