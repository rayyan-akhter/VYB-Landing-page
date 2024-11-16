import React from "react";
import { Section } from "../common/Section";
import Image from "next/image";
import img from "../../assets/img.png";

export const Hero = () => {
  return (
    <Section className="max-h flex gap-9 justify-between mt-12 font-bold  lg:flex-row flex-col items-center">
      <div className=" flex flex-col  justify-between max-w-[582px]  ">
        <div className="flex flex-col gap-[10px]">
          <div className="flex gap-3 ">
            <div className="bg-white text-web-hero-h1 p-[10px] rounded-xl  ">
              One
            </div>
            <div className="bg-white text-web-hero-h1 p-[10px] rounded-xl">
              Stop
            </div>
          </div>
          <div className="bg-white text-web-hero-h1  p-[10px] rounded-xl w-fit ">
            Marketplace
          </div>
          <div className="flex gap-3 ">
            <div className="bg-white text-web-hero-h1  p-[10px] rounded-xl ">
              For
            </div>
            <div className="bg-primary text-web-hero-h1  p-[10px] rounded-xl ">
              Influencers
            </div>
          </div>
        </div>
        <div className="text-white text-web-hero-desc-h1 font-bold">
          {
            "Unleash Your Influence: Sell Itineraries, Build Your Brand, Create Merch, and Share Content – All in One Hub."
          }
        </div>
        <div className="flex gap-9">
          <div className="bg-primary rounded-[18px] text-web-cta  flex justify-center items-center w-[144px] h-[54px] ">
            Demo Store
          </div>
          <div
            className="rounded-[18px] w-[142px] h-[54px] flex justify-center items-center text-web-cta   "
            style={{
              border: "2px solid transparent",
              borderRadius: "18px",
              borderImage: "linear-gradient(to right, #FF5D5D, #4794FF) 1",
              background: "linear-gradient(to right, #FF5D5D, #4794FF)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Join Waitlist
          </div>
        </div>
      </div>
      <div className="w-[582px] ">
        <Image src={img} alt="image" />
      </div>
    </Section>
  );
};
