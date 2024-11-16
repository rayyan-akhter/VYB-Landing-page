import Image from "next/image";
import poster3 from "../../../assets/poster3.png";

export const BlueCard = ({ isLast }) => {
  return (
    <div
      className={`sticky top-0 w-[840px] h-[377px] rounded-3xl p-10 bg-[#487FD7] flex justify-center gap-16 items-center ${
        isLast ? "mb-[6rem]" : ""
      }`}
    >
      <div className="flex flex-col gap-6  justify-start items-start">
        <p className="text-web-h3 font-bold text-white  ">
          Call audience to your store.
          <br /> Easily integrate links into
          <br /> content.
        </p>
        <p className="textweb-body2 font-light text-white ">
          After setting up your products, its time to go
          <br /> public. Put your store link in insta bio and lets
          <br /> make first post together !
        </p>
      </div>
      <div className="w-[189px] h-[305px]  ">
        <Image src={poster3} alt="image" className="h-[305] object-contain" />
      </div>
    </div>
  );
};
