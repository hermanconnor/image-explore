import { fetchPhotos } from "@/utils";
import NoPhotos from "./NoPhotos";
import Photo from "./Photo";

interface Props {
  topic?: string | undefined;
}

const PhotoGallery = async ({ topic = "sunrise" }: Props) => {
  const photos = await fetchPhotos(topic);

  if (!photos || photos.length <= 0) return <NoPhotos />;

  return (
    <section>
      <h2 className="sr-only">Photo Gallery</h2>
      <div className="mx-auto my-6 columns-1 gap-x-4 space-y-4 sm:columns-2 lg:columns-3 xl:columns-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="w-full break-inside-avoid overflow-hidden rounded-lg shadow-md"
          >
            <Photo photo={photo} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
