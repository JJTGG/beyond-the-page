"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedNumberProps = {
  target: number;
  suffix?: string;
  duration?: number;
};

function AnimatedNumber({
  target,
  suffix = "",
  duration = 900,
}: AnimatedNumberProps) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const element = numberRef.current;

    if (!element || hasStarted) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setDisplayValue(target);
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setHasStarted(true);

        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          const easedProgress =
            1 - Math.pow(1 - progress, 3);

          setDisplayValue(
            Math.round(easedProgress * target),
          );

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [duration, hasStarted, target]);

  return (
    <span ref={numberRef}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function TheNumbers() {
  return (
    <section className="story-chapter">
      <p className="eyebrow">Chapter 7</p>

      <h1>The Numbers</h1>

      <p className="chapter-subtitle">
        Some parts of the journey can be counted. Others cannot.
      </p>

      <div className="numbers-grid">
        <article className="number-card">
          <span className="number-value">
            <AnimatedNumber target={6} />
          </span>
          <h2>Weeks of YAP</h2>
          <p>
            Six weeks of learning, reflection, conversations and growth.
          </p>
        </article>

        <article className="number-card">
          <span className="number-value">
            <AnimatedNumber target={4} />
          </span>
          <h2>Weeks Teaching</h2>
          <p>
            Four weeks spent bringing learning into a real classroom.
          </p>
        </article>

        <article className="number-card number-card-accent">
          <span className="number-value">
            <AnimatedNumber target={3} />
          </span>
          <h2>Literacy Actions</h2>
          <p>
            Three different ways of turning a love for literacy into
            something tangible.
          </p>
        </article>

        <article className="number-card">
          <span className="number-value">
            <AnimatedNumber target={3} />
          </span>
          <h2>International Ambassador Conversations</h2>
          <p>
            Three conversations that reminded me that literacy reaches
            far beyond one community or country.
          </p>
        </article>

        <article className="number-card">
          <span className="number-value">
            <AnimatedNumber target={10} suffix="+" />
          </span>
          <h2>People Inspired or Interested</h2>
          <p>
            People reached through conversations and advocacy around
            literacy.
          </p>
        </article>

        <article className="number-card number-card-note">
          <span className="number-value">∞</span>
          <h2>Books Still to Read</h2>
          <p>
            Because some numbers are better left without an ending.
          </p>
        </article>
      </div>
    </section>
  );
}