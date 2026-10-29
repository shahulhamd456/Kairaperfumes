import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

export default function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Newsletter signup logic
  };

  return (
    <section
      className="py-5 position-relative overflow-hidden"
      style={{ backgroundColor: 'rgba(132, 82, 61, 0.05)' }}
    >
      <Container className="my-5 position-relative" style={{ zIndex: 10 }}>
        <Row className="justify-content-center text-center">
          <Col md={8} lg={6}>
            <h2 className="headline-md mb-3" style={{ fontSize: '2.5rem' }}>
              Join the Inner Circle
            </h2>
            <p className="body-lg mb-5 text-muted">
              Be the first to experience limited edition releases and private sensory events.
            </p>
            <Form onSubmit={handleSubmit} className="d-flex flex-column flex-md-row gap-3 align-items-center">
              <Form.Control
                type="email"
                placeholder="Your email address"
                required
                className="luxury-input flex-grow-1"
              />
              <button
                type="submit"
                className="btn text-uppercase px-5 py-3 border-0"
                style={{
                  backgroundColor: 'var(--inverse-surface)',
                  color: 'var(--inverse-on-surface)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  borderRadius: 0,
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-color)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--inverse-surface)')}
              >
                Subscribe
              </button>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Background Decorative Rings */}
      <div
        className="position-absolute rounded-circle opacity-10"
        style={{
          width: '600px',
          height: '600px',
          border: '1px solid var(--primary-color)',
          top: '50%',
          right: '-300px',
          transform: 'translateY(-50%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      <div
        className="position-absolute rounded-circle opacity-10"
        style={{
          width: '400px',
          height: '400px',
          border: '1px solid var(--primary-color)',
          bottom: '-200px',
          left: '-200px',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
    </section>
  );
}
