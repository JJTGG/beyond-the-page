"use client";

import { useState } from "react";
import ChapterMenu from "./ChapterMenu";
import ThemeToggle from "./ThemeToggle";
import Home from "../chapters/Home";
import TheBeginning from "../chapters/TheBeginning";
import SixWeeks from "../chapters/SixWeeks";

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

const chapterComponents = [
  Home,
  TheBeginning,
  SixWeeks,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
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

  const Chapter = chapterComponents[currentChapter];

  return (
    <main className="book-shell">
      <header className="book-header">
        <button
          className="header-button"
          type="button"
          onClick={() => setMenuOpen(true)}
        >
          Contents
        </button>

        <span className="site-mark">Beyond the Page</span>

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

      <section className="book-page">
        <div className="chapter-meta">
          <span>
            {currentChapter === 0
              ? "Home"
              : `Chapter ${currentChapter} of ${chapters.length - 1}`}
          </span>
        </div>

        <div className="chapter-content">
          {Chapter ? (
            <Chapter />
          ) : (
            <>
              <p className="eyebrow">My Youth Power in Action Journey</p>

              <h1>{chapters[currentChapter]}</h1>

              <div className="page-divider" />

              <p className="page-placeholder">
                This chapter is waiting to be written.
              </p>
            </>
          )}
        </div>

        <div className="page-navigation">
          <button
            className="nav-button"
            type="button"
            onClick={goPrevious}
            disabled={currentChapter === 0}
          >
            ← Previous
          </button>

          <span className="page-number">
            {String(currentChapter + 1).padStart(2, "0")}
          </span>

          <button
            className="nav-button"
            type="button"
            onClick={goNext}
            disabled={currentChapter === chapters.length - 1}
          >
            Next →
          </button>
        </div>
      </section>
    </main>
  );
}