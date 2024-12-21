import Link from "next/link";

const NotFound = () => {
  return (
    <section className="py-5">
      <h1 className="mb-4 text-center text-3xl md:text-4xl lg:text-5xl">
        Not Found
      </h1>
      <p className="text-center sm:text-xl">Sorry, this page does not exist.</p>
      <Link href="/" className="link-hover link link-accent text-lg">
        Return Home
      </Link>
    </section>
  );
};

export default NotFound;
