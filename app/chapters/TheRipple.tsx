"use client";

import { useState } from "react";

const timeline = [
  {
    title: "The Story Reached Me",
    text: "I learned about Nabira and her educational situation.",
  },
  {
    title: "I Decided to Act",
    text: "I chose to help raise funds towards her educational needs.",
  },
  {
    title: "I Started Talking About Her Story",
    text: "I shared the fundraiser across my networks and encouraged people to contribute or share.",
  },
  {
    title: "The Story Travelled",
    text: "I used LinkedIn, Instagram, Substack and WhatsApp to reach different audiences.",
  },
  {
    title: "People Started Responding",
    text: "People donated, shared the fundraiser and began asking questions about Nabira and why I was supporting her.",
  },
  {
    title: "The Ripple Grew",
    text: "Something I initially started as one fundraising effort began creating conversations about literacy, education and the work I was doing with WLF.",
  },
];

export default function TheRipple() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="story-chapter ripple-chapter">
      <p className="eyebrow">Chapter 3</p>

      <h1>The Ripple</h1>

      <p className="chapter-subtitle">
        When one action reaches beyond you.
      </p>

      <div className="story-grid">
        <article className="story-card">
          <h2>Nabira&apos;s Story</h2>

          <p>
            Nabira is a 16-year-old student who dreams of becoming a
            lawyer. Her story became part of my YAP journey because her
            education was at risk, and I felt that her circumstances
            should not be allowed to decide how far her dreams could go.
          </p>

          <p>
            The goal was to raise money to help keep her in school for
            the next academic year and support the educational resources
            she needed.
          </p>

          <p>
            What stayed with me was how ordinary her dream sounded: she
            wanted to continue her education and eventually become a
            lawyer. But behind that simple dream was a financial barrier
            that could potentially interrupt it.
          </p>

          <p>
            I couldn&apos;t solve every problem surrounding education
            access, but I could do something about this one.
          </p>
        </article>

        <article className="story-card">
          <h2>Why I Chose to Help</h2>

          <p>
            I chose to help Nabira because education is one of the things
            I believe should not become inaccessible simply because
            someone cannot afford it.
          </p>

          <p>
            My YAP experience had already made me think more deeply about
            the relationship between literacy, education and opportunity.
            I had been teaching students, talking about books and seeing
            how much young people could do when they were given access to
            learning resources.
          </p>

          <p>
            Nabira&apos;s situation made that idea feel even more
            personal.
          </p>

          <p>
            I couldn&apos;t just talk about why education matters and
            then scroll past a young person who needed help staying in
            school.
          </p>

          <p>
            So I decided to use what I had: my voice, my social media
            platforms and the people around me.
          </p>
        </article>
      </div>

      <article className="story-card ripple-timeline-card">
        <div className="ripple-section-heading">
          <p className="eyebrow">The Fundraising Journey</p>
          <h2>How the story travelled</h2>
          <p>
            One step led to another. Tap through the journey.
          </p>
        </div>

        <div className="ripple-timeline">
          <div className="ripple-timeline-steps">
            {timeline.map((step, index) => (
              <button
                key={step.title}
                className={`ripple-timeline-step ${
                  activeStep === index ? "active" : ""
                }`}
                type="button"
                onClick={() => setActiveStep(index)}
                aria-label={`Show step ${index + 1}: ${step.title}`}
                aria-pressed={activeStep === index}
              >
                <span className="ripple-timeline-dot">
                  {index + 1}
                </span>
                <span className="ripple-timeline-label">
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          <div className="ripple-timeline-detail">
            <p className="ripple-timeline-count">
              Step {activeStep + 1} of {timeline.length}
            </p>

            <h3>{timeline[activeStep].title}</h3>

            <p>{timeline[activeStep].text}</p>
          </div>
        </div>
      </article>

      <div className="story-grid">
        <article className="story-card">
          <h2>The Ripple Effect</h2>

          <p>
            The fundraising didn&apos;t only create a financial response.
          </p>

          <p>
            Friends and family who saw me fundraising and talking about
            literacy began asking me questions about literacy, the World
            Literacy Foundation and what exactly I was doing.
          </p>

          <p>
            Some of those conversations went further than I expected.
          </p>

          <p>
            I can now confidently say that more than 30 people have
            expressed interest in applying for the next WLF Youth
            Ambassador programme.
          </p>

          <p>
            That made me realise something:
          </p>

          <div className="chapter-intro-note">
            <p>
              Sometimes advocacy doesn&apos;t end with the person
              you&apos;re trying to reach.
            </p>
            <p>
              Someone sees you talking about an issue.
            </p>
            <p>They become curious.</p>
            <p>They ask a question.</p>
            <p>They learn something.</p>
            <p>
              And eventually, they might decide to act themselves.
            </p>
          </div>

          <p>
            That is the ripple. ✨
          </p>
        </article>

        <article className="story-card story-card-highlight">
          <h2>The Progress</h2>

          <div className="ripple-progress">
            <div>
              <span className="ripple-progress-label">
                Fundraising goal
              </span>
              <strong>approximately $360</strong>
            </div>

            <div>
              <span className="ripple-progress-label">Raised</span>
              <strong>$30+</strong>
            </div>
          </div>

          <div className="ripple-platforms">
            <span>LinkedIn</span>
            <span>Instagram</span>
            <span>Substack</span>
            <span>WhatsApp</span>
          </div>
        </article>

        <article className="story-card story-card-highlight">
          <h2>What I Learned</h2>

          <p>
            I learned that advocacy isn&apos;t always about having a
            huge platform or being able to solve an entire problem.
          </p>

          <p>
            Sometimes it is simply about noticing a problem, caring
            enough to speak about it and being willing to ask other
            people to care too.
          </p>

          <p>
            I also learned that people are often more willing to engage
            when they can connect with a real person and a real story
            rather than just a statistic.
          </p>

          <p>
            Most importantly, I learned that one action can create
            another action.
          </p>

          <p>
            I started by wanting to help one young person continue her
            education.
          </p>

          <p>
            Along the way, I found myself having conversations with
            people who had never heard of WLF, literacy advocacy or the
            work I was doing.
          </p>

          <p>
            And some of them now want to get involved themselves.
          </p>

          <p>
            That is what The Ripple means to me.
          </p>

          <p>
            You don&apos;t always get to see how far an action travels
            after you make it.
          </p>
        </article>
      </div>
    </section>
  );
}