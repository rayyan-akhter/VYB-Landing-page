import Image from "next/image";
import poster1 from "../../../assets/poster1.png";

export const GreenCard = ({ isLast }) => {
  return (
    <div
      className={`sticky top-0 w-[840px] h-[377px] rounded-3xl p-8 bg-primary flex justify-center gap-16 items-center ${
        isLast ? "mb-[6rem]" : ""
      }`}
    >
      <div className="flex flex-col gap-6  justify-start items-start">
        <p className="text-web-h3 font-bold text-white  ">
          "Monetize your influencer
          <br /> status: Earn money adding <br />
          real value to your true
          <br /> followers!"
        </p>
        <p className="textweb-body2 font-light text-white ">
          Let VYB the money now !! Its here and
          <br /> widthdraw it periodically.
        </p>
      </div>
      <div className="w-[212px] h-[305px] rounded-2xl p-4 flex flex-col gap-4 ">
        <Image src={poster1} alt="image" />
      </div>
    </div>
  );
};
