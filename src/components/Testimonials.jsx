import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: 'Maria Clarke',
      role: 'Scent Collector',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200',
      stars: 5,
      quote: 'KAIRA Oud Zaffrow is an absolute masterpiece. The transition from rich agarwood to precious Persian saffron has earned me countless compliments.'
    },
    {
      id: 2,
      name: 'Elysse Hopes',
      role: 'Fragrance Reviewer',
      avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=200&h=200',
      stars: 5,
      quote: 'KAIRA Imperial Mist Bloom is incredibly fresh. Unlike other cloying rose scents, this captures the velvet blossom of petals in the morning dew.'
    },
    {
      id: 3,
      name: 'Christian Vance',
      role: 'Fashion Designer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
      stars: 4,
      quote: 'KAIRA Bakhoor Oud is my signature scent now. The incense and rich leather blends reflect pure masculine luxury. Highly recommend.'
    }
  ];

  return (
    <section className="py-5" id="testimonials" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--outline-variant)' }}>
      <Container className="py-4">
        <div className="perfume-section-header">
          <span className="perfume-section-label">KAIRA Connoisseurs</span>
          <h2 className="perfume-section-title">Customers Are Saying</h2>
        </div>

        <Row className="g-4 justify-content-center">
          {reviews.map(item => (
            <Col key={item.id} xs={12} md={4}>
              <div className="testimonial-card-premium">
                {/* Avatar */}
                <img src={item.avatar} alt={item.name} className="testimonial-avatar" />
                
                {/* Stars */}
                <div className="d-flex justify-content-center mb-3">
                  <div className="perfume-stars">
                    {Array.from({ length: item.stars }).map((_, i) => (
                      <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                    ))}
                    {Array.from({ length: 5 - item.stars }).map((_, i) => (
                      <span key={i} className="material-symbols-outlined">star</span>
                    ))}
                  </div>
                </div>

                <p className="testimonial-quote">"{item.quote}"</p>
                <h4 className="testimonial-user">{item.name}</h4>
                <span className="testimonial-role">{item.role}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
