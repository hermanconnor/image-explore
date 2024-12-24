import type { Metadata } from "next";
import PhotoGallery from "@/components/PhotoGallery";
import FeaturedTopics from "@/components/FeaturedTopics";
import SearchBar from "@/components/SearchBar";

interface Props {
  params: Promise<{ topic: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic } = await params;
  const decodedTopic = decodeURIComponent(topic);

  return {
    title: `Results for ${decodedTopic}`,
  };
}

export default async function SearchPage({ params }: Props) {
  const { topic } = await params;

  return (
    <div className="space-y-8">
      <h2 className="mb-5 text-2xl capitalize sm:text-3xl">
        {decodeURIComponent(topic)}
      </h2>

      <SearchBar />
      <FeaturedTopics />
      <PhotoGallery topic={topic} />
    </div>
  );
}
