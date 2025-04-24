import type { ProductWithImages } from '@/interfaces';
import { ProductCard } from './ProductCard';

interface ProductListProps {
  products: ProductWithImages[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={product.id + index} product={product} />
      ))}
    </div>
  );
};
