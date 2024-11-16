import Image from "next/image";
import React from "react";
import influencer1 from "../../assets/influencer1.png";
import influencer2 from "../../assets/influencer2.png";
import influencer3 from "../../assets/influencer3.png";

export const Influencers = () => {
  return (
    <div className="flex flex-col gap-9">
      <p className="text-primary text-web-h2 flex justify-center items-center font-bold">
        Our Influencers
      </p>
      <div className="flex justify-between items-center ">
        <Image
          src={influencer3}
          alt="influencers"
          className="lg:w-[268px] w-[125px] lg:h-[268px] h-[125px] rounded-full"
        />
        <Image
          src={influencer2}
          alt="influencers"
          className="lg:w-[268px] w-[125px] lg:h-[268px] h-[125px] rounded-full"

        />
        <Image
          src={influencer1}
          alt="influencers"
          className="lg:w-[268px] w-[125px] lg:h-[268px] h-[125px] rounded-full"

        />
        <Image
          src={influencer3}
          alt="influencers"
          className="lg:w-[268px] w-[125px] lg:h-[268px] h-[125px] rounded-full"
        />
      </div>
    </div>
  );
};
