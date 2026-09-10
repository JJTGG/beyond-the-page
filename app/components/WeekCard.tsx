type WeekCardProps = {
  title: string;
  sections: {
    heading: string;
    paragraphs?: string[];
    items?: string[];
  }[];
  isOpen: boolean;
  onToggle: () => void;
};

export default function WeekCard({
  title,
  sections,
  isOpen,
  onToggle,
}: WeekCardProps) {
  return (
    <article className={`week-card ${isOpen ? "open" : ""}`}>
      <button
        className="week-card-trigger"
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="week-card-title">{title}</span>

        <span className="week-card-icon" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div className="week-card-content">
        <div className="week-card-inner">
          {sections.map((section) => (
            <section className="week-section" key={section.heading}>
              <h3>{section.heading}</h3>

              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {section.items && (
                <div className="week-section-items">
                  {section.items.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}