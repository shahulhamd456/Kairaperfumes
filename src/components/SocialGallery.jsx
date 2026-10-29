import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function SocialGallery() {
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=400&h=400' },
    { id: 2, url: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=400&h=400' },
    { id: 3, url: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=400&h=400' },
    { id: 4, url: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=400&h=400' },
  ];

  return (
    <section className="py-5" id="gallery" style={{ backgroundColor: '#fcfcfc' }}>
      <Container className="py-4">
        <div className="perfume-section-header">
          <span className="perfume-section-label">Social Feed</span>
          <h2 className="perfume-section-title">A Glimpse Into Our Fragrance World</h2>
        </div>

        <Row className="g-4">
          {images.map(img => (
            <Col key={img.id} xs={6} md={3}>
              <div className="social-gallery-item">
                <img src={img.url} alt="KAIRA Fragrance Lifestyle" className="social-gallery-img" />
                <div className="social-gallery-overlay">
                  <span className="material-symbols-outlined text-white">favorite</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
