import Image from "next/image";
import { CallIcon } from "../../../public/resources";
import { iconComponents, SocialBtn } from "../Home/HeroSection";

const Footer = () => {
  return (
    <div className="bg-[#02121B] max-w-[600px] mx-auto">
      <div className="container-custom mx-auto py-5">
        <div className="flex items-center gap-10 sm:gap-16 justify-center">
          <div className="flex items-center gap-2">
            <Image src={CallIcon} alt="Call Icon" width={40} />
            <a
              href="tel:01776606262"
              className="text-white font-archivo font-medium"
            >
              01776606262
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Image src={CallIcon} alt="Call Icon" width={40} />
            <a href="tel:10668" className="text-white font-archivo font-medium">
              Hotline <span className="text-[#FFB800]">10668</span>
            </a>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-2 justify-center flex-wrap">
          <a
            href="https://www.kbmhbd.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-primary w-fit px-3 sm:px-5 py-2 sm:py-3 rounded-lg">
              <p className="text-white">Book Appointment</p>
            </div>
          </a>
          <a
            href="https://www.kbmhbd.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border border-primary w-fit px-3 sm:px-5 py-2 sm:py-3 rounded-lg">
              <p className="text-white">Visit Main Website</p>
            </div>
          </a>
        </div>
        <div className="mt-5 flex items-center justify-center">
          <div className="flex items-center gap-4 mt-2 flex-wrap">
            {iconComponents?.map((Icon, index) => (
              <SocialBtn key={index} icon={Icon} />
            ))}
          </div>
        </div>
      </div>
      <div className="h-16 flex items-center justify-center bg-white">
          <p className="text-[#555555] text-xs font-archivo">
            All rights Reserved, Khwaja Badrudduja Modern Hospital ©2025
          </p>
        </div>
    </div>
  );
};

export default Footer;
