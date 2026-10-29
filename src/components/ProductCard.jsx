import React, { useState } from 'react';

export default function ProductCard({
  product,
  onProductSelect,
  onAddToCart,
  onAddToWishlist,
  isWishlisted = false,
}) {
  const [selectedSize, setSelectedSize] = useState('50ml');
  const [justAdded, setJustAdded] = useState(false);

  const currentPrice = product.sizes?.[selectedSize]?.price || (selectedSize === '30ml' ? '₹349' : '₹599');
  const currentOriginalPrice = product.sizes?.[selectedSize]?.originalPrice || (selectedSize === '30ml' ? '₹499' : '₹799');

  const handleAddToCartClick = (e) => {
    e.stopPropagation();
    onAddToCart(product, 1, selectedSize, currentPrice);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
    }, 1400);
  };

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    onAddToWishlist(product);
  };

  const size30Label = product.sizes?.['30ml']?.label || '30 ML';
  const size50Label = product.sizes?.['50ml']?.label || '50 ML';

  return (
    <div className="luxury-product-card" onClick={() => onProductSelect(product)}>
      {/* ── Media / Visual Stage ── */}
      <div className="luxury-card-media">
        <img
          src={product.image}
          alt={product.title}
          className="luxury-card-img"
          loading="lazy"
        />

        {/* Ambient Gradient Scrim */}
        <div className="luxury-card-scrim" />

        {/* Single Smart Badge */}
        <div className="luxury-badge-stack">
          {product.badge && product.badge !== '35% OIL EXTRAIT' ? (
            <span className="luxury-pill-badge luxury-badge-bestseller">
              {product.badge}
            </span>
          ) : (
            <span className="luxury-pill-badge luxury-badge-oil">
              35% EXTRAIT
            </span>
          )}
        </div>

        {/* Quick View Button on Hover (Desktop) */}
        <div className="luxury-hover-actions">
          <button
            type="button"
            className="luxury-hover-action-btn luxury-btn-quickview"
            onClick={(e) => {
              e.stopPropagation();
              onProductSelect(product);
            }}
          >
            <span className="material-symbols-outlined">visibility</span>
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* ── Clean & User-Friendly Product Details ── */}
      <div className="luxury-card-content">
        {/* Brand & Category Tag (Single clean line) */}
        <div className="luxury-card-meta">
          <span className="luxury-meta-brand">KAIRA</span>
          <span className="luxury-meta-category">{(product.category || 'EXTRAIT').toUpperCase()}</span>
        </div>

        {/* Product Title */}
        <h3 className="luxury-card-title" title={product.title}>
          {product.title}
        </h3>

        {/* Price Row (Clean, bold, non-repeated) */}
        <div className="luxury-card-pricing">
          <span className="luxury-price-current">{currentPrice}</span>
          {currentOriginalPrice && (
            <span className="luxury-price-original">{currentOriginalPrice}</span>
          )}
        </div>

        {/* Direct Size Selection Pills (No bulky box, no overflow) */}
        <div className="luxury-size-pills-row" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            className={`luxury-size-pill ${selectedSize === '30ml' ? 'active' : ''}`}
            onClick={() => setSelectedSize('30ml')}
          >
            {size30Label}
          </button>
          <button
            type="button"
            className={`luxury-size-pill ${selectedSize === '50ml' ? 'active' : ''}`}
            onClick={() => setSelectedSize('50ml')}
          >
            {size50Label}
          </button>
        </div>

        {/* Add to Bag Button (Single line, no duplicated price) */}
        <button
          type="button"
          className={`luxury-add-cart-btn ${justAdded ? 'added' : ''}`}
          onClick={handleAddToCartClick}
          aria-label={`Add ${product.title} to bag`}
        >
          {justAdded ? (
            <>
              <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>
                check
              </span>
              <span>ADDED TO BAG</span>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>
                shopping_bag
              </span>
              <span>ADD TO BAG</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
