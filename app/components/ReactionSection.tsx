"use client";

import { useEffect, useState } from "react";

const reactionOptions = [
  { key: "loved", label: "I loved this story." },
  { key: "inspired", label: "This inspired me." },
  { key: "thought", label: "This made me think." },
  { key: "next", label: "I want to know what happens next." },
] as const;

type ReactionKey = (typeof reactionOptions)[number]["key"];

type ReactionCounts = Record<ReactionKey, number>;

const initialCounts: ReactionCounts = {
  loved: 0,
  inspired: 0,
  thought: 0,
  next: 0,
};

export default function ReactionSection() {
  const [counts, setCounts] = useState<ReactionCounts>(initialCounts);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState<ReactionKey | null>(null);

  useEffect(() => {
    fetch("/api/react")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load reactions.");
        }

        return response.json();
      })
      .then((data: ReactionCounts) => {
        setCounts(data);
      })
      .catch(() => {
        // Keep the section usable even if the counts cannot be loaded.
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  async function handleReaction(reaction: ReactionKey) {
    if (submitting) return;

    setSubmitting(reaction);

    try {
      const response = await fetch("/api/react", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reaction }),
      });

      if (!response.ok) {
        throw new Error("Failed to save reaction.");
      }

      const data: { reaction: ReactionKey; count: number } =
        await response.json();

      setCounts((current) => ({
        ...current,
        [data.reaction]: data.count,
      }));
    } catch {
      // Keep the current UI state if the request fails.
    } finally {
      setSubmitting(null);
    }
  }

  return (
    <div className="reaction-section">
      <p className="eyebrow">If This Story Stayed With You...</p>

      <div className="reaction-options">
        {reactionOptions.map((option) => (
          <button
            key={option.key}
            type="button"
            onClick={() => handleReaction(option.key)}
            disabled={submitting !== null}
          >
            <span>{option.label}</span>
            <strong>
              {loading ? "…" : counts[option.key]}
            </strong>
          </button>
        ))}
      </div>
    </div>
  );
}