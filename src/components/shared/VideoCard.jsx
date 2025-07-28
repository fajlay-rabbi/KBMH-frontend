import Image from "next/image";
import {
  VideoPlaceHolder1,
  VideoPlaceHolder2,
  VideoPlaceHolder3,
  VideoPlaceHolder4,
  VideoPlaceHolder5,
  VideoPlaceHolder6,
  VideoPlaceHolder7,
} from "../../../public/resources";
import Link from "next/link";

const thumbnailMap = {
  1: VideoPlaceHolder1,
  2: VideoPlaceHolder2,
  3: VideoPlaceHolder3,
  4: VideoPlaceHolder4,
  5: VideoPlaceHolder5,
  6: VideoPlaceHolder6,
  7: VideoPlaceHolder7,
};

const VideoCard = ({ title, imageLink, thumbnail }) => {
  const selectedThumbnail = thumbnailMap[thumbnail] || VideoPlaceHolder1;

  return (
    <div>
      <Link href={imageLink} target="_blank" rel="noopener noreferrer">
        <Image
          src={selectedThumbnail}
          alt="Video Thumbnail"
          className="w-full h-56 object-cover rounded-lg"
        />
      </Link>
      <h3 className="text-xs font-semibold text-[#2d2d2d] mt-2">{title}</h3>
    </div>
  );
};

export default VideoCard;
