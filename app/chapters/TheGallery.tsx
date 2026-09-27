"use client";

import { useState } from "react";
import { galleryItems, GalleryCategory } from "../data/gallery";

const filters = [
  "All",
  "Teaching",
  "Books",
  "Advocacy",
  "People",
  "Behind the Scenes",
] as const;

type Filter = (typeof filters)[number];

const CLOUDINARY_BASE = "https://res.cloudinary.com/kcxmd95c";

function getImageUrl(publicId: string) {
  return `${CLOUDINARY_BASE}/image/upload/f_auto,q_auto,w_1200/${publicId}`;
}

function getVideoUrl(publicId: string) {
  return `${CLOUDINARY_BASE}/video/upload/f_mp4,q_auto:good,w_1280/${publicId}`;
}

function getVideoPoster(publicId: string) {
  return `${CLOUDINARY_BASE}/video/upload/so_0,f_jpg,q_auto,w_1200/${publicId}`;
}

export default function TheGallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === (activeFilter as GalleryCategory),
        );

  const selectedItem =
    galleryItems.find((item) => item.id === selectedId) ?? null;

  return (
    <section className="story-chapter">
      <p className="eyebrow">Chapter 5</p>

      <h1>The Gallery</h1>

      <p className="chapter-subtitle">Moments worth remembering.</p>

      <div className="chapter-intro-note">
        <p>
          Not everything worth remembering belongs in a paragraph. Some
          moments are better kept as photographs, conversations, and little
          pieces of the journey.
        </p>
      </div>

      <div className="gallery-filters" aria-label="Gallery filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`gallery-filter ${
              activeFilter === filter ? "active" : ""
            }`}
            type="button"
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {filteredItems.length > 0 ? (
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              className="gallery-item"
              type="button"
              onClick={() => setSelectedId(item.id)}
              aria-label={`Open ${item.title}`}
            >
              <div className="gallery-media">
                {item.type === "image" ? (
                  <img
                    src={getImageUrl(item.publicId)}
                    alt={item.title}
                    loading="lazy"
                  />
                ) : (
                  <video
                    className="gallery-video"
                    src={getVideoUrl(item.publicId)}
                    poster={getVideoPoster(item.publicId)}
                    muted
                    playsInline
                    preload="metadata"
                  />
                )}
              </div>

              <div className="gallery-item-info">
                <span className="gallery-item-category">
                  {item.category ?? "Story moment"}
                </span>

                <span className="gallery-item-title">{item.title}</span>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="gallery-empty">
          <p>No moments in this category yet.</p>
        </div>
      )}

      {selectedItem && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          onClick={() => setSelectedId(null)}
        >
          <div
            className="gallery-lightbox-inner"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="gallery-lightbox-close"
              type="button"
              onClick={() => setSelectedId(null)}
              aria-label="Close media"
            >
              ×
            </button>

            <div className="gallery-lightbox-media">
              {selectedItem.type === "image" ? (
                <img
                  src={getImageUrl(selectedItem.publicId)}
                  alt={selectedItem.title}
                />
              ) : (
                <video
                  src={getVideoUrl(selectedItem.publicId)}
                  poster={getVideoPoster(selectedItem.publicId)}
                  controls
                  playsInline
                  preload="metadata"
                />
              )}
            </div>

            <aside className="gallery-note">
              <p className="gallery-note-label">Sofiyah&apos;s Note</p>
              <p>{selectedItem.note}</p>
            </aside>
          </div>
        </div>
      )}
    </section>
  );
}