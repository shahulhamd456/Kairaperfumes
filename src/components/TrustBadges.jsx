import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function TrustBadges() {
  const badges = [
    {
      icon: 'science',
      title: '35% Oil Extrait',
      desc: 'Authentic high-concentration perfume oils with zero chemical dilution.',
    },
    {
      icon: 'schedule',
      title: '14+ Hours Longevity',
      desc: 'Formulated to bond to pulse points and project all day into the night.',
    },
    {
      icon: 'savings',
      title: 'Unrivaled Luxury Value',
      desc: '30 ML for ₹349 • 50 ML for ₹599. Accessible haute perfumery.',
    },
    {
      icon: 'eco',
      title: 'Natural Botanicals',
      desc: 'Pure extracts of Damask rose, Cambodian oud, Italian citrus & birch.',
    },
    {
      icon: 'local_shipping',
      title: 'Pan-India Express',
      desc: 'Dispatched in shockproof packaging with live SMS delivery tracking.',
    },
  ];

  return (
    <section className="py-4" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #ebe5dc' }}>
      <Container>
        <Row className="g-3 py-2 justify-content-center text-center">
          {badges.map((b, idx) => (
            <Col key={idx} xs={6} md={4} lg={2} className="px-2">
              <div className="trust-badge-card d-flex flex-column align-items-center h-100">
                <div className="trust-icon-box mb-2">
                  <span className="material-symbols-outlined">{b.icon}</span>
                </div>
                <h5 className="trust-badge-title mb-1">{b.title}</h5>
                <p className="trust-badge-desc mb-0">{b.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
