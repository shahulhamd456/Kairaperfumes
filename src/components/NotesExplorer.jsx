import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { allProducts } from '../data/products';

export default function NotesExplorer({ onProductSelect, onAddToCart }) {
  const [selectedProductId, setSelectedProductId] = useState(allProducts[0].id);

  const activeProduct = allProducts.find((p) => p.id === selectedProductId) || allProducts[0];

  return (
    <section className="py-5" id="nature-remembers" style={{ backgroundColor: '#f7f4ee', borderTop: '1px solid #e5ded3' }}>
      <Container className="py-4">
        {/* Editorial Eyebrow & Headline from Image 3 */}
        <div className="text-center mb-5">
          <span
            className="label-caps mb-2 d-block"
            style={{ color: '#84523d', letterSpacing: '0.25em' }}
          >
            THE OLFACTORY ANATOMY
          </span>
          <h2
            className="font-serif-luxury text-dark mb-2"
            style={{ fontSize: 'clamp(30px, 4vw, 46px)', fontWeight: '400' }}
          >
            Nature Remembers
          </h2>
          <p
            className="text-muted mx-auto"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              maxWidth: '560px',
              lineHeight: '1.7',
            }}
          >
            Extraordinary fragrances begin with extraordinary raw botanicals and precious oils. Explore the three-stage unfolding of our 4 signature master blends.
          </p>

          {/* Perfume Selector Tabs */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            {allProducts.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`notes-tab-btn ${selectedProductId === p.id ? 'active' : ''}`}
                onClick={() => setSelectedProductId(p.id)}
              >
                {p.title}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Split: Bottle Showcase + Notes Breakdown */}
        <div className="notes-explorer-box p-4 p-md-5">
          <Row className="align-items-center gy-4">
            {/* Left: Product Flacon & Price Highlight */}
            <Col lg={5} className="text-center">
              <div
                className="notes-flacon-wrapper mx-auto"
                onClick={() => onProductSelect(activeProduct)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={activeProduct.image}
                  alt={activeProduct.title}
                  className="notes-flacon-img"
                />
                <div className="notes-badge-overlay">
                  <span>{activeProduct.oilConcentration}</span>
                </div>
              </div>

              <div className="mt-3">
                <span
                  className="text-uppercase text-muted d-block"
                  style={{ fontSize: '11px', letterSpacing: '0.15em' }}
                >
                  {activeProduct.brand}
                </span>
                <h3 className="font-serif-luxury text-dark mb-1" style={{ fontSize: '22px' }}>
                  {activeProduct.title}
                </h3>
                <div className="d-flex justify-content-center align-items-center gap-3 my-2">
                  <span className="badge-size-pill">30ml • ₹349</span>
                  <span className="badge-size-pill highlight">50ml • ₹599</span>
                </div>
                <button
                  type="button"
                  className="btn-link-luxury mt-2"
                  onClick={() => onProductSelect(activeProduct)}
                >
                  View Complete Details &amp; Reviews →
                </button>
              </div>
            </Col>

            {/* Right: Top / Heart / Base Notes Pyramid */}
            <Col lg={7}>
              <div className="notes-pyramid-details">
                {/* Top Notes */}
                <div className="note-stage-item mb-4">
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <span className="stage-line-indicator" />
                    <div>
                      <h4 className="stage-name mb-0">TOP NOTES</h4>
                      <span className="stage-subtitle">The first impression • 0 to 30 mins</span>
                    </div>
                  </div>
                  <div className="note-bubbles-container">
                    {activeProduct.topNotes.map((note, idx) => (
                      <span key={idx} className="note-bubble top-bubble">
                        <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                          spa
                        </span>
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Heart Notes */}
                <div className="note-stage-item mb-4">
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <span className="stage-line-indicator heart-indicator" />
                    <div>
                      <h4 className="stage-name mb-0">HEART NOTES</h4>
                      <span className="stage-subtitle">The unfolding story • 30 mins to 4 hours</span>
                    </div>
                  </div>
                  <div className="note-bubbles-container">
                    {activeProduct.heartNotes.map((note, idx) => (
                      <span key={idx} className="note-bubble heart-bubble">
                        <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                          local_florist
                        </span>
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Base Notes */}
                <div className="note-stage-item mb-4">
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <span className="stage-line-indicator base-indicator" />
                    <div>
                      <h4 className="stage-name mb-0">BASE NOTES</h4>
                      <span className="stage-subtitle">The lasting signature • 4 to 14+ hours</span>
                    </div>
                  </div>
                  <div className="note-bubbles-container">
                    {activeProduct.baseNotes.map((note, idx) => (
                      <span key={idx} className="note-bubble base-bubble">
                        <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                          forest
                        </span>
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action */}
                <div className="d-flex gap-3 align-items-center pt-3 border-top border-secondary border-opacity-10">
                  <button
                    type="button"
                    className="btn-quick-add"
                    onClick={() => onAddToCart(activeProduct, 1, '50ml', '₹599')}
                  >
                    <svg
                      width="15"
                      height="15"
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
                    <span>Add to Cart 50ml (₹599)</span>
                  </button>
                  <button
                    type="button"
                    className="btn-quick-add secondary"
                    onClick={() => onAddToCart(activeProduct, 1, '30ml', '₹349')}
                  >
                    <span>Add 30ml (₹349)</span>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
