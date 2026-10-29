import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function HighlightsBanner() {
  return (
    <section className="highlights-banner my-5" id="highlights">
      <Container>
        <div className="perfume-section-header text-white mb-5 text-center">
          <span className="perfume-section-label" style={{ color: '#e7c67c', opacity: 0.9 }}>
            Master Perfumer Artistry
          </span>
          <h2 className="perfume-section-title text-white">Why Connoisseurs Choose Our Extraits</h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '15px',
              color: 'rgba(255,255,255,0.8)',
              marginTop: '10px',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Hand-formulated with 35% pure perfume oils, our 4 master creations deliver unprecedented longevity and multifaceted projection.
          </p>
        </div>

        <Row className="gy-4 mb-5">
          {[
            {
              num: '01',
              title: '35% Pure Perfume Oil Extrait',
              desc: 'High concentration ensures the scent evolves seamlessly on pulse points for 14+ hours without alcohol evaporation harshness.',
            },
            {
              num: '02',
              title: 'Pure Cambodian Oud & Botanicals',
              desc: 'Infused with authentic agarwood chips, Damask rose petals, birchwood tar, Kashmiri saffron, and Amalfi lemon.',
            },
            {
              num: '03',
              title: 'Honest Accessible Haute Perfumery',
              desc: 'Ultra-accessible pricing: 30 ML for ₹349 and 50 ML for ₹599. Experience world-class perfumery without the 10x designer retail markup.',
            },
          ].map((item) => (
            <Col key={item.num} xs={12} md={4}>
              <div className="highlight-col h-100">
                <span className="highlight-num">{item.num}</span>
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-desc">{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>

        <div className="text-center">
          <a
            href="#our-collection"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#131111',
              backgroundColor: '#e7c67c',
              padding: '16px 40px',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              borderRadius: '4px',
              boxShadow: '0 8px 24px rgba(231,198,124,0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f3d99d';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#e7c67c';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Shop The 4 Signatures
          </a>
        </div>
      </Container>
    </section>
  );
}
