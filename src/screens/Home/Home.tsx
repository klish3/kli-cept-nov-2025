import React from "react";

export const Home = (): JSX.Element => {
  return (
    <>
      <img
        className="absolute top-0 right-0 w-full md:w-[800px] lg:w-[1023px] h-full object-cover pointer-events-none opacity-50 md:opacity-100"
        alt="Background blurs"
        src="/background-blurs.svg"
      />

      <div className="relative px-6 py-12 sm:px-12 sm:py-16 md:pt-32 md:pl-24 lg:pt-[254px] lg:pl-[311px]">
        <div className="w-16 sm:w-24 md:w-[122px] h-[2px] md:h-[3px] bg-[#fea55f] mb-12 sm:mb-16 md:mb-[114px]" />

        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg mb-4 sm:mb-6">
          Hi guys. I am
        </div>

        <h1 className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-3xl sm:text-4xl md:text-5xl lg:text-[62px] mb-6 sm:mb-8 md:mb-[51px]">
          Faez Taghavi
        </h1>

        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#4d5bce] text-xl sm:text-2xl md:text-[32px] mb-8 sm:mb-12 md:mb-[91px]">
          &gt; Front-end developer
        </div>

        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base mb-4 sm:mb-[31px]">
          //
        </div>

        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base mb-4 sm:mb-[30px]">
          //
        </div>

        <div className="[font-family:'Fira_Code',Helvetica] font-medium text-xs sm:text-sm md:text-base break-all">
          <span className="text-[#4d5bce]">const</span>
          <span className="text-white">&nbsp;</span>
          <span className="text-[#43d9ad]">githubLink</span>
          <span className="text-white"> = </span>
          <span className="text-[#e99287]">&quot;</span>
          <span className="text-[#e99287] underline">
            https://github.com/faeztgh
          </span>
          <span className="text-[#e99287]">&quot;</span>
        </div>
      </div>
    </>
  );
};
