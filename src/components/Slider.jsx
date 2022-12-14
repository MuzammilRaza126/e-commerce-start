import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ApiSlides } from "../componentsApi/SliderApi";
import "./Slider.css";

import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);
  //   const [slide, setSlide] = useState(slides[0]);
  console.log(slides);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div
          className={`flex w-[100%] h-[500px]   rounded-lg border-[#c0c0c0]  overflow-hidden
                ${slide.background}`}
        >
          <div className="flex-1 flex justify-center items-center h-[100%]">
            <img
              className=" h-[80%] object-cover"
              src={slide.src}
              alt="Chikan"
            />
            <div className="discription flex flex-col flex-1 place-items-start justify-center ml-11">
              <h2 className="text-[55px]">{slide.content.h2}</h2>
              <p className=" text-[30px]">{slide.content.p}</p>
              <button className="btn">Odder Now</button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

// import React, { useEffect, useState } from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import "./Slider.css";
// import { ApiSlides } from "../componentsApi/SliderApi";

// const Slider = () => {
//   // Styles
//   const slideStyle = "slide flex items-center justify-center h-[100%]";
//   const arrowStyle =
//     "rounded-full bg-grey flex justify-center items-center shadow-md hover:cursor-pointer";

//   //States
//   const [slides] = useState(ApiSlides);
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [slide, setSlide] = useState(slides[0]);
//   console.log(activeSlide);
//   const prevSlide = () => {
//     if (activeSlide === 0) {
//       setActiveSlide(slides.length - 1);
//     } else {
//       setActiveSlide(activeSlide - 1);
//     }
//   };
//   const nextSlide = () => {
//     if (activeSlide === slides.length - 1) {
//       setActiveSlide(0);
//     } else {
//       setActiveSlide(activeSlide + 1);
//     }

//     console.log("slides[activeSlide]", "slide", slide);
//   };
//   useEffect(() => {
//     setSlide(slides[activeSlide]);
//   }, [activeSlide]);
//   return (
//     <div className="slider h-[540px] bg-white flex items-center justify-between mobile:hidden">
//       {/* Left Arrow */}
//       <div className={arrowStyle} onClick={prevSlide}>
//         <IoIosArrowBack style={{ fontSize: "50px" }} />
//       </div>
//       <div
//         className={`wrapper flex w-[100%] h-[500px] items-center justify-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative
//                 ${slide.background}`}
//       >
//         <div className={slideStyle}>
//           <div className="flex-1 flex justify-center items-center h-[100%]">
//             <img
//               className=" h-[80%] object-cover"
//               src={slide.src}
//               alt="Chikan"
//             />
//           </div>
//           <div className="discription flex flex-col flex-1 place-items-start justify-center ml-11">
//             <h2 className="text-[55px]">{slide.content.h2}</h2>
//             <p className=" text-[30px]">{slide.content.p}</p>
//             <button className="btn">Odder Now</button>
//           </div>
//         </div>
//       </div>
//       {/* Right Arrow */}
//       <div className={arrowStyle} onClick={nextSlide}>
//         <IoIosArrowForward style={{ fontSize: "50px" }} />
//       </div>
//     </div>
//   );
// };

// export default Slider;
