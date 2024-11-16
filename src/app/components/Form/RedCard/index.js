import Image from "next/image";
import googleIcon from "../../../assets/googleIcon.png";

export const RedCard = ({ isLast }) => {
    return (
      <div
        className={`sticky top-0 w-[840px] h-[377px] rounded-3xl p-10 bg-form flex justify-center gap-16 items-center ${
          isLast ? "mb-[6rem]" : ""
        }`}
      >
        <div className="flex flex-col gap-6  justify-start items-start">
          <p className="text-web-h3 font-bold text-white  ">
            Sign Up and create your <br />
            own store hassle-free.
          </p>
          <p className="textweb-body2 font-light text-white ">
            Join us via google signin and verify your <br /> influencer status by
            entering you social media Id <br /> and unlock your store @ zero cost.
          </p>
        </div>
        <div className="bg-black w-[212px] h-[305px] rounded-2xl p-4 flex flex-col gap-2 ">
          <div className="border-2 border-white text-white flex justify-center gap-3 text-[14px] leading-[16.8px] items-center rounded-lg h-[33px]">
            <Image src={googleIcon} alt="" />
            Login with google
          </div>
          <div className="flex text-[#a8a8a8] justify-center items-center ">
            <div className="w-full bg-[#a8a8a8] h-[1px] " />
            OR
            <div className="w-full bg-[#a8a8a8] h-[1px]" />
          </div>
          <div className="flex flex-col  text-white justify-center items-center gap-1">
            <p className="text-web-body1 font-700">Email</p>
            <input
              type="text"
              className="w-full h-4 bg-[black] text-white focus:outline-none"
            />
            <div className="w-full bg-[#a8a8a8] h-[1px]" />
          </div>
          <div className="flex flex-col  text-white justify-center items-center gap-1">
            <p className="text-web-body1 font-700">Password</p>
            <input
              type="password"
              className="w-full bg-[black] text-white focus:outline-none h-4"
            />
            <div className="w-full bg-[#a8a8a8] h-[1px]" />
          </div>
          <div className="flex justify-center items-center w-full ">
            <div
              className="w-20 h-10 flex justify-center items-center"
              style={{
                border: "1px solid transparent",
                borderRadius: "18px",
                borderImage: "linear-gradient(to right, #FF5D5D, #4794FF) 1",
                background: "linear-gradient(to right, #FF5D5D, #4794FF)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Login
            </div>
          </div>
          <div className="flex justify-between text-white text-[11px]  font-500 ">
            <p>Don’t have an account?</p>
            <p className="text-primary">Get Started</p>
          </div>
        </div>
      </div>
    );
  };