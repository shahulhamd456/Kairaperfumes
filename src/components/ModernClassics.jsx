import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { allProducts } from '../data/products';

export default function ModernClassics({
  onProductSelect,
  onAddToCart,
  onAddToWishlist,
  wishlist = [],
  onSeeAll,
}) {
  const [addedId, setAddedId] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState({
    1: '50ml',
    2: '50ml',
    3: '50ml',
    4: '50ml',
    5: '50ml',
    6: '50ml',
  });

  // Display only 1 row of products on the homepage:
  // 4 items on desktop (1 row in 4-col grid)
  const homeProducts = allProducts.slice(0, 4);

  const handleSizeChange = (e, productId, size) => {
    e.stopPropagation();
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleQuickAdd = (e, product) => {
    e.stopPropagation();
    const size = selectedSizes[product.id] || '50ml';
    const price = product.sizes?.[size]?.price || (size === '30ml' ? '₹349' : '₹599');
    onAddToCart(product, 1, size, price);
    setAddedId(product.id);
    setTimeout(() => {
      setAddedId((curr) => (curr === product.id ? null : curr));
    }, 1500);
  };

  return (
    <section className="kaira-human-classics-section" id="modern-classics">
      <Container fluid className="px-lg-5 px-3">
        {/* Section Header */}
        <div className="d-flex flex-wrap justify-content-between align-items-end mb-4 mb-lg-5">
          <div>
            <span className="kaira-editorial-label">BESTSELLING PERFUMES</span>
            <h2 className="kaira-editorial-heading">Our Bestselling Perfumes</h2>
            <p className="kaira-editorial-subheading">
              Artisan perfumes made with 35% pure perfume oil concentration for rich, 14-hour fragrance.
            </p>
          </div>
          <div className="mt-3 mt-md-0">
            <button
              type="button"
              className="kaira-editorial-link border-0 bg-transparent p-0"
              onClick={onSeeAll}
              aria-label="See all products on dedicated page"
            >
              <span>SEE ALL ({allProducts.length})</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* 4 Products Showcase:
            - Desktop/Tablet (>= 768px): 4 items in 1 line (4 columns)
            - Mobile (< 768px): 4 items in 2 lines (2 columns x 2 rows) */}
        <div className="kaira-human-grid">
          {homeProducts.map((product) => {
            const currentSize = selectedSizes[product.id] || '50ml';
            const currentPrice =
              product.sizes?.[currentSize]?.price || (currentSize === '30ml' ? '₹349' : '₹599');
            const originalPrice = product.sizes?.[currentSize]?.originalPrice;
            const isWishlisted = wishlist.some((w) => w.id === product.id);

            return (
              <div
                key={product.id}
                className="kaira-human-card"
                onClick={() => onProductSelect(product)}
              >
                {/* Visual Stage */}
                <div className="kaira-human-stage">
                  {/* Subtle, quiet single badge */}
                  <span className="kaira-subtle-badge">35% PURE OIL</span>

                  {/* Flacon Image */}
                  <div className="flacon-holder">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="flacon-img"
                      loading="lazy"
                    />
                  </div>

                  {/* Slide-Up Quick View on Hover */}
                  <div className="hover-action-wrap">
                    <button
                      type="button"
                      className="hover-quick-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        onProductSelect(product);
                      }}
                    >
                      QUICK VIEW
                    </button>
                  </div>
                </div>

                {/* Card Editorial Details */}
                <div className="kaira-human-body">
                  <div className="d-flex justify-content-between align-items-baseline mb-1">
                    <span className="brand-tag">KAIRA</span>
                    <span className="category-tag">{product.category.toUpperCase()}</span>
                  </div>

                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-notes" title={product.notes}>
                    {product.notes}
                  </p>

                  {/* Pricing Row - Clean, Uncongested */}
                  <div className="kaira-card-pricing-row">
                    <span className="final-price">{currentPrice}</span>
                    {originalPrice && <span className="old-price">{originalPrice}</span>}
                  </div>

                  {/* Flacon Size Selector - Dedicated Full-Width Row */}
                  <div className="kaira-card-sizes-row" onClick={(e) => e.stopPropagation()}>
                    <button
                      type="button"
                      className={`kaira-size-pill ${currentSize === '30ml' ? 'active' : ''}`}
                      onClick={(e) => handleSizeChange(e, product.id, '30ml')}
                    >
                      30 ML
                    </button>
                    <button
                      type="button"
                      className={`kaira-size-pill ${currentSize === '50ml' ? 'active' : ''}`}
                      onClick={(e) => handleSizeChange(e, product.id, '50ml')}
                    >
                      50 ML
                    </button>
                  </div>

                  {/* Add to Cart */}
                  <button
                    type="button"
                    className={`add-bag-btn ${addedId === product.id ? 'added' : ''}`}
                    onClick={(e) => handleQuickAdd(e, product)}
                    aria-label={`Add ${product.title} to cart`}
                  >
                    {addedId === product.id ? (
                      <>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ flexShrink: 0 }}
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>ADDED TO CART</span>
                      </>
                    ) : (
                      <>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ flexShrink: 0 }}
                        >
                          <circle cx="9" cy="21" r="1" />
                          <circle cx="20" cy="21" r="1" />
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                        <span>ADD TO CART</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* See All Products Redirect CTA Button */}
        <div className="text-center mt-4 pt-2">
          <button
            type="button"
            className="kaira-ref-cta-btn d-inline-flex align-items-center gap-2"
            onClick={onSeeAll}
            aria-label="View all products on dedicated page"
          >
            <span>See All Products ({allProducts.length})</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
}
