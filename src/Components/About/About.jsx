import React from "react";
import "./About.css";
// Import module and default styles
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import VisibilitySensor from "react-visibility-sensor";
import { buildStyles } from "react-circular-progressbar";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

export default function About() {
  const percentage = [
    {
      percent: "60",
      title: "Quality of product",
      text: "We provide you a higher quality material for a life long item",
    },
    {
      percent: "50",
      title: "Elgant taste",
      text: "We use pattern from all over the world to ensure high taste from every country",
    },
    {
      percent: " 90 ",
      title: "Deliver in time",
      text: "We make sure to keep our word when receiving and shipping the item",
    },
    {
      percent: "70",
      title: "Variety in choices",
      text: "You can find each and every size and color you could possibly want and need",
    },
  ];
  const Reviews = [
    `${require("../Images/Reviews/r1.jfif")}`,
    `${require("../Images/Reviews/r2.jfif")}`,
    `${require("../Images/Reviews/r3.jfif")}`,
    `${require("../Images/Reviews/r8.jpg")}`,
    `${require("../Images/Reviews/r5.jfif")}`,
    `${require("../Images/Reviews/r6.jfif")}`,
    `${require("../Images/Reviews/r7.jfif")}`,
  ];

  return (
    <div style={{ width: "85%" }} className="mx-auto">
      <div>
        <h3 className="font text-5xl headtext my-10">
          Who Heartmade Family Are
        </h3>
        <div className="lg:flex gap-20 justify-center items-center">
          <img
            src="Images/about.jfif"
            className="w-full lg:w-2/5 rounded-3xl"
          />
          <div className="w-full lg:w-2/5 ">
            <p>
              We stablished this business 2 years ago , First it came in our
              mind while the pandemic ( corrona virus ) started the first
              product was a manly scarf , i could not stop using my talent in
              crochet i could not get enough ... So my friends said why dont you
              start your own business?
              <br /> And the begining was at July 2020 People started to admire
              my work and Began to make order And that was the only thing that
              get me out from Depression , For me doing crochet isn't just a job
              , its a life , I creat each items with love so that where the
              group name came from ,
              <br />
              Thanks for all people supporting my business you are not just
              supporting business you are supporting my
              <strong> LIFE DREAM</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="my-7 bgimg h-72 bg-fixed flex flex-wrap justify-centr items-center">
        <h1 className="mathfont text-5xl text-topcolor w-full">ADVICES</h1>
        <p className="mathfont text-2xl w-full ">
          If you are starting a new business yourself
          <br />
          we will be able to give you the advices you need
          <br />
          to know how and from where to start
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {percentage.map((persent, index) => {
          return (
            <div key={index}>
              <VisibilitySensor>
                {({ isVisible }) => {
                  const percentage = isVisible ? persent : 0;
                  return (
                    <CircularProgressbar
                      value={percentage.percent}
                      text={`${percentage.percent}%`}
                      styles={buildStyles({
                        pathColor: "#824444",
                        trailColor: "#f4eace",
                        textColor: "gray",
                      })}
                    />
                  );
                }}
              </VisibilitySensor>
              <h2 className="mathfont text-2xl font-semibold text-topcolor my-2">
                {persent.title}
              </h2>
              <p className="text-gray-500 mb-2">{persent.text}</p>
            </div>
          );
        })}
      </div>
      <div className="my-7">
        <h3 className="font text-4xl text-topcolor my-10">
          Our Clients's Review
        </h3>
        <Swiper
          effect={"flip"}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFlip, Pagination]}
          className=""
        >
          {Reviews.map((review) => {
            return (
              <SwiperSlide>
                <img src={review} className="w-full lg:w-2/4 h-72 mx-auto" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
