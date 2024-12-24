import * as ThumbHash from "thumbhash";
import sharp from "sharp";
import { IPhoto } from "@/lib/types";

async function generateThumbHashFromImage(imageUrl: string): Promise<{
  thumbHashBase64: string;
  width: number;
  height: number;
}> {
  const res = await fetch(imageUrl);

  if (!res.ok) {
    throw new Error(`Failed to fetch image: ${res.statusText}`);
  }

  const arrayBuffer = await res.arrayBuffer();
  const imageBuffer = Buffer.from(arrayBuffer);

  const image = sharp(imageBuffer).resize(100, 100, { fit: "inside" });

  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const binaryThumbHash = ThumbHash.rgbaToThumbHash(
    info.width,
    info.height,
    data,
  );

  const thumbHashBase64 = Buffer.from(binaryThumbHash).toString("base64");

  return { thumbHashBase64, width: info.width, height: info.height };
}

export default async function generatePhotoThumbHashes(
  photos: IPhoto[],
): Promise<IPhoto[]> {
  const photosWithThumbHashes: IPhoto[] = [];

  for (const photo of photos) {
    const { secret, server, id } = photo;

    const imageUrl = `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;

    const thumbHashData = await generateThumbHashFromImage(imageUrl);
    const { thumbHashBase64: thumbHash, height, width } = thumbHashData;

    const placeholderURL = ThumbHash.thumbHashToDataURL(
      Buffer.from(thumbHash, "base64"),
    );

    photosWithThumbHashes.push({
      ...photo,
      thumbHash: placeholderURL,
      height,
      width,
    });
  }

  return photosWithThumbHashes;
}
