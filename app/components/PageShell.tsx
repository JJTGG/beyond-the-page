"use client";

import { useState } from "react";
import ChapterMenu from "./ChapterMenu";
import ThemeToggle from "./ThemeToggle";
import Home from "../chapters/Home";
import TheBeginning from "../chapters/TheBeginning";
import SixWeeks from "../chapters/SixWeeks";
import TheRipple from "../chapters/TheRipple";
import LiteracyActions from "../chapters/LiteracyActions";
import TheGallery from "../chapters/TheGallery";
import BehindThePages from "../chapters/BehindThePages";
import TheNumbers from "../chapters/TheNumbers";
import TheReflection from "../chapters/TheReflection";
import BeyondYAP from "../chapters/BeyondYAP";

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
  TheRipple,
  LiteracyActions,
  TheGallery,
  BehindThePages,
  TheNumbers,
  TheReflection,
  BeyondYAP,
];

export default function PageShell() {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const [isTurning, setIsTurning] = useState(false);

  const changeChapter = (nextChapter: number, nextDirection: "next" | "previous") => {
    if (nextChapter === currentChapter || isTurning) {
      return;
    }

    setDirection(nextDirection);
    setIsTurning(true);

    window.setTimeout(() => {
      setCurrentChapter(nextChapter);
      setIsTurning(false);
    }, 260);
  };

  const goNext = () => {
    if (currentChapter < chapters.length - 1) {
      changeChapter(currentChapter + 1, "next");
    }
  };

  const goPrevious = () => {
    if (currentChapter > 0) {
      changeChapter(currentChapter - 1, "previous");
    }
  };

  const selectChapter = (index: number) => {
    if (index === currentChapter) {
      setMenuOpen(false);
      return;
    }

    changeChapter(index, index > currentChapter ? "next" : "previous");
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

        <div
          className={`chapter-content page-turn page-turn-${direction}${
            isTurning ? " page-turning" : ""
          }`}
        >
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
            disabled={currentChapter === 0 || isTurning}
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
            disabled={currentChapter === chapters.length - 1 || isTurning}
          >
            Next →
          </button>
        </div>
      </section>
    </main>
  );
}