import Image from "next/image";
import React from "react";
import multipleImage from "../../assets/multipleImage.png";
import feature1 from "../../assets/feature1.png"
import feature2 from "../../assets/feature2.png"
import feature3 from "../../assets/feature3.png"

export const Features = () => {
  return (
    <div className="flex justify-between gap-5  lg:flex-row flex-col">
      <div>
        <p className="flex justify-center text-center items-center h-full text-primary text-web-h1 font-bold">
          From Creation to Monetization: Vyb Store Has It All
        </p>
      </div>
      <div className="flex gap-4 justify-center lg:justify-start">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-center gap-6 items-center p-6 bg-black w-[355px] h-[325px] rounded-2xl	">
            <div className="flex flex-col gap-2">
              <p className="text-web-h2  font-bold text-white flex justify-center text-center">
                Authentic Payment Partner
              </p>
              <p className="text-web-h4 font-bold text-white flex justify-center text-center">
                Reliable, fast, and secure payments you can trust
              </p>
            </div>
            <Image src={feature1} alt="multipleImage"className="object-contain"  />
          </div>
          <div className="flex flex-col justify-center gap-6 items-center p-6 bg-black w-[355px] h-[325px] rounded-2xl	">
            <div className="flex flex-col gap-2">
              <p className="text-web-h2  font-bold text-white flex justify-center text-center">
                Secured Data
              </p>
              <p className="text-web-h4 font-bold text-white flex justify-center text-center">
                Advanced security measures to protect your valuable data
              </p>
            </div>
            <Image src={feature2} alt="multipleImage" className="object-contain" />
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-3">
          <div className="flex flex-col justify-center gap-4 items-center p-6 bg-black w-[355px] h-[325px] rounded-2xl	">
            <div className="flex flex-col gap-2">
              <p className="text-web-h2  font-bold text-white flex justify-center text-center">
                Monetize Your Influence
              </p>
              <p className="text-web-h4 font-bold text-white flex justify-center text-center">
                Seamlessly turn your influence into consistent revenue
              </p>
            </div>
            <Image src={feature3} alt="multipleImage" className="object-contain"  />
          </div>
          <div className="flex flex-col justify-center gap-4 items-center p-6 bg-black w-[355px] h-[325px] rounded-2xl	">
            <div className="flex flex-col gap-2">
              <p className="text-web-h2  font-bold text-white flex justify-center text-center">
                Trusted By Influencers
              </p>
              <p className="text-web-h4 font-bold text-white flex justify-center text-center">
                A trusted platform for influencers to grow and earn.
              </p>
            </div>
            <Image src={multipleImage} alt="multipleImage" className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};
