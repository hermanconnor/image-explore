import FeaturedTopics from "@/components/FeaturedTopics";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="mb-4 text-center text-3xl md:text-4xl lg:text-5xl">
          Discover Stunning Photos from Around the World
        </h1>
        <p className="text-center sm:text-xl">
          Search any topic, explore a beautiful collection of images, and get
          inspired.
        </p>
      </header>

      <SearchBar />
      <FeaturedTopics />
    </div>
  );
}
