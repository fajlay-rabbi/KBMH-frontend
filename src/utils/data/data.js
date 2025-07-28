import VideoCard from "@/components/shared/VideoCard";
import {
  Ambulance,
  Cabin,
  Dental,
  Dr,
  Dr2,
  Dr3,
  Dr32,
  Dr4,
  Dr42,
  Dr5,
  Dr52,
  Dr6,
  Dr7,
  Dr72,
  Dr73,
  Emergency,
  ENT,
  Eye,
  Gynea,
  Medicine,
  Ortho,
  OT,
  OtScan,
  Pathology,
  Pediatric,
  Pharmacy,
  Physiotherapy,
  PostOperative,
  Skin,
  Surgery,
  UltraSound,
  XRay,
} from "../../../public/resources";
import TopDeptCard from "@/components/shared/TopDeptCard";
import HighlightedServicesCard from "@/components/shared/HighlightedServicesCard";

export const weServedRow1 = [
  Dr,
  Dr3,
  Dr2,
  Dr4,
  Dr32,
  Dr5,
  Dr72,
  Dr42,
  Dr6,
  Dr52,
  Dr73,
  Dr7,
  Dr3,
  Dr2,
  Dr4,
  Dr,
  Dr32,
  Dr5,
];

export const weServedRow2 = [
  Dr2,
  Dr5,
  Dr4,
  Dr3,
  Dr6,
  Dr73,
  Dr,
  Dr32,
  Dr52,
  Dr7,
  Dr42,
  Dr2,
  Dr3,
  Dr4,
  Dr72,
  Dr,
  Dr32,
];

export const weServedRow3 = [
  Dr3,
  Dr,
  Dr2,
  Dr4,
  Dr5,
  Dr32,
  Dr73,
  Dr52,
  Dr42,
  Dr6,
  Dr7,
  Dr3,
  Dr2,
  Dr4,
  Dr,
  Dr32,
  Dr5,
  Dr72,
  Dr2,
  Dr73,
  Dr42,
  Dr6,
  Dr3,
  Dr4,
];

export const weServedRow4 = [
  Dr4,
  Dr32,
  Dr2,
  Dr,
  Dr6,
  Dr3,
  Dr42,
  Dr7,
  Dr52,
  Dr73,
  Dr5,
  Dr3,
  Dr2,
  Dr72,
  Dr4,
  Dr32,
  Dr6,
  Dr2,
  Dr42,
  Dr,
  Dr3,
  Dr5,
  Dr73,
  Dr4,
];

export const weServedRow5 = [
  Dr5,
  Dr2,
  Dr,
  Dr4,
  Dr3,
  Dr32,
  Dr6,
  Dr52,
  Dr42,
  Dr72,
  Dr7,
  Dr3,
  Dr4,
  Dr5,
  Dr,
  Dr73,
  Dr2,
  Dr4,
  Dr3,
  Dr32,
  Dr6,
  Dr2,
  Dr42,
  Dr,
];

export const weServedRow6 = [
  Dr6,
  Dr3,
  Dr2,
  Dr4,
  Dr32,
  Dr,
  Dr7,
  Dr5,
  Dr73,
  Dr52,
  Dr42,
  Dr6,
  Dr3,
  Dr4,
  Dr2,
  Dr,
  Dr5,
  Dr72,
  Dr32,
  Dr3,
  Dr2,
  Dr4,
  Dr6,
  Dr42,
];

export const weServedRow7 = [
  Dr7,
  Dr,
  Dr4,
  Dr2,
  Dr3,
  Dr32,
  Dr6,
  Dr5,
  Dr52,
  Dr42,
  Dr73,
  Dr72,
  Dr,
  Dr4,
  Dr3,
  Dr2,
  Dr5,
  Dr6,
  Dr32,
  Dr42,
  Dr2,
  Dr3,
  Dr4,
  Dr73,
];

export const videoComponents = [
  <VideoCard
    key={0}
    title="সুস্থতা | থ্যালাসেমিয়া রোগীর জীবনযাপন এবং সতর্কতা"
    imageLink={"https://youtu.be/5W5Gd1kZ190?feature=shared"}
    thumbnail={1}
  />,
  <VideoCard
    key={1}
    title="সুস্থতা – প্রথম পর্ব | চ্যানেল নাইন জেনারেল এন্টারটেইনমেন্ট চ্যানেল (GEC)"
    imageLink={"https://youtu.be/O9ijnIxzVYY?feature=shared"}
    thumbnail={2}
  />,
  <VideoCard
    key={2}
    title="খাজা বদরুদ্দোজা মডার্ন হাসপাতাল – সেরা চিকিৎসক, সেরা হাসপাতাল।"
    imageLink={"https://youtu.be/5W5Gd1kZ190?feature=shared"}
    thumbnail={3}
  />,
  <VideoCard
    key={3}
    title="বাংলাদেশের প্রখ্যাত চিত্রশিল্পী ওমর সানি খাজা বদরুদদোজা মডার্ন হাসপাতালে"
    imageLink={"https://www.facebook.com/share/v/1C9K5iLSMN/"}
    thumbnail={4}
  />,
  <VideoCard
    key={4}
    title="খাজা বদরুদদোজা মডার্ন হাসপাতালের একটি অঙ্গ প্রতিষ্ঠান খাজা বদরুদদোজা মডার্ন স্পেশালাইজড মাদার এন্ড চাইল্ড কেয়ার ইউনিটে"
    imageLink={"https://www.facebook.com/share/v/1af6fZKk35/"}
    thumbnail={5}
  />,
  <VideoCard
    key={5}
    title="খাজা বদরুদ্দোজা মডার্ন হাসপাতাল / সেরা চিকিৎসক, সেরা হাসপাতাল – অপারেশন থিয়েটার"
    imageLink={"https://www.facebook.com/share/v/16GJCUQmyW/"}
    thumbnail={6}
  />,
  <VideoCard
    key={6}
    title="খাজা বদরুদ্দোজা মডার্ন হাসপাতাল – সেরা চিকিৎসক, সেরা হাসপাতাল।"
    imageLink={"https://www.facebook.com/share/v/19RhKSUdt7/"}
    thumbnail={7}
  />,
  <VideoCard
    key={7}
    title="খাজা বদরুদদোজা মডার্ন হাসপাতালের একটি অঙ্গ প্রতিষ্ঠান
খাজা বদরুদদোজা মডার্ন স্পেশালাইজড মাদার এন্ড চাইল্ড কেয়ার"
    imageLink={"https://www.facebook.com/share/r/15jhn1H5pE/"}
    thumbnail={2}
  />,
];

export const topDepartmentRow1 = [
  <TopDeptCard
    key={0}
    image={Medicine}
    title="Medicine"
    description="Our Medicine department offers expert care for all internal health issues."
  />,
  <TopDeptCard
    key={1}
    image={Gynea}
    title="Gynae & Obstetrics"
    description="Our Gynae & Obstetrics department ensures expert care for women’s health and maternity needs."
  />,
  <TopDeptCard
    key={2}
    image={Surgery}
    title="Surgery"
    description="Our Surgery department offers safe and advanced surgical care across specialties."
  />,
  <TopDeptCard
    key={3}
    image={ENT}
    title="ENT (Ear, Nose & Throat)"
    description="Our ENT department treats all ear, nose, and throat conditions with precision care."
  />,
  <TopDeptCard
    key={4}
    image={Dental}
    title="Dental"
    description="Our Dental department delivers comprehensive oral and dental care with modern techniques."
  />,
];

export const topDepartmentRow2 = [
  <TopDeptCard
    key={0}
    image={Ortho}
    title="Orthopedic"
    description="Our Orthopedic department specializes in bone, joint, and muscle care."
  />,
  <TopDeptCard
    key={1}
    image={Pediatric}
    title="Pediatric"
    description="Our Pediatric department provides dedicated care for infants, children, and adolescents."
  />,
  <TopDeptCard
    key={2}
    image={Skin}
    title="Skin"
    description="Our Skin department provides expert treatment for all dermatological conditions."
  />,
  <TopDeptCard
    key={3}
    image={Eye}
    title="Eye"
    description="Our Eye department offers advanced care for vision and eye-related issues."
  />,
  <TopDeptCard
    key={4}
    image={Physiotherapy}
    title="Physiotherapy"
    description="Our Physiotherapy department helps restore movement and improve physical well-being."
  />,
];

export const highlightedServiceRow1 = [
  <HighlightedServicesCard key={0} image={Emergency} title="Emergency" />,
  <HighlightedServicesCard key={1} image={Pharmacy} title="Pharmacy" />,
  <HighlightedServicesCard key={2} image={OT} title="OT (Operation Theatre)" />,
  <HighlightedServicesCard
    key={3}
    image={PostOperative}
    title="Post-Operative Care"
  />,
  <HighlightedServicesCard
    key={4}
    image={Cabin}
    title="Cabin & General Ward"
  />,
];

export const highlightedServiceRow2 = [
  <HighlightedServicesCard key={0} image={Pathology} title="Pathology" />,
  <HighlightedServicesCard key={1} image={UltraSound} title="Ultrasound" />,
  <HighlightedServicesCard key={2} image={OtScan} title="CT Scan" />,
  <HighlightedServicesCard key={3} image={XRay} title="Digital X-Ray" />,
  <HighlightedServicesCard key={4} image={Ambulance} title="Ambulance" />,
];
