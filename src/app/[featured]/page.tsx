import type { Metadata } from "next";

import FeaturedTopics from "@/components/FeaturedTopics";
import PhotoGallery from "@/components/PhotoGallery";
import SearchBar from "@/components/SearchBar";
import { FEATURED_TOPICS } from "@/lib/topics";

interface Props {
  params: Promise<{ featured: string }>;
}

export async function generateStaticParams() {
  return FEATURED_TOPICS.map((topic) => ({ topic }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { featured } = await params;
  const decodedTopic = decodeURIComponent(featured);

  return {
    title: `Results for ${decodedTopic}`,
  };
}

export default async function FeaturedTopicPage({ params }: Props) {
  const { featured } = await params;

  return (
    <div className="space-y-8">
      <h2 className="mb-5 text-2xl capitalize sm:text-3xl">
        {decodeURIComponent(featured)}
      </h2>

      <SearchBar />
      <FeaturedTopics />
      <PhotoGallery topic={featured} />
    </div>
  );
}
