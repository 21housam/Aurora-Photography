import React from 'react';
import LikeButton from './LikeButton';

/**
 * ProductCard - Modern gallery card with hover overlay
 */
function ProductCard({ product, onLikeToggle }) {
  return (
    <article className="gallery-item group">
      <img
        src={product.image}
        alt={product.alt}
        loading="lazy"
        className="gallery-image"
      />
      <div className="gallery-info">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <LikeButton
          liked={product.liked}
          onToggle={() => onLikeToggle(product.id)}
        />
      </div>
    </article>
  );
}

export default ProductCard;
