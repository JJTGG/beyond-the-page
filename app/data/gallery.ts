export type GalleryCategory =
  | "Teaching"
  | "Books"
  | "Advocacy"
  | "People"
  | "Behind the Scenes";

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  title: string;
  note: string;
  publicId: string;
  type: "image";
};

export const galleryItems: GalleryItem[] = [
  {
    id: "students-choosing-books",
    category: "Books",
    title: "Students choosing their books",
    note:
      "I expected them to be excited. I didn't expect them to start reading immediately.",
    publicId: "REPLACE_WITH_CLOUDINARY_PUBLIC_ID",
    type: "image",
  },
];