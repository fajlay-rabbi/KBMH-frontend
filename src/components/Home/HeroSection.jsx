import Image from "next/image";
import Link from "next/link";
import { Hero_Image, Hero_Overlay, KBMH_Logo } from "../../../public/resources";
import {
  Facebook,
  Instagram,
  Linkedin,
  PhoneOutgoing,
  Twitter,
  Youtube,
} from "lucide-react";

export const SocialBtn = ({ icon: Icon }) => {
  return (
    <div className="text-white bg-primary w-fit p-1.5 rounded-md">
      <Icon size={20} />
    </div>
  );
};
export const iconComponents = [Facebook, Instagram, Twitter, Linkedin, Youtube];

const HeroSection = () => {

  return (
    <section className="w-full relative">
      <div className="absolute top-2 z-0 bg-cover flex justify-center w-full">
        <Image src={Hero_Overlay} alt="Overlay" draggable={false} />
      </div>
      <div className="container-custom relative">
        <div className="w-full flex items-center justify-center py-5 z-30">
          <Image
            src={KBMH_Logo}
            alt="Logo"
            width={45}
            height={45}
            draggable={false}
          />
        </div>
        <h4 className="font-alinur text-secondary text-lg text-center mt-5">
          সেরা ডাক্তার, <span className="text-primary">সেরা হাসপাতাল</span>
        </h4>
        <h1 className="font-archivo text-secondary font-extrabold text-2xl text-center mt-2">
          <span className="text-gradient">Khwaja Badrudduja</span> Modern
          Hospital
        </h1>
        <div className="mt-2 flex justify-center relative">
          <Image
            src={Hero_Image}
            alt="Overlay"
            draggable={false}
            className="w-full max-w-[700px]"
          />

          <div className="absolute left-0 top-1/2 -translate-y-1/2 p-5">
            <p className="font-archivo text-white mb-1">Hotline</p>

            {/* Phone Number - Click to Call */}
            <Link href="tel:10668">
              <div className="cursor-pointer bg-primary text-white flex items-center justify-center gap-3 px-3 py-2 rounded-md">
                <PhoneOutgoing size={16} />
                <p>10668</p>
              </div>
            </Link>

            {/* Mobile Number - Click to Call */}
            <Link href="tel:01776606262">
              <div className="cursor-pointer bg-accent text-white flex items-center justify-between gap-3 px-3 py-2 rounded-md mt-2">
                <p>Mobile: 01776606262</p>
              </div>
            </Link>

            {/* Website - Click to Visit */}
            <Link href="https://www.kbmhbd.com/" target="_blank">
              <div className="cursor-pointer bg-muted text-white flex items-center justify-center gap-3 px-3 py-2 rounded-md mt-2">
                <p className="underline">Visit our Website</p>
              </div>
            </Link>

            {/* Social Icons */}
            <div className="flex items-center gap-1 mt-2 flex-wrap">
              {iconComponents?.map((Icon, index) => (
                <SocialBtn key={index} icon={Icon} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-3 bg-muted rounded-lg text-white py-3">
          <p className="text-center font-bold">Customer Care</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
