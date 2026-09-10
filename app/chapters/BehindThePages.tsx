"use client";

import { useState } from "react";

const facts = [
  {
    id: "reading",
    label: "Reading Fact",
    title: "My Reading Fact",
    content:
      "[A personal reading fact or discovery from Sofiyah's journey.]",
  },
  {
    id: "classroom",
    label: "Classroom Fact",
    title: "My Classroom Fact",
    content:
      "[Something surprising Sofiyah discovered while teaching.]",
  },
  {
    id: "books",
    label: "Book Fact",
    title: "My Book Fact",
    content:
      "[Something interesting from the book donation experience.]",
  },
  {
    id: "ambassador",
    label: "Ambassador Fact",
    title: "My Ambassador Fact",
    content:
      "[Something interesting about connecting with ambassadors across countries.]",
  },
  {
    id: "random",
    label: "Random Thought",
    title: "Sofiyah's Random Thought",
    content:
      "[A funny, unexpected, or personal observation from the journey.]",
  },
];

export default function BehindThePages() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setFlippedCard((current) => (current === id ? null : id));
  };

  return (
    <section className="story-chapter">
      <p className="eyebrow">Chapter 6</p>

      <h1>Behind the Pages</h1>

      <p className="chapter-subtitle">
        Things I learned along the way.
      </p>

      <div className="chapter-intro-note">
        <p>
          Not every discovery needed a whole chapter. Some were just little
          things I noticed along the way.
        </p>
      </div>

      <div className="facts-grid">
        {facts.map((fact) => {
          const isFlipped = flippedCard === fact.id;

          return (
            <button
              key={fact.id}
              className={`fact-card ${isFlipped ? "flipped" : ""}`}
              type="button"
              onClick={() => toggleCard(fact.id)}
              aria-pressed={isFlipped}
            >
              <span className="fact-card-inner">
                <span className="fact-card-front">
                  <span className="fact-card-label">{fact.label}</span>

                  <strong>{fact.title}</strong>

                  <span className="fact-card-hint">
                    Tap to discover
                  </span>
                </span>

                <span className="fact-card-back">
                  <span className="fact-card-label">Did You Know?</span>

                  <span>{fact.content}</span>

                  <span className="fact-card-hint">
                    Tap to flip back
                  </span>
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}