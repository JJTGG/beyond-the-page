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
  const contentId = `week-content-${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <article className={`week-card ${isOpen ? "open" : ""}`}>
      <button
        className="week-card-trigger"
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="week-card-title">{title}</span>

        <span className="week-card-icon" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        id={contentId}
        className="week-card-content"
        aria-hidden={!isOpen}
      >
        <div className="week-card-inner">
          {sections.map((section) => (
            <section className="week-section" key={section.heading}>
              <h3>{section.heading}</h3>

              {section.paragraphs?.map((paragraph, index) => (
                <p key={`${section.heading}-paragraph-${index}`}>
                  {paragraph}
                </p>
              ))}

              {section.items && (
                <div className="week-section-items">
                  {section.items.map((item, index) => (
                    <p key={`${section.heading}-item-${index}`}>
                      {item}
                    </p>
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