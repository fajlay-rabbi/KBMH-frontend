import Image from "next/image";
import { VideoPlaceHolder } from "../../../public/resources";

const VideoCard = ({ title }) => {
  return (
    <div>
      <Image
        src={VideoPlaceHolder}
        alt="Video Thumbnail"
        className="w-full h-56 object-cover rounded-lg"
      />
      <h3 className="text-xs font-semibold mt-2">{title}</h3>
    </div>
  );
};

export default VideoCard;
