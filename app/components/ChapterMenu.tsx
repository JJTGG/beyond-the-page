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
    <div>
      <div>
        <p>Contents</p>

        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>

      <nav aria-label="Chapter menu">
        {chapters.map((chapter, index) => (
          <button
            key={chapter}
            type="button"
            onClick={() => onSelect(index)}
            aria-current={currentChapter === index ? "page" : undefined}
          >
            {chapter}
          </button>
        ))}
      </nav>
    </div>
  );
}