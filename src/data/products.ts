export type Product = {
  name: string;
  image: string;
  alt: string;
  price: string;
  status: "available" | "coming-soon";
};

export const products: Product[] = [
  {
    name: "Give Her Butterflies Tee",
    image: "/images/tee.jpg",
    alt: "Give Her Butterflies graphic tee product photo",
    price: "Price coming soon",
    status: "coming-soon",
  },
  {
    name: "BF Crewneck",
    image: "/images/crewneck.jpg",
    alt: "BF Crewneck sweatshirt product photo",
    price: "Price coming soon",
    status: "coming-soon",
  },
  {
    name: "Butterflies Slides",
    image: "/images/slides.jpg",
    alt: "Butterflies Slides product photo",
    price: "$38",
    status: "available",
  },
];
