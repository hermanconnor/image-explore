import Image from "next/image";
import { IPhoto } from "@/lib/types";

interface Props {
  photo: IPhoto;
}

const Photo = ({ photo }: Props) => {
  const { secret, server, id, title } = photo;

  return (
    <Image
      src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`}
      width={500}
      height={500}
      alt={title}
      className="h-auto w-full rounded-lg"
    />
  );
};

export default Photo;
