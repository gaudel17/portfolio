import { type GalleryItem } from "@/app/types";

const graphicsDesign: GalleryItem[] = [
  {
    id: "gd-1",
    title: "New Year 2026",
    image: "/gallery/graphics/new-year-2026.jpg",
  },
  {
    id: "gd-2",
    title: "Aasika — LinkedIn Post",
    image: "/gallery/graphics/aasika-linkedin-final.jpg",
  },
  {
    id: "gd-3",
    title: "Chandari Bhandari",
    image: "/gallery/graphics/chandari-bhandari.jpg",
  },
  {
    id: "gd-4",
    title: "Cop Bipson",
    image: "/gallery/graphics/cop-bipson.jpg",
  },
  {
    id: "gd-5",
    title: "Majid Ansari Podcast",
    image: "/gallery/graphics/majid-ansari-podcast.jpg",
  },
  {
    id: "gd-6",
    title: "Poster Design",
    image: "/gallery/graphics/poster-design.jpg",
  },
  {
    id: "gd-7",
    title: "Podcast Thumbnail",
    image: "/gallery/graphics/podcast-thumbnail.jpg",
  },
  {
    id: "gd-8",
    title: "Republic Day",
    image: "/gallery/graphics/republic-day.jpg",
  },
  {
    id: "gd-9",
    title: "Redesigned Poster",
    image: "/gallery/graphics/redesigned-poster.jpg",
  },
  {
    id: "gd-10",
    title: "Shoes Poster",
    image: "/gallery/graphics/shoes-poster.jpg",
  },
  {
    id: "gd-11",
    title: "UAE vs Nepal",
    image: "/gallery/graphics/uae-vs-nepal.jpg",
  },
  {
    id: "gd-12",
    title: "Creative Design",
    image: "/gallery/graphics/creative-design.jpg",
  },
];

const literature: GalleryItem[] = [
  {
    id: "lit-1",
    title: "Literature 01",
    image: "/gallery/literature/literature-01.png",
  },
  {
    id: "lit-2",
    title: "Literature 02",
    image: "/gallery/literature/literature-02.png",
  },
  {
    id: "lit-3",
    title: "Literature 03",
    image: "/gallery/literature/literature-03.png",
  },
];

export function getGraphicsDesign() {
  return graphicsDesign;
}

export function getLiterature() {
  return literature;
}
