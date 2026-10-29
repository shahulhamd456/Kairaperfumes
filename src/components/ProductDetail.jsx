import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ProductCard from './ProductCard';

export default function ProductDetail({
  product,
  onBack,
  onAddToCart,
  onAddToWishlist,
  wishlist = [],
  allProducts,
  onProductSelect,
}) {
  const [selectedSize, setSelectedSize] = useState('50ml');
  const [quantity, setQuantity] = useState(1);
  const [activePanel, setActivePanel] = useState('notes');
  const [expandedDesc, setExpandedDesc] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setSelectedSize('50ml');
    setQuantity(1);
    setActivePanel('notes');
    setExpandedDesc(false);
  }, [product]);

  const currentPrice =
    product.sizes?.[selectedSize]?.price || (selectedSize === '30ml' ? '₹349' : '₹599');
  const currentOriginalPrice =
    product.sizes?.[selectedSize]?.originalPrice || (selectedSize === '30ml' ? '₹499' : '₹799');

  const otherProducts = allProducts.filter((p) => p.id !== product.id);

  const togglePanel = (panelId) => {
    setActivePanel(activePanel === panelId ? null : panelId);
  };

  return (
    <Container className="detail-container py-2 py-md-4">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb" className="mb-2 mb-md-4">
        <a
          href="#"
          className="breadcrumb-back"
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
            arrow_back
          </span>
          Return to Collection
        </a>
      </nav>

      <Row className="gy-3 gy-md-5 gx-md-5 mb-3 mb-md-5 align-items-start">
        {/* Left Column: Master Flacon Visual Stage */}
        <Col lg={6}>
          <div className="detail-gallery-main luxury-detail-stage">
            <img src={product.image} alt={product.title} className="detail-hero-img" />
            <div className="detail-image-badge-pill">
              <span className="material-symbols-outlined" style={{ fontSize: '15px', color: '#c59a3f' }}>
                verified
              </span>
              <span>{product.oilConcentration || '35% Oil Extrait'}</span>
            </div>
          </div>

          {/* Key Accords Feature Row */}
          <div className="detail-accords-strip mt-2 mt-md-4">
            <div className="accord-chip">
              <span className="material-symbols-outlined">timer</span>
              <div>
                <strong>14+ Hours</strong>
                <small>Long Longevity</small>
              </div>
            </div>
            <div className="accord-chip">
              <span className="material-symbols-outlined">water_drop</span>
              <div>
                <strong>35% Pure Oil</strong>
                <small>Fine French Oils</small>
              </div>
            </div>
            <div className="accord-chip">
              <span className="material-symbols-outlined">air</span>
              <div>
                <strong>Enveloping</strong>
                <small>Rich Scent Trail</small>
              </div>
            </div>
          </div>
        </Col>

        {/* Right Column: Information & Olfactory Breakdown */}
        <Col lg={6}>
          <div className="detail-info-pane">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
              <span className="label-caps detail-brand-tag">
                {product.brand}
              </span>
              <span className="detail-category-badge">{product.scentFamily}</span>
            </div>

            <h1 className="font-serif-luxury text-dark mb-2 detail-main-title">
              {product.title}
            </h1>

            {/* Review stars */}
            <div className="d-flex align-items-center gap-2 mb-3">
              <div style={{ color: '#c59a3f', display: 'flex' }}>
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined"
                    style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <span className="detail-rating-text">
                5.0 ({product.reviewCount} customer reviews)
              </span>
            </div>

            {/* Price block */}
            <div className="detail-pricing-box mb-4">
              <span className="detail-price-main">{currentPrice}</span>
              <span className="detail-price-compare">{currentOriginalPrice}</span>
              <span className="detail-savings-badge">Special Offer</span>
            </div>

            {/* Editorial Description */}
            <div className="detail-narrative-wrap mb-3 mb-md-4">
              <p className={`detail-narrative mb-1 ${expandedDesc ? 'expanded' : ''}`}>
                {product.description}
              </p>
              {product.description && product.description.length > 130 && (
                <button
                  type="button"
                  className="detail-read-more-btn border-0 bg-transparent p-0 d-md-none"
                  onClick={() => setExpandedDesc(!expandedDesc)}
                >
                  {expandedDesc ? 'Show less ▴' : 'Read more ▾'}
                </button>
              )}
            </div>

            {/* Size Selector with clear 30ml / 50ml buttons */}
            <div className="detail-size-section mb-3 mb-md-4">
              <div className="d-flex flex-wrap justify-content-between align-items-baseline gap-1 mb-2">
                <span className="label-caps" style={{ color: 'var(--on-surface-variant)' }}>
                  Select Bottle Size
                </span>
                <span className="detail-size-guide-hint">
                  {selectedSize === '30ml' ? '30ml Pocket Bottle' : '50ml Full Bottle'}
                </span>
              </div>
              <div className="d-flex gap-2 gap-sm-3">
                <button
                  type="button"
                  className={`detail-size-btn ${selectedSize === '30ml' ? 'active' : ''}`}
                  onClick={() => setSelectedSize('30ml')}
                >
                  <div className="size-btn-row">
                    <span className="size-volume">30 ML</span>
                    <span className="size-cost">₹349</span>
                    <span className="size-mrp">MRP ₹499</span>
                  </div>
                </button>

                <button
                  type="button"
                  className={`detail-size-btn ${selectedSize === '50ml' ? 'active' : ''}`}
                  onClick={() => setSelectedSize('50ml')}
                >
                  <div className="size-btn-row">
                    <span className="size-volume">50 ML</span>
                    <span className="size-cost">₹599</span>
                    <span className="size-mrp">MRP ₹799</span>
                  </div>
                  <span className="size-badge-value">Most Popular</span>
                </button>
              </div>
            </div>

            {/* Quantity Selector & Add to Bag */}
            <div className="d-flex gap-2 gap-sm-3 align-items-center mb-3 mb-md-4 pt-1 pt-md-2">
              <div className="quantity-control detail-qty-control">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>

              <button
                type="button"
                className="btn detail-add-btn flex-grow-1"
                onClick={() => onAddToCart(product, quantity, selectedSize, currentPrice)}
              >
                <span className="material-symbols-outlined">shopping_bag</span>
                <span>Add {selectedSize} • {currentPrice}</span>
              </button>
            </div>

            {/* ── Olfactory Notes Architecture (Pyramid) ── */}
            <div className="olfactory-pyramid-card mb-4">
              <div className="pyramid-header">
                <span className="material-symbols-outlined" style={{ color: '#c59a3f' }}>
                  nature
                </span>
                <h4 className="pyramid-title">Fragrance Notes Breakdown</h4>
              </div>

              {/* Top Notes */}
              {product.topNotes && (
                <div className="pyramid-tier">
                  <div className="pyramid-tier-label">
                    <span className="tier-badge">TOP NOTES</span>
                    <span className="tier-timing">The First Impression (0 - 30 min)</span>
                  </div>
                  <div className="pyramid-tags">
                    {product.topNotes.map((note, idx) => (
                      <span key={idx} className="note-pill top-pill">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Heart Notes */}
              {product.heartNotes && (
                <div className="pyramid-tier">
                  <div className="pyramid-tier-label">
                    <span className="tier-badge">HEART NOTES</span>
                    <span className="tier-timing">The Soul & Character (30 min - 4 hrs)</span>
                  </div>
                  <div className="pyramid-tags">
                    {product.heartNotes.map((note, idx) => (
                      <span key={idx} className="note-pill heart-pill">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Base Notes */}
              {product.baseNotes && (
                <div className="pyramid-tier">
                  <div className="pyramid-tier-label">
                    <span className="tier-badge">BASE NOTES</span>
                    <span className="tier-timing">The Lingering Sillage (4 - 14+ hrs)</span>
                  </div>
                  <div className="pyramid-tags">
                    {product.baseNotes.map((note, idx) => (
                      <span key={idx} className="note-pill base-pill">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Accordions */}
            <div className="detail-accordion">
              {[
                {
                  id: 'craftsmanship',
                  title: '35% Oil Concentration & Maceration',
                  content:
                    'Crafted using authentic high-grade fragrance oils distilled in Grasse and Dubai. At 35% oil concentration, this formulation boasts extraordinary molecular density that bonds directly to pulse points, offering unyielding performance without alcohol evaporation harshness.',
                },
                {
                  id: 'application',
                  title: 'Ritual of Application ("كل رشة لها أثر")',
                  content:
                    'Apply 2-3 sprays directly on clean pulse points: the base of the neck, collarbones, and inner wrists. Do not rub the wrists together, as rubbing breaks the delicate top note molecules.',
                },
                {
                  id: 'shipping',
                  title: 'Fast Dispatch & Safe Transit Guarantee',
                  content:
                    'Each flacon is cushioned in custom-molded shockproof luxury packaging. Dispatched within 24 hours with real-time tracking across India. 100% satisfaction and authenticity guaranteed.',
                },
              ].map((panel) => (
                <div className="detail-accordion-item" key={panel.id}>
                  <button
                    type="button"
                    className="detail-accordion-trigger"
                    onClick={() => togglePanel(panel.id)}
                  >
                    <span>{panel.title}</span>
                    <span className="material-symbols-outlined">
                      {activePanel === panel.id ? 'remove' : 'add'}
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: activePanel === panel.id ? '220px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 0.35s ease',
                    }}
                  >
                    <p className="detail-accordion-body">{panel.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>

      {/* Recommended Scent Curations (Compact 2-col on mobile) */}
      {otherProducts.length > 0 && (
        <section className="mt-4 pt-4 border-top">
          <div className="text-center mb-3 mb-md-4">
            <span className="label-caps d-block mb-1" style={{ color: 'var(--primary-color)' }}>
              COMPLETE YOUR CURATION
            </span>
            <h2 className="perfume-section-title">Discover Other Masterpieces</h2>
          </div>
          <Row className="g-2 g-md-4 justify-content-center">
            {otherProducts.slice(0, 4).map((item) => (
              <Col xs={6} md={4} key={item.id}>
                <ProductCard
                  product={item}
                  onProductSelect={onProductSelect}
                  onAddToCart={onAddToCart}
                  onAddToWishlist={onAddToWishlist}
                  isWishlisted={wishlist.some((w) => w.id === item.id)}
                />
              </Col>
            ))}
          </Row>
        </section>
      )}
    </Container>
  );
}
