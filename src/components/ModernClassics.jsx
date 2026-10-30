import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { allProducts } from '../data/products';

export default function ModernClassics({
  onProductSelect,
  onAddToCart,
  onAddToWishlist,
  wishlist = [],
}) {
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [addedId, setAddedId] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState({
    1: '50ml',
    2: '50ml',
    3: '50ml',
    4: '50ml',
    5: '50ml',
    6: '50ml',
  });

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
        <div className="d-flex flex-wrap justify-content-between align-items-end mb-5">
          <div>
            <span className="kaira-editorial-label">BESTSELLING PERFUMES</span>
            <h2 className="kaira-editorial-heading">Our Bestselling Perfumes</h2>
            <p className="kaira-editorial-subheading">
              Artisan perfumes made with 35% pure perfume oil concentration for rich, 14-hour fragrance.
            </p>
          </div>
          <div className="mt-3 mt-md-0">
            <a
              href="#modern-classics"
              className="kaira-editorial-link"
              onClick={() => setShowAllMobile(true)}
            >
              <span>SEE ALL PERFUMES</span>
              <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>
                arrow_forward
              </span>
            </a>
          </div>
        </div>

        {/* 6-Bottle Elegant Showcase (Top 4 on phone, expandable) */}
        <div className="kaira-human-grid">
          {allProducts.map((product, index) => {
            const currentSize = selectedSizes[product.id] || '50ml';
            const currentPrice =
              product.sizes?.[currentSize]?.price || (currentSize === '30ml' ? '₹349' : '₹599');
            const originalPrice = product.sizes?.[currentSize]?.originalPrice;
            const isWishlisted = wishlist.some((w) => w.id === product.id);
            const isHiddenOnMobile = index >= 4 && !showAllMobile;

            return (
              <div
                key={product.id}
                className={`kaira-human-card ${isHiddenOnMobile ? 'kaira-card-mobile-hidden' : ''}`}
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

        {/* Mobile See More / View All Toggle (Shows Remaining Creations) */}
        <div className="d-md-none text-center mt-3 pt-2">
          {!showAllMobile ? (
            <button
              type="button"
              className="kaira-see-more-btn"
              onClick={() => setShowAllMobile(true)}
            >
              <span>SEE MORE PERFUMES ({allProducts.length - 4} MORE)</span>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                expand_more
              </span>
            </button>
          ) : (
            <button
              type="button"
              className="kaira-see-more-btn"
              onClick={() => {
                setShowAllMobile(false);
                const elem = document.getElementById('modern-classics');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>SHOW LESS</span>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                expand_less
              </span>
            </button>
          )}
        </div>
      </Container>
    </section>
  );
}
