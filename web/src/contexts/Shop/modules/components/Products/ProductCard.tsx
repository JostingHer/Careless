import type { ProductWithImages } from '@/interfaces';
import { useState } from 'react';

interface Props {
  product: ProductWithImages;
}

export const ProductCard = ({ product }: Props) => {
  const images = product.images.split(',').map((img) => {
    return img.startsWith('http')
      ? img
      : `${import.meta.env.PUBLIC_URL}/images/products/${img}`;
  });

  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <a href={`/products/${product.slug}`} className="product-card">
      <img
        src={currentImage}
        alt={product.title}
        className="product-card__image"
        onMouseEnter={() => setCurrentImage(images[1] ?? images[0])}
        onMouseLeave={() => setCurrentImage(images[0])}
      />
      <h4 className="product-card__title">{product.title}</h4>
      <p className="product-card__price">${product.price}</p>
    </a>
  );
};
