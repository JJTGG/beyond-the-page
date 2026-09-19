"use client";

import { useState } from "react";

const reflections = [
  {
    id: "expected",
    title: "What I Expected",
    content: [
      "When I started YAP, I expected to spend six weeks completing literacy activities, learning from the programme and doing my part as a Youth Ambassador.",
      "I knew I wanted to teach, donate books and participate in literacy advocacy, but I think I viewed those things mostly as individual activities that I needed to complete.",
      "I didn't expect the experience to make me think so much about access.",
      "I especially didn't expect something as simple as giving a child a book to make me question how often we mistake a lack of opportunity for a lack of interest.",
    ],
  },
  {
    id: "actually-happened",
    title: "What Actually Happened",
    content: [
      "The experience became much more personal than I expected.",
      "I taught English and Basic Science to secondary school students, donated books, spoke with fellow Youth Ambassadors from different countries and advocated for literacy beyond the activities I had planned.",
      "The book donation particularly stayed with me.",
      "I expected the students to be happy to receive books. I didn't expect them to immediately start reading them, become completely absorbed in the stories and then have one student return the next day with his friends asking if they could have books too.",
      "That moment changed the way I thought about the problem.",
      "The interest was already there.",
      "Access was the missing piece.",
    ],
  },
  {
    id: "surprised",
    title: "What Surprised Me",
    content: [
      "I was surprised by how much the smallest moments stayed with me.",
      "I expected the teaching itself to be memorable. Instead, I remember things like students telling me they looked forward to my classes, children crowding around the books and Dolapo returning with his friends the next day.",
      "I was also surprised by how far advocacy could travel.",
      "I started talking about literacy and my WLF work online, and people around me began asking questions. Some became interested enough to consider applying for the next Youth Ambassador programme themselves.",
      "It made me realise that advocacy doesn't always look like a huge campaign.",
      "Sometimes it starts with simply talking about something enough for another person to become curious.",
    ],
  },
  {
    id: "literacy",
    title: "What I Learned About Literacy",
    content: [
      "I learned that literacy is about much more than the ability to read and write.",
      "It is also about access, curiosity, confidence, opportunity and the ability to imagine possibilities beyond your immediate circumstances.",
      "I also learned that telling children that reading is important isn't always enough.",
      "Sometimes they need books that interest them.",
      "Sometimes they need someone to make learning feel enjoyable.",
      "Sometimes they need a space where reading is encouraged.",
      "And sometimes, they simply need someone to put a book in their hands.",
      "My YAP experience made me think less about “How do we convince children to love reading?” and more about: “What might happen if we gave more children the opportunity to discover why they might love it?”",
    ],
  },
  {
    id: "myself",
    title: "What I Learned About Myself",
    content: [
      "I learned that I enjoy turning things I care about into something other people can experience.",
      "I already knew that I loved books.",
      "I didn't know how much I would enjoy sharing that love through teaching, conversations and advocacy.",
      "I also learned that I don't need to have everything figured out before I begin.",
      "I started YAP with a genuine interest in literacy and a willingness to participate. Along the way, I found myself thinking about bigger ideas, including A Colourful Life and my long-term dream of helping create a community library.",
      "The experience also reminded me that my voice can have an effect beyond the people directly in front of me.",
      "I don't need to be the loudest person in the room to contribute something meaningful.",
    ],
  },
  {
    id: "differently",
    title: "What I Would Do Differently",
    content: [
      "If I were doing YAP again, I would document more from the beginning.",
      "There were so many small moments that I didn't photograph, record or write down immediately because I was busy experiencing them.",
      "I would also start planning my literacy action earlier, especially the book donation, because finding enough books was one of the practical challenges I encountered.",
      "Most importantly, I would give myself more room to experiment.",
      "I think I spent some time trying to make sure I was doing YAP “properly,” when I could have trusted myself more and allowed my own ideas to develop earlier.",
    ],
  },
  {
    id: "forward",
    title: "What I Want to Carry Forward",
    content: [
      "I want to carry forward the idea that access matters.",
      "I want to continue creating opportunities for young people to learn, read, ask questions and discover things beyond what their immediate circumstances might suggest is possible.",
      "I also want to continue using my voice to make people curious about issues I care about, whether through conversations, writing, teaching, social media or future projects.",
      "And I want to keep building on the idea that began during YAP: A Colourful Life. ✨ 🌈",
      "Maybe it starts with a colourful book in a child's hands.",
      "Maybe one day it becomes a reading space.",
      "Maybe eventually, it becomes the kind of community library I dreamed about as a child.",
      "I don't know exactly what the next page looks like yet.",
      "But I know I want to keep turning it.",
    ],
  },
];

export default function TheReflection() {
  const [openReflection, setOpenReflection] = useState<string | null>(null);

  const toggleReflection = (id: string) => {
    setOpenReflection((current) => (current === id ? null : id));
  };

  return (
    <section className="story-chapter reflection-chapter">
      <p className="eyebrow">Chapter 8</p>

      <h1>The Reflection</h1>

      <p className="chapter-subtitle">
        What changed after I turned the page?
      </p>

      <div className="chapter-intro-note">
        <p>
          Six weeks gave me plenty to think about. Some things changed
          quietly, while others became impossible to ignore.
        </p>
      </div>

      <div className="reflection-list">
        {reflections.map((reflection, index) => {
          const isOpen = openReflection === reflection.id;

          return (
            <article
              className={`reflection-card ${
                isOpen ? "open" : ""
              }`}
              key={reflection.id}
            >
              <button
                className="reflection-trigger"
                type="button"
                onClick={() => toggleReflection(reflection.id)}
                aria-expanded={isOpen}
                aria-controls={`reflection-${reflection.id}`}
              >
                <span className="reflection-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="reflection-title">
                  {reflection.title}
                </span>

                <span
                  className="reflection-icon"
                  aria-hidden="true"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <div
                id={`reflection-${reflection.id}`}
                className="reflection-content"
                aria-hidden={!isOpen}
              >
                <div className="reflection-content-inner">
                  {reflection.content.map((paragraph, paragraphIndex) => (
                    <p key={`${reflection.id}-${paragraphIndex}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}