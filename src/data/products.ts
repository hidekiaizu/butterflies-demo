export type Product = {
  id: string;
  name: string;
  description: string;
  priceLabel: string;
  image: string;
  alt: string;
  sizes: string[];
};

export const products: Product[] = [
  {
    id: "give-her-butterflies-tee",
    name: "Give Her Butterflies Tee",
    description:
      "A relaxed tee with nostalgic illustration artwork and soft drop-ready proportions.",
    priceLabel: "Price coming soon",
    image: "/images/tee.jpg",
    alt: "Cream Give Her Butterflies graphic tee with illustrated artwork.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "bf-crewneck",
    name: "BF Crewneck",
    description:
      "A heavyweight crewneck with a quiet BF mark, built for clean everyday layering.",
    priceLabel: "Price coming soon",
    image: "/images/crewneck.jpg",
    alt: "Gray BF crewneck sweatshirt with navy collar and cuffs.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "butterflies-slides",
    name: "Butterflies Slides",
    description:
      "A future footwear piece reserved for the full Butterflies drop system.",
    priceLabel: "Price coming soon",
    image: "/images/butterflies-slides.jpg",
    alt: "Black Butterflies slides with white wordmark on a black background.",
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
  },
];

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}
