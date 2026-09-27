import { useState } from 'react';
import './ProductCard.css';

function ProductCard({ name, price, image, description, tag }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  function handleWishlistToggle() {
    setIsWishlisted((currentValue) => !currentValue);
  }

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img className="product-image" src={image} alt={name} />
        <span className="product-tag">{tag}</span>
        <button
          className={`wishlist-button${isWishlisted ? ' is-wishlisted' : ''}`}
          type="button"
          aria-label={isWishlisted ? `Remove ${name} from wishlist` : `Add ${name} to wishlist`}
          aria-pressed={isWishlisted}
          onClick={handleWishlistToggle}
        >
          {isWishlisted ? '♥' : '♡'}
        </button>
      </div>
      <div className="product-details">
        <div className="product-title-row">
          <h3>{name}</h3>
          <p className="product-price">{price}</p>
        </div>
        <p className="product-description">{description}</p>
        <button className="add-button" type="button">
          <span>Add to bag</span>
          <span aria-hidden="true">+</span>
        </button>
      </div>
    </article>
  );
}

export default ProductCard;