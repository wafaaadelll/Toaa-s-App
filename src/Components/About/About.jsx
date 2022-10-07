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
  const percentage = [80, 60, 40, 10];
  const Reviews = ["Images/o1.jpg", "Images/o3.jpg", "Images/o2.jpg"];

  return (
    <div style={{ width: "85%" }} className="mx-auto">
      <div>
        <h3 className="font text-5xl headtext my-10">
          Who Heartmade Family Are
        </h3>
        <div className="flex gap-20 justify-center items-center">
          <img
            src="https://www.seebtm.com/wp-content/uploads/handmade.jpg"
            className="w-2/5 rounded-3xl"
          />
          <div className="w-2/5 ">
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
      <div className="my-7 bgimg h-96 bg-fixed"></div>
      <div className="flex justify-center">
        {percentage.map((persent) => {
          return (
            <div>
              <VisibilitySensor>
                {({ isVisible }) => {
                  const percentage = isVisible ? persent : 0;
                  return (
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      styles={buildStyles({
                        pathColor: "#824444",
                        trailColor: "#eeeece",
                        textColor: "gray",
                      })}
                    />
                  );
                }}
              </VisibilitySensor>
              <h2 className="mathfont text-2xl font-semibold text-topcolor my-2">
                TEXT
              </h2>
              <p className="text-gray-500 mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                vitae?
              </p>
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
          pagination={true}
          modules={[EffectFlip, Pagination]}
          className=""
        >
          {Reviews.map((review) => {
            return (
              <SwiperSlide>
                <img src={review} className="w-2/4 h-40 mx-auto" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
