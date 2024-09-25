import React from "react";
import aboutProfileImage from '@/assets/aboutProfileImg.jpg';

function About() {
  return (
    <>
      <div className="lg:w-[74vw] lg:h-[107vw] relative"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/9668534/pexels-photo-9668534.jpeg?auto=compress&cs=tinysrgb&w=2400")`,
          backgroundSize: "cover"
        }}>
        <div className="lg:w-[43vw] absolute left-[16vw] lg:h-[80vw]  ">
          <div className="lg:mt-[7vw] lg:w-[15vw] lg:h-[4vw]  ">
            <h2 className="text-[2.5vw] font-bold tracking-wider uppercase lg:ml-[1vw]"
              style={{
                backgroundImage: 'linear-gradient(to  right, #0575E6,#B06AB3,#4568DC)',
                WebkitBackgroundClip: 'text', // For Safari and Chrome
                backgroundClip: 'text', // For other browsers
                WebkitTextFillColor: 'transparent', // Makes the text transparent in Webkit-based browsers
              }}
            >About Me</h2>
          </div>
          <div className="lg:w-[14.5vw] lg:h-[0.2vw] rounded-3xl lg:ml-[0.5vw] lg:mb-[4vw] "
            style={{
              background: `linear-gradient(to right,#D3CCE3,#007991,#78ffd6,#E9E4F0)`,
            }}>
              <div className="lg:w-[01vw] lg:h-[0.2vw] rounded-full bg-white absolute  animate-moveLeft "
              style={{
              background: `linear-gradient(to right,#ffffff,#0083B0,#00B4DB,#ffffff)`,
            }}></div>
          </div>
          <div className="flex flex-col gap-[3vw] lg:mt-[2vw]">
            <div
              className="lg:h-[30.2vw] z-50 lg:w-[22vw] ml-[1vw]  rounded-tr-[4vw] relative"
              style={{
                background: `linear-gradient(to bottom right,#bdc3c7,#2c3e50,#c31432,#240b36,#f5af19)`,
              }}>
              <div className="absolute z-10 rotate-[270deg] top-[14vw] -left-[10vw]  ">
                <h2 className="text-[2.9vw] tracking-widest uppercase dancing-script-font "
                  style={{
                    backgroundImage: 'linear-gradient(to  right, #2E3192,#1BFFFF,#0083B0)',
                    WebkitBackgroundClip: 'text', // For Safari and Chrome
                    backgroundClip: 'text', // For other browsers
                    WebkitTextFillColor: 'transparent', // Makes the text transparent in Webkit-based browsers
                  }}>
                  Sonu Kachhap
                </h2>
              </div>
              <img
                className="lg:h-[30vw] lg:w-[25vw] object-cover
                rounded-tr-[4vw] absolute -left-1  "
                src={aboutProfileImage}
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
