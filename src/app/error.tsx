"use client";

import { useEffect } from "react";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-center text-3xl md:text-4xl lg:text-5xl">
        Something went wrong!
      </h1>
      <button className="btn btn-info" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
