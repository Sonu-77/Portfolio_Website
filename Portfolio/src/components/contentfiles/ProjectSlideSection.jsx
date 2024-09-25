import React from 'react'
import Slider from "react-slick";
import { FaArrowRightLong } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProjectSlideSection() {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className=' lg:w-[100%]  sm:w-[100%] lg:ml-2 slider-container'>

            <Slider {...settings}>

                <div className="lg:h-[30vw] lg:w-[24vw] rounded-2xl   ">
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
                <div className="lg:h-[30vw] lg:w-[24vw] rounded-2xl  ">
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

            </Slider>
        </div>
    )
}

export default ProjectSlideSection