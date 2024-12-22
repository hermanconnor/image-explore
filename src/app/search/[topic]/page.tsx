import PhotoGallery from "@/components/PhotoGallery";
import FeaturedTopics from "@/components/FeaturedTopics";

interface Props {
  params: Promise<{ topic: string }>;
}

const SearchPage = async ({ params }: Props) => {
  const { topic } = await params;

  return (
    <div>
      <h2 className="mb-5 text-2xl capitalize sm:text-3xl">
        {decodeURIComponent(topic)}
      </h2>
      <FeaturedTopics />
      <PhotoGallery topic={topic} />
    </div>
  );
};

export default SearchPage;
