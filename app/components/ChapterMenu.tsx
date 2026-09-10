type ChapterMenuProps = {
  chapters: string[];
  currentChapter: number;
  onSelect: (index: number) => void;
  onClose: () => void;
};

export default function ChapterMenu({
  chapters,
  currentChapter,
  onSelect,
  onClose,
}: ChapterMenuProps) {
  return (
    <div className="chapter-menu" role="dialog" aria-modal="true">
      <div className="chapter-menu-inner">
        <div className="chapter-menu-header">
          <div>
            <p className="menu-eyebrow">Beyond the Page</p>
            <h2>Contents</h2>
          </div>

          <button
            className="menu-close"
            type="button"
            onClick={onClose}
            aria-label="Close contents"
          >
            ×
          </button>
        </div>

        <nav aria-label="Chapter menu">
          <ol className="chapter-list">
            {chapters.map((chapter, index) => (
              <li key={chapter}>
                <button
                  className={`chapter-link ${
                    currentChapter === index ? "active" : ""
                  }`}
                  type="button"
                  onClick={() => onSelect(index)}
                  aria-current={
                    currentChapter === index ? "page" : undefined
                  }
                >
                  <span className="chapter-index">
                    {String(index).padStart(2, "0")}
                  </span>

                  <span>{chapter}</span>
                </button>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}