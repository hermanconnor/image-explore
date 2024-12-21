import { IPhoto, IPhotosResponse } from "@/lib/types";

export const fetchPhotos = async (
  topic: string,
): Promise<IPhoto[] | undefined> => {
  try {
    const response = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API_KEY}&tags=${topic}&per_page=24&format=json&nojsoncallback=1`,
    );

    const data: IPhotosResponse = await response.json();

    return data.photos.photo;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
    }
  }
};
