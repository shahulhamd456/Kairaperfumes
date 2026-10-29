import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const instaUrl = "https://www.instagram.com/kairaperfumes?mdxt=MzZkcTM1ZGZxMDdm";
  const founderInstaUrl = "https://www.instagram.com/siraajjjfrgance?utm_source=ig_web_button_share_sheet&obrf=ZDNlZDc0MzIxNw==";
  const whatsappUrl = "https://wa.me/918086712325";
  const whatsappDisplay = "+91 80867 12325";
  const mapsUrl = "https://maps.app.goo.gl/dEzjoPiXYKn1rqmd8";

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3500);
    }
  };

  return (
    <footer className="kaira-standard-footer">
      <Container fluid className="px-lg-5 px-3">
        {/* Main Light Glassmorphic Rounded Card (Vitrio Style Reference) */}
        <div className="kaira-footer-card">
          <Row className="gy-4 gx-lg-5 mb-4">
            {/* Left Column: Brand & Subscribe Pill */}
            <Col lg={5} md={12}>
              <div className="kaira-footer-brand-pane">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="kaira-brand-gem">◆</span>
                  <span className="kaira-footer-logo-text">KAIRA</span>
                  <span className="kaira-footer-badge">35% PURE PERFUME OIL</span>
                </div>

                <p className="kaira-footer-desc">
                  Unisex long-lasting perfumes made with 35% pure oil. Crafted with fine French oils and authentic Arabian oud for rich, all-day performance.
                </p>

                {/* Sleek Minimal Pill Subscribe (Matching Vitrio Reference) */}
                <form onSubmit={handleSubscribe} className="kaira-footer-subscribe-form mt-4">
                  {subscribed ? (
                    <div className="kaira-subscribe-success">
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>check_circle</span>
                      <span>Welcome to KAIRA.</span>
                    </div>
                  ) : (
                    <div className="kaira-subscribe-pill-box">
                      <input
                        type="email"
                        required
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="kaira-subscribe-input"
                      />
                      <button type="submit" className="kaira-subscribe-btn">
                        Subscribe
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </Col>

            {/* Navigation Columns */}
            <Col lg={7} md={12}>
              <Row className="gy-4">
                {/* Col 1: Collections */}
                <Col sm={4} xs={6}>
                  <span className="kaira-column-heading">PERFUMES</span>
                  <ul className="kaira-column-links">
                    <li><a href="#modern-classics">All Fragrances</a></li>
                    <li><a href="#modern-classics">30 ML Pocket Perfumes</a></li>
                    <li><a href="#modern-classics">50 ML Full Size Bottles</a></li>
                    <li><a href="#modern-classics">35% Pure Perfume Oils</a></li>
                  </ul>
                </Col>

                {/* Col 2: Help & Store */}
                <Col sm={4} xs={6}>
                  <span className="kaira-column-heading">HELP &amp; STORE</span>
                  <ul className="kaira-column-links">
                    <li>
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        WhatsApp: {whatsappDisplay}
                      </a>
                    </li>
                    <li>
                      <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                        Store Location &amp; Map
                      </a>
                    </li>
                    <li><a href="#nature-remembers">Fragrance Notes Guide</a></li>
                    <li><a href="#nature-remembers">How Scent Lasts</a></li>
                  </ul>
                </Col>

                {/* Col 3: Founder */}
                <Col sm={4} xs={12}>
                  <span className="kaira-column-heading">FOUNDER</span>
                  <ul className="kaira-column-links">
                    <li>
                      <a href="#founder-story">
                        Sirajudheen (Founder)
                      </a>
                    </li>
                    <li>
                      <a href={founderInstaUrl} target="_blank" rel="noopener noreferrer">
                        @siraajjjfrgance
                      </a>
                    </li>
                    <li>
                      <a href={instaUrl} target="_blank" rel="noopener noreferrer">
                        @kairaperfumes
                      </a>
                    </li>
                    <li><a href="#founder-story">Founder's Story</a></li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* Divider */}
          <div className="kaira-footer-divider my-4" />

          {/* Bottom Bar: Copyright on Left, Sleek Circular Social Icons on Right */}
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3 pt-2">
            <span className="kaira-footer-copy">
              © 2026 KAIRA Perfumes. Founded by Sirajudheen. All rights reserved.
            </span>

            {/* Vitrio Style Round Action Buttons: WhatsApp and Instagram */}
            <div className="kaira-footer-round-actions">
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="kaira-round-btn kaira-round-wa"
                title={`WhatsApp: ${whatsappDisplay}`}
                aria-label="WhatsApp"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.677.15-.2.301-.776.979-.952 1.18-.175.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.676-2.085-.175-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.15-.176.2-.301.3-.502.101-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.235-.245-.589-.494-.509-.677-.518-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.803.376-.276.301-1.053 1.029-1.053 2.509s1.079 2.908 1.229 3.109c.15.2 2.122 3.24 5.141 4.544.718.31 1.278.496 1.716.635.722.23 1.38.197 1.899.12.579-.087 1.78-.727 2.031-1.429.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.35zM12.04 2C6.518 2 2.03 6.488 2.03 12.01c0 1.98.583 3.824 1.597 5.378L2.03 22.01l4.795-1.554a9.98 9.98 0 0 0 5.215 1.554c5.522 0 10.01-4.488 10.01-10.01C22.05 6.488 17.562 2 12.04 2z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={instaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="kaira-round-btn kaira-round-ig"
                title="KAIRA Instagram: @kairaperfumes"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* Founder Instagram */}
              <a
                href={founderInstaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="kaira-round-btn kaira-round-founder"
                title="Founder: @siraajjjfrgance"
                aria-label="Founder Instagram"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '17px' }}>
                  person
                </span>
              </a>

              {/* Store Map */}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="kaira-round-btn kaira-round-map"
                title="Google Maps Store Location"
                aria-label="Google Maps Location"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '17px' }}>
                  location_on
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
