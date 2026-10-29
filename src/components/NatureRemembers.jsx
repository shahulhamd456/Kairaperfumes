import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { allProducts } from '../data/products';

export default function NatureRemembers({ onProductSelect }) {
  const [activeFragranceId, setActiveFragranceId] = useState(allProducts[0].id);

  const activeProduct =
    allProducts.find((p) => p.id === activeFragranceId) || allProducts[0];

  return (
    <section className="kaira-notes-section" id="nature-remembers">
      <Container fluid className="px-lg-5 px-3">
        {/* Section Header */}
        <div className="text-center kaira-notes-header mb-4">
          <span className="kaira-notes-eyebrow">✦ HOW OUR PERFUMES EVOLVE ✦</span>
          <h2 className="kaira-notes-title">Fragrance Notes Breakdown</h2>
          <p className="kaira-notes-subtitle mx-auto">
            Formulated with 35% pure perfume oil. Discover what you smell from the first spray to the end of the day.
          </p>
          <div className="kaira-signature-divider mt-2 mb-3">
            <span className="divider-line" />
            <span className="divider-ornament">✦</span>
            <span className="divider-line" />
          </div>
        </div>

        {/* Fragrance Switcher Tabs: Horizontal Scrollable Track on Mobile, Centered on Desktop */}
        <div className="kaira-notes-tab-track-wrap mb-4 mb-lg-5">
          <div className="kaira-notes-tab-track">
            {allProducts.map((p) => {
              const isActive = activeFragranceId === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  className={`kaira-notes-pill-tab ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveFragranceId(p.id)}
                  aria-pressed={isActive}
                >
                  <span className="tab-dot" />
                  <span className="tab-text">{p.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop 3-Column Layout */}
        <div className="d-none d-lg-block">
          <Row className="align-items-center gy-4">
            {/* Left Column: Editorial narrative */}
            <Col lg={4} className="pe-lg-4">
              <span className="kaira-notes-brand-badge mb-2 d-inline-block">{activeProduct.brand}</span>
              <h3 className="kaira-notes-narrative-title mb-3">{activeProduct.title}</h3>
              <p className="kaira-notes-narrative mb-4">
                {activeProduct.description}
              </p>
              <div className="kaira-notes-concentration-info mb-4">
                <span className="label">Perfume Oil:</span>
                <strong>{activeProduct.oilConcentration}</strong>
              </div>
              <button
                type="button"
                className="kaira-notes-experience-btn"
                onClick={() => onProductSelect && onProductSelect(activeProduct)}
              >
                <span>EXPLORE {activeProduct.title.toUpperCase()}</span>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                  arrow_forward
                </span>
              </button>
            </Col>

            {/* Center Column: Bottle Spotlight */}
            <Col lg={4} className="text-center">
              <div className="kaira-pyramid-flacon-stage">
                <div className="kaira-pyramid-flacon-wrap">
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.title}
                    className="kaira-pyramid-flacon-img"
                  />
                </div>
                <div className="kaira-pyramid-flacon-shadow" />
              </div>
            </Col>

            {/* Right Column: TOP / HEART / BASE breakdown */}
            <Col lg={4} className="ps-lg-4">
              <div className="kaira-pyramid-list">
                {/* Top Notes */}
                <div className="kaira-pyramid-item mb-4">
                  <div className="kaira-tier-title-row">
                    <span className="kaira-tier-dash">—</span>
                    <h4 className="kaira-tier-name">TOP NOTES</h4>
                  </div>
                  <p className="kaira-tier-desc">What you smell first (0 - 30 mins)</p>
                  <div className="kaira-tier-notes">
                    {activeProduct.topNotes?.map((note, i) => (
                      <span key={i} className="kaira-note-chip">{note}</span>
                    ))}
                  </div>
                </div>

                {/* Heart Notes */}
                <div className="kaira-pyramid-item mb-4">
                  <div className="kaira-tier-title-row">
                    <span className="kaira-tier-dash">—</span>
                    <h4 className="kaira-tier-name">HEART NOTES</h4>
                  </div>
                  <p className="kaira-tier-desc">The main scent (2 - 6 hours)</p>
                  <div className="kaira-tier-notes">
                    {activeProduct.heartNotes?.map((note, i) => (
                      <span key={i} className="kaira-note-chip">{note}</span>
                    ))}
                  </div>
                </div>

                {/* Base Notes */}
                <div className="kaira-pyramid-item mb-3">
                  <div className="kaira-tier-title-row">
                    <span className="kaira-tier-dash">—</span>
                    <h4 className="kaira-tier-name">BASE NOTES</h4>
                  </div>
                  <p className="kaira-tier-desc">The all-day drydown (6 - 14+ hours)</p>
                  <div className="kaira-tier-notes">
                    {activeProduct.baseNotes?.map((note, i) => (
                      <span key={i} className="kaira-note-chip">{note}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Mobile & Tablet Compact Integrated Card (<992px) */}
        <div className="d-lg-none">
          <div className="kaira-mobile-pyramid-card">
            {/* Top row: Bottle thumbnail + Title + Concentration */}
            <div className="kaira-mobile-pyramid-top">
              <div className="kaira-mobile-pyramid-thumb-wrap">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.title}
                  className="kaira-mobile-pyramid-thumb"
                />
              </div>
              <div className="kaira-mobile-pyramid-intro">
                <span className="kaira-mobile-pyramid-badge">{activeProduct.oilConcentration}</span>
                <h3 className="kaira-mobile-pyramid-title">{activeProduct.title}</h3>
                <p className="kaira-mobile-pyramid-desc">{activeProduct.description}</p>
              </div>
            </div>

            {/* Note Tiers in Compact Structured Rows */}
            <div className="kaira-mobile-tiers-wrap">
              <div className="kaira-mobile-tier">
                <div className="kaira-mobile-tier-label">
                  <span className="tier-tag">TOP</span>
                  <span className="tier-sub">First 30 Mins</span>
                </div>
                <div className="kaira-mobile-tier-chips">
                  {activeProduct.topNotes?.map((note, i) => (
                    <span key={i} className="kaira-note-chip">{note}</span>
                  ))}
                </div>
              </div>

              <div className="kaira-mobile-tier">
                <div className="kaira-mobile-tier-label">
                  <span className="tier-tag">HEART</span>
                  <span className="tier-sub">2 - 6 Hours</span>
                </div>
                <div className="kaira-mobile-tier-chips">
                  {activeProduct.heartNotes?.map((note, i) => (
                    <span key={i} className="kaira-note-chip">{note}</span>
                  ))}
                </div>
              </div>

              <div className="kaira-mobile-tier">
                <div className="kaira-mobile-tier-label">
                  <span className="tier-tag">BASE</span>
                  <span className="tier-sub">6 - 14+ Hours</span>
                </div>
                <div className="kaira-mobile-tier-chips">
                  {activeProduct.baseNotes?.map((note, i) => (
                    <span key={i} className="kaira-note-chip">{note}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct CTA Button */}
            <div className="kaira-mobile-pyramid-footer mt-3">
              <button
                type="button"
                className="kaira-mobile-experience-btn w-100"
                onClick={() => onProductSelect && onProductSelect(activeProduct)}
              >
                <span>EXPLORE {activeProduct.title}</span>
                <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
