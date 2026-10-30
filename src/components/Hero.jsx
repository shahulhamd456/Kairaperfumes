import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import heroStageImg from '../assets/kaira_bespoke_hero_stage.jpg';

export default function Hero() {
  return (
    <section className="kaira-bespoke-hero" id="hero" aria-label="KAIRA Haute Parfumerie Hero">
      <div className="kaira-hero-stage-backdrop">
        <img
          src={heroStageImg}
          alt="KAIRA Haute Parfumerie Signature Flacons on Luxury Vanity"
          className="kaira-hero-backdrop-img"
          loading="eager"
        />
        <div className="kaira-hero-backdrop-overlay" />
      </div>

      <Container fluid className="kaira-hero-content-container px-3 px-sm-4 px-lg-5">
        <Row className="align-items-center min-vh-hero">
          <Col xs={12} md={8} lg={6} xl={5} className="kaira-hero-editorial-col">
            <div className="kaira-hero-editorial-card">
              {/* Eyebrow */}
              <div className="kaira-hero-eyebrow-wrap">
                <span className="kaira-hero-eyebrow">CRAFTED TO CAPTIVATE</span>
              </div>

              {/* Headline */}
              <h1 className="kaira-hero-headline">
                Scents that <br />
                <span className="kaira-hero-headline-italic">leave a legacy.</span>
              </h1>

              {/* Subtitle / Paragraph */}
              <p className="kaira-hero-description">
                KAIRA crafts long-lasting unisex perfumes made with 35% pure oil, celebrating elegance, style, and all-day presence.
              </p>

              {/* Action Buttons */}
              <div className="kaira-hero-actions">
                <a href="#modern-classics" className="kaira-hero-btn-primary">
                  DISCOVER THE COLLECTION
                </a>
              </div>

              {/* Trust Badges */}
              <div className="kaira-hero-trust-row">
                <div className="kaira-trust-item">
                  <svg className="kaira-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="kaira-trust-label">35% PURE OIL</span>
                </div>

                <div className="kaira-trust-item">
                  <svg className="kaira-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span className="kaira-trust-label">14+ HOURS LONG LASTING</span>
                </div>

                <div className="kaira-trust-item">
                  <svg className="kaira-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="kaira-trust-label">FOR MEN &amp; WOMEN</span>
                </div>

                <div className="kaira-trust-item">
                  <svg className="kaira-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 12 20 22 4 22 4 12" />
                    <rect x="2" y="7" width="20" height="5" />
                    <line x1="12" y1="22" x2="12" y2="7" />
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                  </svg>
                  <span className="kaira-trust-label">LUXURY GLASS BOTTLE</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
