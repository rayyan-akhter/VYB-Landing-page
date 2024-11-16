import Image from "next/image";
import React from "react";
import mountain from "../../assets/mountain.jpg";
import mountain2 from "../../assets/mountain2.png";
import travelImage1 from "../../assets/travelImage1.png";
import travelImage2 from "../../assets/travelImage2.png";
import travelImage3 from "../../assets/travelImage3.png";
import Icon from "../../assets/icon.png";
import plane from "../../assets/plane.png";

export const Travel = () => {
  return (
    <div className="flex flex-col g ">
      <div className="relative ">
        <Image src={mountain} alt="mountain" className="rounded-t-sm-[24px] " />
        <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center flex-col">
          <p className="text-9xl font-bold text-white pb-10">TRAVEL</p>
          <p className="text-3xl font-bold text-white text-center">
            Turn your travel experience into itinerary,
            <br /> travel package with VYB Store and share it <br />
            with your true followers.
          </p>
        </div>
      </div>
      <div className="bg-primary-text text-white  overflow-hidden flex flex-col gap-14">
        <p className="text-web-h2 font-bold flex  justify-center items-center">
          Explore Our Curated Travel Itineraries
        </p>
        <div className="flex gap-6 px-4 w-full  overflow-x-scroll custom-scrollbar ">
          <div className="relative">
            <Image
              src={travelImage3}
              alt="traverlImage "
              className="h-[480px] w-[270px] min-w-[270px]"
            />
            <div className="absolute bottom-3 left-10 flex flex-col items-center">
              <p className="text-web-h4 font-medium">Darjeeling Itinera</p>
              <p className="text-lg  font-medium">West Bengal</p>
              <div className="bg-white text-black text-web-h4 font-bold flex justify-center items-center pr-2 w-[191px] h-[31px]  gap-2 rounded-full">
                Samira hadid
                <Image src={Icon} alt="icon" className="object-contain" />
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <Image
                src={travelImage2}
                alt="traverlImage "
                className="h-[480px] w-[270px]  min-w-[270px]"
              />
              <div className="absolute bottom-3 left-10 flex flex-col items-center">
                <p className="text-web-h4 font-medium">Munnar Itinerary</p>
                <p className="text-lg  font-medium">Kerala</p>
                <div className="bg-white text-black text-web-h4 font-bold flex justify-center items-center pr-2 w-[191px] h-[31px]  gap-2 rounded-full">
                  Samira hadid
                  <Image src={Icon} alt="icon" className="object-contain" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <Image
                src={travelImage1}
                alt="traverlImage "
                className="h-[480px] w-[270px]  min-w-[270px]"
              />
              <div className="absolute bottom-3 left-10 flex flex-col items-center">
                <p className="text-web-h4 font-medium">Delhi Itinerary</p>
                <p className="text-lg  font-medium">New delhi</p>
                <div className="bg-white text-black text-web-h4 font-bold flex justify-center items-center pr-2 w-[191px] h-[31px]  gap-2 rounded-full">
                  Samira hadid
                  <Image src={Icon} alt="icon" className="object-contain" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <Image
                src={travelImage1}
                alt="traverlImage "
                className="h-[480px] w-[270px]  min-w-[270px]"
              />
              <div className="absolute bottom-3 left-10 flex flex-col items-center">
                <p className="text-web-h4 font-medium">Delhi Itinerary</p>
                <p className="text-lg  font-medium">Delhi</p>
                <div className="bg-white text-black text-web-h4 font-bold flex justify-center items-center pr-2 w-[191px] h-[31px]  gap-2 rounded-full">
                  Samira hadid
                  <Image src={Icon} alt="icon" className="object-contain" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <Image
                src={travelImage1}
                alt="traverlImage "
                className="h-[480px] w-[270px]  min-w-[270px]"
              />
              <div className="absolute bottom-3 left-10 flex flex-col items-center">
                <p className="text-web-h4 font-medium">Delhi Itinerary</p>
                <p className="text-lg  font-medium">Delhi</p>
                <div className="bg-white text-black text-web-h4 font-bold flex justify-center items-center pr-2 w-[191px] h-[31px]  gap-2 rounded-full">
                  Samira hadid
                  <Image src={Icon} alt="icon" className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-black items-center gap-14 relative overflow-hidden">
        <p className="h-28 flex justify-center items-center text-web-h2 text-white  font-bold">
          How to List?
        </p>
        <div className="absolute top-[50%] left-0 h-[265px] w-[265px] bg-[#FF5FD2] translate-y-[-50%] blur-[170px]" />
        <div className="absolute top-[50%] right-0 h-[265px] w-[265px] bg-[#4885FF] translate-y-[-50%] blur-[170px]" />
        <Image src={mountain2} alt="mpuntiane2" className="z-10" />
        <Image src={plane} alt="mpuntiane2" className="absolute top-32 z-20" />
        <p className="text-web-h2 text-white absolute bottom-3 font-normal z-20">
          You Curate Experience,We Make It Happen
        </p>
      </div>
    </div>
  );
};
