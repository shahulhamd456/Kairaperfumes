import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { allProducts, CATEGORIES } from '../data/products';

export default function ProductsPage({
  onProductSelect,
  onAddToCart,
  onAddToWishlist,
  wishlist = [],
  onBackToHome,
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [addedId, setAddedId] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState({
    1: '50ml',
    2: '50ml',
    3: '50ml',
    4: '50ml',
    5: '50ml',
    6: '50ml',
  });

  const categories = [
    { label: 'All Fragrances', value: 'all', count: allProducts.length },
    { label: 'Incense & Oud', value: CATEGORIES.INCENSE, count: allProducts.filter((p) => p.category === CATEGORIES.INCENSE).length },
    { label: 'Fresh & Aquatic', value: CATEGORIES.AQUATIC, count: allProducts.filter((p) => p.category === CATEGORIES.AQUATIC).length },
    { label: 'Woody & Cedar', value: CATEGORIES.WOODY, count: allProducts.filter((p) => p.category === CATEGORIES.WOODY).length },
    { label: 'Warm & Oriental', value: CATEGORIES.ORIENTAL, count: allProducts.filter((p) => p.category === CATEGORIES.ORIENTAL).length },
    { label: 'Floral & Rose', value: CATEGORIES.FLORAL, count: allProducts.filter((p) => p.category === CATEGORIES.FLORAL).length },
  ];

  const filteredProducts =
    activeCategory === 'all'
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

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
    <div className="kaira-products-page py-4 py-lg-5">
      <Container fluid className="px-lg-5 px-3">
        {/* Breadcrumb & Back Link */}
        <div className="kaira-page-breadcrumbs mb-4 d-flex align-items-center justify-content-between flex-wrap gap-2">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <button
                  type="button"
                  className="breadcrumb-link-btn"
                  onClick={onBackToHome}
                >
                  Home
                </button>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                All Products
              </li>
            </ol>
          </nav>
          <button
            type="button"
            className="kaira-back-home-btn"
            onClick={onBackToHome}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to Home</span>
          </button>
        </div>

        {/* Page Hero Header */}
        <div className="kaira-products-page-header text-center mb-5">
          <span className="kaira-editorial-label">✦ HAUTE PARFUMERIE COLLECTION ✦</span>
          <h1 className="kaira-editorial-heading mb-2">All Fragrances</h1>
          <p className="kaira-editorial-subheading mx-auto" style={{ maxWidth: '620px' }}>
            Formulated with 35% pure concentrated perfume oils for 14+ hour longevity. Available in 30 ML travel flacons (₹349) and 50 ML full-size bottles (₹599).
          </p>
          <div className="kaira-signature-divider mt-2 mb-4">
            <span className="divider-line" />
            <span className="divider-ornament">✦</span>
            <span className="divider-line" />
          </div>
        </div>

        {/* Category Filter Pills Track */}
        <div className="kaira-products-filter-track-wrap mb-4 mb-lg-5">
          <div className="kaira-products-filter-track">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  type="button"
                  className={`kaira-notes-pill-tab ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.value)}
                >
                  <span className="tab-dot" />
                  <span className="tab-text">
                    {cat.label} ({cat.count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Count & Active Status */}
        <div className="d-flex justify-content-between align-items-center mb-4 px-1">
          <span className="kaira-catalog-count-text">
            Showing <strong>{filteredProducts.length}</strong> of {allProducts.length} creations
          </span>
          {activeCategory !== 'all' && (
            <button
              type="button"
              className="kaira-clear-filter-btn"
              onClick={() => setActiveCategory('all')}
            >
              Clear Filter ✕
            </button>
          )}
        </div>

        {/* Full Grid Displaying All Products */}
        <div className="kaira-human-grid mb-5">
          {filteredProducts.map((product) => {
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
                  <span className="kaira-subtle-badge">35% PURE OIL</span>

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
                      aria-label="Quick View"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '5px' }}>
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      QUICK VIEW
                    </button>
                  </div>

                  {/* Wishlist Heart Icon */}
                  <button
                    type="button"
                    className={`kaira-human-wishlist-btn ${isWishlisted ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToWishlist(product);
                    }}
                    aria-label="Wishlist"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill={isWishlisted ? '#7c1d24' : 'none'}
                      stroke={isWishlisted ? '#7c1d24' : 'currentColor'}
                      strokeWidth="2"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                </div>

                {/* Editorial Body */}
                <div className="kaira-human-body">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="brand-tag">KAIRA PERFUMES</span>
                    <span className="category-tag">{product.category}</span>
                  </div>

                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-notes">{product.notes}</p>

                  {/* Price Row */}
                  <div className="kaira-card-pricing-row">
                    <span className="final-price">{currentPrice}</span>
                    {originalPrice && <span className="old-price">{originalPrice}</span>}
                    {product.discount && <span className="discount-tag">{product.discount}</span>}
                  </div>

                  {/* Size Toggle Pills (30ml / 50ml, or 25 GM / 50 GM) */}
                  <div className="kaira-card-sizes-row">
                    <button
                      type="button"
                      className={`kaira-size-pill ${currentSize === '30ml' ? 'active' : ''}`}
                      onClick={(e) => handleSizeChange(e, product.id, '30ml')}
                    >
                      {product.sizes?.['30ml']?.label || '30 ML'}
                    </button>
                    <button
                      type="button"
                      className={`kaira-size-pill ${currentSize === '50ml' ? 'active' : ''}`}
                      onClick={(e) => handleSizeChange(e, product.id, '50ml')}
                    >
                      {product.sizes?.['50ml']?.label || '50 ML'}
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    type="button"
                    className={`add-bag-btn ${addedId === product.id ? 'added' : ''}`}
                    onClick={(e) => handleQuickAdd(e, product)}
                  >
                    {addedId === product.id ? (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                          <circle cx="9" cy="21" r="1"></circle>
                          <circle cx="20" cy="21" r="1"></circle>
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
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

        {/* Bottom Navigation CTA */}
        <div className="text-center pt-3 pb-4">
          <button
            type="button"
            className="kaira-ref-cta-btn"
            onClick={onBackToHome}
          >
            ← Return to Homepage
          </button>
        </div>
      </Container>
    </div>
  );
}
