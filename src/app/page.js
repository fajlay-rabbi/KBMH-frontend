import HeroSection from "@/components/Home/HeroSection";
import HighlightedServices from "@/components/Home/HighlightedServices";
import Location from "@/components/Home/Location";
import TopDepartment from "@/components/Home/TopDepartment";
import TopServices from "@/components/Home/TopServices";
import WeServed from "@/components/Home/WeServed";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default function Home() {
  return (
    <div className="max-w-[600px] mx-auto">
      <HeroSection />
      <WhyChooseUs />
      <WeServed />
      <TopServices />
      <TopDepartment />
      <HighlightedServices />
      <Location />
    </div>
  );
}
