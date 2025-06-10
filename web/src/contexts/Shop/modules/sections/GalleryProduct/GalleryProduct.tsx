import { useState, useRef } from "preact/hooks";
import type { ComponentProps } from "preact";

interface ProductImage {
    id: string;
    src: string;
    alt: string;
}

interface GalleryProductProps {
    images: ProductImage[];
    className?: string;
}

export default function GalleryProduct({
    images,
    className = "",
}: GalleryProductProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const thumbnailsRef = useRef<HTMLDivElement>(null);

    if (!images || images.length === 0) {
        return null;
    }

    const selectedImage = images[selectedImageIndex];

    const scrollThumbnails = (direction: "left" | "right") => {
        if (!thumbnailsRef.current) return;

        const scrollAmount = 200; // Adjust scroll distance
        const currentScroll = thumbnailsRef.current.scrollLeft;
        const targetScroll =
            direction === "left"
                ? currentScroll - scrollAmount
                : currentScroll + scrollAmount;

        thumbnailsRef.current.scrollTo({
            left: targetScroll,
            behavior: "smooth",
        });
    };

    const canScrollLeft = () => {
        return thumbnailsRef.current
            ? thumbnailsRef.current.scrollLeft > 0
            : false;
    };

    const canScrollRight = () => {
        if (!thumbnailsRef.current) return false;
        const { scrollLeft, scrollWidth, clientWidth } = thumbnailsRef.current;
        return scrollLeft < scrollWidth - clientWidth - 1;
    };

    return (
        <div className={`gallery-product ${className}`}>
            {/* Main image display */}
            <div className="gallery-product__main">
                <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="gallery-product__main-image"
                    loading="eager"
                />
            </div>

            {/* Thumbnail scroll with navigation */}
            <div className="gallery-product__thumbnails-wrapper">
                <button
                    className="gallery-product__nav-button gallery-product__nav-button--left"
                    onClick={() => scrollThumbnails("left")}
                    type="button"
                    aria-label="Scroll thumbnails left"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15 18L9 12L15 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                <div
                    className="gallery-product__thumbnails"
                    ref={thumbnailsRef}
                >
                    <div className="gallery-product__thumbnails-container">
                        {images.map((image, index) => (
                            <button
                                key={image.id}
                                className={`gallery-product__thumbnail ${
                                    index === selectedImageIndex
                                        ? "gallery-product__thumbnail--active"
                                        : ""
                                }`}
                                onClick={() => setSelectedImageIndex(index)}
                                type="button"
                                aria-label={`Ver imagen ${index + 1}: ${image.alt}`}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="gallery-product__thumbnail-image"
                                    loading="lazy"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                <button
                    className="gallery-product__nav-button gallery-product__nav-button--right"
                    onClick={() => scrollThumbnails("right")}
                    type="button"
                    aria-label="Scroll thumbnails right"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9 18L15 12L9 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
