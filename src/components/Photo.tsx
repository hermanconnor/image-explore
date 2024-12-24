import Image from "next/image";
import { IPhoto } from "@/lib/types";

interface Props {
  photo: IPhoto;
}

const Photo = ({ photo }: Props) => {
  const { secret, server, id, title, thumbHash, height, width } = photo;

  return (
    <Image
      src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`}
      width={height}
      height={width}
      alt={title}
      className="h-auto w-full rounded-lg"
      placeholder="blur"
      blurDataURL={thumbHash}
    />
  );
};

export default Photo;
