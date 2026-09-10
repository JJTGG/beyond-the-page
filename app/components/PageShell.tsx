"use client";

import { useState } from "react";
import ChapterMenu from "./ChapterMenu";
import ThemeToggle from "./ThemeToggle";

const chapters = [
  "Home",
  "The Beginning",
  "Six Weeks of Learning",
  "The Ripple",
  "Literacy Actions",
  "The Gallery",
  "Behind the Pages",
  "The Numbers",
  "The Reflection",
  "Beyond YAP",
];

export default function PageShell() {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const goNext = () => {
    setCurrentChapter((current) =>
      Math.min(current + 1, chapters.length - 1),
    );
  };

  const goPrevious = () => {
    setCurrentChapter((current) => Math.max(current - 1, 0));
  };

  const selectChapter = (index: number) => {
    setCurrentChapter(index);
    setMenuOpen(false);
  };

  return (
    <main>
      <header>
        <button type="button" onClick={() => setMenuOpen(true)}>
          Contents
        </button>

        <ThemeToggle />
      </header>

      {menuOpen && (
        <ChapterMenu
          chapters={chapters}
          currentChapter={currentChapter}
          onSelect={selectChapter}
          onClose={() => setMenuOpen(false)}
        />
      )}

      <p>
        {currentChapter === 0
          ? "Home"
          : `Chapter ${currentChapter} of ${chapters.length - 1}`}
      </p>

      <h1>{chapters[currentChapter]}</h1>

      <div>
        <button onClick={goPrevious} disabled={currentChapter === 0}>
          Previous
        </button>

        <button
          onClick={goNext}
          disabled={currentChapter === chapters.length - 1}
        >
          Next
        </button>
      </div>
    </main>
  );
}