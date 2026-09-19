"use client";

import { useState } from "react";

const facts = [
  {
    id: "reading",
    label: "Reading Fact",
    title: "My Reading Fact",
    content:
      "I genuinely love reading, and I had reached a point where I had finished almost every book in my personal library before my second year of Secondary school. After that, I became a regular borrower and second-hand book hunter.",
  },
  {
    id: "classroom",
    label: "Classroom Fact",
    title: "My Classroom Fact",
    content:
      "I didn't want my four-week teaching experience to feel like students were simply sitting through another school lesson. I deliberately tried to make my classes interactive, funny and relatable, partly because I wanted to recreate the kind of classes I personally enjoyed as a secondary school student.",
  },
  {
    id: "books",
    label: "Book Fact",
    title: "My Book Fact",
    content:
      "I learned that children can already be interested in reading before they have access to enough books. During my book donation, the students were especially drawn to colourful, picture-filled books. Once they received them, they started reading almost immediately. I didn't have to convince them that books were interesting. They just needed the opportunity to discover it for themselves.",
  },
  {
    id: "ambassador",
    label: "Ambassador Fact",
    title: "My Ambassador Fact",
    content:
      "During YAP, I had literacy conversations with young people from Egypt, Sri Lanka and Lebanon amongst others. It was interesting hearing how literacy had shaped their lives and how their experiences differed from mine while still having some things in common.",
  },
  {
    id: "random",
    label: "Random Thought",
    title: "Sofiyah's Random Thought",
    content:
      "I thought the hardest part would be getting children interested in reading. Then I gave them books and realised they were already interested. The harder question was: why didn't they have enough books in the first place?",
  },
];

const didYouKnow = [
  {
    id: "global",
    label: "The Global Picture",
    icon: "🌍",
    content: "739 million adults worldwide still lack basic literacy skills.",
  },
  {
    id: "women",
    label: "Women & Literacy",
    icon: "👩🏾",
    content:
      "Two-thirds of adults without basic literacy skills are women. That's approximately 466 million women worldwide.",
  },
  {
    id: "children",
    label: "Children & Reading",
    icon: "📚",
    content:
      "4 in 10 children are not reaching minimum proficiency in reading. UNESCO reports this as part of the continuing global learning crisis.",
  },
  {
    id: "wlf",
    label: "A WLF Fact",
    icon: "🌱",
    content:
      "85% of children from poor backgrounds don't own a single book.",
  },
  {
    id: "progress",
    label: "Literacy Has Changed",
    icon: "🌍",
    content:
      "About 50 years ago, almost 1 in 4 young people lacked basic literacy skills. Today, that figure is less than 1 in 10. So there has been real progress, even though major gaps remain.",
  },
];

export default function BehindThePages() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  const [activeFact, setActiveFact] = useState(0);

  const toggleCard = (id: string) => {
    setFlippedCard((current) => (current === id ? null : id));
  };

  const nextFact = () => {
    setActiveFact((current) =>
      current === didYouKnow.length - 1 ? 0 : current + 1,
    );
  };

  const previousFact = () => {
    setActiveFact((current) =>
      current === 0 ? didYouKnow.length - 1 : current - 1,
    );
  };

  const currentFact = didYouKnow[activeFact];

  return (
    <section className="story-chapter">
      <p className="eyebrow">Chapter 6</p>

      <h1>Behind the Pages</h1>

      <p className="chapter-subtitle">
        Things I learned along the way.
      </p>

      <div className="chapter-intro-note">
        <p>
          Not every discovery needed a whole chapter. Some were just
          little things I noticed along the way.
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
                  <span className="fact-card-label">
                    {fact.label}
                  </span>

                  <strong>{fact.title}</strong>

                  <span className="fact-card-hint">
                    Tap to discover
                  </span>
                </span>

                <span className="fact-card-back">
                  <span className="fact-card-label">
                    {fact.label}
                  </span>

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

      <div className="did-you-know">
        <div className="did-you-know-heading">
          <p className="eyebrow">Little things worth knowing</p>

          <h2>💡 Did You Know?</h2>
        </div>

        <article className="did-you-know-card">
          <span className="did-you-know-icon">
            {currentFact.icon}
          </span>

          <span className="did-you-know-count">
            {activeFact + 1} / {didYouKnow.length}
          </span>

          <h3>{currentFact.label}</h3>

          <p>{currentFact.content}</p>
        </article>

        <div className="did-you-know-controls">
          <button
            type="button"
            onClick={previousFact}
            aria-label="Previous fact"
          >
            ←
          </button>

          <div className="did-you-know-dots" aria-hidden="true">
            {didYouKnow.map((fact, index) => (
              <span
                key={fact.id}
                className={index === activeFact ? "active" : ""}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextFact}
            aria-label="Next fact"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}