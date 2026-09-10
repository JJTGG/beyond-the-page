import SixWeeksContent from "../components/SixWeeks";

export default function SixWeeks() {
  return (
    <section className="story-chapter">
      <p className="eyebrow">Chapter 2</p>

      <h1>Six Weeks of Learning</h1>

      <p className="chapter-subtitle">
        A chapter of learning, reflection and growth.
      </p>

      <div className="chapter-intro-note">
        <p>
          Six weeks of questions, conversations, reflections and small
          steps toward finding my own voice in literacy advocacy.
        </p>
      </div>

      <SixWeeksContent />
    </section>
  );
}