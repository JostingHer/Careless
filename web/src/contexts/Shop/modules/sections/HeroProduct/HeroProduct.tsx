import { getHtmlSimpleCopy } from "@/common/utils/get-html-render";
import GalleryProduct from "../GalleryProduct/GalleryProduct";

interface ProductImage {
    id: string;
    src: string;
    alt: string;
}

interface Product {
    id: string;
    name: string;
    price: string;
    description: string;
    images: ProductImage[];
}

interface HeroProductProps {
    product: Product;
}

export default function HeroProduct({ product }: HeroProductProps) {
    const copy = getHtmlSimpleCopy(product.description);

    return (
        <section className="hero-product">
            <div className="hero-product__container">
                <div className="hero-product__gallery">
                    <GalleryProduct
                        images={product.images}
                        className="hero-product__gallery-component"
                    />
                </div>

                <div className="hero-product__info">
                    <h1 className="hero-product__title">{product.name}</h1>
                    <p className="hero-product__price">{product.price}</p>
                    <p className="hero-product__description">{copy}</p>

                    <div className="hero-product__actions">
                        <button className="hero-product__button hero-product__button--primary">
                            Añadir al carrito
                        </button>
                        <button className="hero-product__button hero-product__button--secondary">
                            Comprar ahora
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
