export type GalleryCategory =
  | "Teaching"
  | "Books"
  | "Advocacy"
  | "People"
  | "Behind the Scenes";

export type GalleryItem = {
  id: string;
  category: GalleryCategory | null;
  title: string;
  note: string;
  publicId: string;
  type: "image" | "video";
};

export const galleryItems: GalleryItem[] = [
  {
    id: "img-0027",
    category: "Books",
    title: "IMG_0027",
    note: "A moment from the journey.",
    publicId: "IMG_0027.heic",
    type: "image",
  },
  {
    id: "img-0029",
    category: "Teaching",
    title: "IMG_0029",
    note: "A moment from the journey.",
    publicId: "IMG_0029.heic",
    type: "image",
  },
  {
    id: "img-0055",
    category: "Teaching",
    title: "IMG_0055",
    note: "A moment from the journey.",
    publicId: "IMG_0055.heic",
    type: "image",
  },
  {
    id: "img-0065",
    category: "Teaching",
    title: "IMG_0065",
    note: "A moment from the journey.",
    publicId: "IMG_0065.heic",
    type: "image",
  },
  {
    id: "img-0057",
    category: "People",
    title: "IMG_0057",
    note: "A moment from the journey.",
    publicId: "IMG_0057.heic",
    type: "image",
  },
  {
    id: "img-0068",
    category: "People",
    title: "IMG_0068",
    note: "A moment from the journey.",
    publicId: "IMG_0068.heic",
    type: "image",
  },
  {
    id: "img-0069",
    category: "Teaching",
    title: "IMG_0069",
    note: "A moment from the journey.",
    publicId: "IMG_0069.heic",
    type: "image",
  },
  {
    id: "img-0054",
    category: "Teaching",
    title: "IMG_0054",
    note: "A moment from the journey.",
    publicId: "IMG_0054.heic",
    type: "image",
  },
  {
    id: "img-0038",
    category: "Teaching",
    title: "IMG_0038",
    note: "A moment from the journey.",
    publicId: "IMG_0038.heic",
    type: "image",
  },
  {
    id: "img-0043",
    category: "Teaching",
    title: "IMG_0043",
    note: "A moment from the journey.",
    publicId: "IMG_0043.heic",
    type: "image",
  },
  {
    id: "img-0070",
    category: "Teaching",
    title: "IMG_0070",
    note: "A moment from the journey.",
    publicId: "IMG_0070.heic",
    type: "image",
  },
  {
    id: "img-0050",
    category: "Teaching",
    title: "IMG_0050",
    note: "A moment from the journey.",
    publicId: "IMG_0050.heic",
    type: "image",
  },
  {
    id: "img-0066",
    category: "Teaching",
    title: "IMG_0066",
    note: "A video moment from the journey.",
    publicId: "InShot_20260927_164602889.mp4",
    type: "video",
  },
  {
    id: "img-0067",
    category: "Teaching",
    title: "IMG_0067",
    note: "A video moment from the journey.",
    publicId: "IMG_0067.mov",
    type: "video",
  },
];