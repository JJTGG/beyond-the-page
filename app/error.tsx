"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="book-shell">
      <section className="book-page">
        <div className="chapter-content">
          <p className="eyebrow">Beyond the Page</p>

          <h1>Something went off the page.</h1>

          <div className="page-divider" />

          <p>
            This part of the story could not be loaded. You can try opening it
            again.
          </p>

          <button className="nav-button" type="button" onClick={() => reset()}>
            Try again
          </button>
        </div>
      </section>
    </main>
  );
}