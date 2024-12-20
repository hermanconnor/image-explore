import Link from "next/link";

const FeaturedTopics = () => {
  return (
    <section>
      <h2 className="sr-only">Featured Topics</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link href="/beach" className="btn btn-primary">
          Beach
        </Link>

        <Link href="/mountains" className="btn btn-secondary">
          Mountains
        </Link>

        <Link href="/snow" className="btn btn-accent">
          Snow
        </Link>
      </div>
    </section>
  );
};

export default FeaturedTopics;
