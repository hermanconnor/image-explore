import { FEATURED_TOPICS } from '@/lib/topics';
import Link from 'next/link';

const FeaturedTopics = () => {
  return (
    <section>
      <h2 className='sr-only'>Featured Topics</h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        {FEATURED_TOPICS.map((topic) => (
          <Link
            key={topic}
            href={`/${topic}`}
            className='btn btn-info capitalize text-white'
          >
            {topic}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTopics;
