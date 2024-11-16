import Image from "next/image";
import poster2 from "../../../assets/poster2.png";

export const SkyCard = ({ isLast }) => {
    return (
      <div
        className={`sticky top-0 w-[840px] h-[377px] rounded-3xl p-8 bg-[#5CAAB6] flex justify-center gap-16 items-center ${
          isLast ? "mb-[6rem]" : ""
        }`}
      >
        <div className="flex flex-col gap-6  justify-start items-start">
          <p className="text-web-h3 font-bold text-white  ">
            Build & customize your
            <br /> store front.
          </p>
          <p className="textweb-body2 font-light text-white ">
            Simply fill in the details to build your digital <br />
            store. Once done, start selling your products to
            <br /> your audience.
          </p>
        </div>
        <div className="w-[212px] h-[305px] ">
          <Image src={poster2} alt="image" />
        </div>
      </div>
    );
  };