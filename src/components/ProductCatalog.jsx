import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import sprayRitualImg from '../assets/arabian_spray_ritual.jpg';
import { allProducts, CATEGORIES } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductCatalog({
  onProductSelect,
  onAddToCart,
  onAddToWishlist,
  wishlist = [],
}) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { label: 'All Signatures (4)', value: 'all' },
    { label: 'Hawas Ice', value: CATEGORIES.AQUATIC },
    { label: 'Club De Nuit', value: CATEGORIES.WOODY },
    { label: 'Marj Royal Oud', value: CATEGORIES.ORIENTAL },
    { label: 'Oud Roses (35% Oil)', value: CATEGORIES.FLORAL },
  ];

  const filteredProducts =
    activeCategory === 'all'
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  return (
    <Container className="my-5 py-4" id="our-collection">
      {/* ── Section Title ── */}
      <div className="perfume-section-header text-center mb-4">
        <span className="perfume-section-label">Haute Parfumerie Curation</span>
        <h2 className="perfume-section-title">The Four Masterpieces</h2>
        <p className="perfume-section-sub">
          Formulated with 35% concentrated perfume oils. 30 ML for ₹349 • 50 ML for ₹599.
        </p>
      </div>

      {/* ── Category Filter Tabs ── */}
      <div className="perfume-tabs-nav mb-5">
        {categories.map((cat) => (
          <button
            key={cat.value}
            className={`perfume-tab-trigger ${activeCategory === cat.value ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* ── Products Grid (All 4 featured prominently) ── */}
      <Row className="g-4 mb-5 justify-content-center">
        {filteredProducts.map((product) => {
          const isWishlisted = wishlist.some((item) => item.id === product.id);

          return (
            <Col key={product.id} xs={12} sm={6} lg={filteredProducts.length === 4 ? 3 : 4}>
              <ProductCard
                product={product}
                onProductSelect={onProductSelect}
                onAddToCart={onAddToCart}
                onAddToWishlist={onAddToWishlist}
                isWishlisted={isWishlisted}
              />
            </Col>
          );
        })}
      </Row>

      {/* ── Editorial Arabian Campaign Banner (Inspired by Image 2 & 3) ── */}
      <div className="arabian-campaign-showcase mt-5">
        <Row className="g-0 align-items-center">
          <Col lg={6} className="campaign-visual-wrapper">
            <img
              src={sprayRitualImg}
              alt="Arabian Luxury Perfume Spray Ritual"
              className="campaign-ritual-img"
            />
            <div className="campaign-arabic-badge">
              <span className="arabic-phrase">كل رشة لها أثر</span>
              <span className="arabic-sub">Every spray leaves an impression</span>
            </div>
          </Col>

          <Col lg={6} className="campaign-text-wrapper p-4 p-md-5">
            <span className="campaign-narrative-eyebrow">The Ritual of Scent</span>
            <h3 className="campaign-narrative-title">
              Crafted with 35% Pure Fragrance Oil
            </h3>
            <p className="campaign-narrative-body">
              True luxury lies in the depth of concentration. Unlike mass-market fragrances that fade within hours, our extraits are macerated with 35% oil purity. Every spray releases micro-droplets of pure oud, Damask rose, smoky birch, and crisp bergamot that harmonize with your skin’s warmth for an indelible 14+ hour trail.
            </p>

            {/* Feature Checkpoints */}
            <div className="campaign-perks-list mb-4">
              <div className="campaign-perk-item">
                <span className="material-symbols-outlined perk-icon">verified</span>
                <span><strong>30 ML (₹349)</strong> — Portable travel luxury</span>
              </div>
              <div className="campaign-perk-item">
                <span className="material-symbols-outlined perk-icon">verified</span>
                <span><strong>50 ML (₹599)</strong> — Generous signature flacon</span>
              </div>
              <div className="campaign-perk-item">
                <span className="material-symbols-outlined perk-icon">verified</span>
                <span><strong>No Harsh Alcohol Sting</strong> — Smooth essential oil blend</span>
              </div>
            </div>

            <a
              href="#scent-families"
              className="campaign-action-btn"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('scent-families');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Scent Architecture
            </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
