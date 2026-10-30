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
                  <path d="M12.04 2C6.518 2 2.03 6.488 2.03 12.01c0 1.98.583 3.824 1.597 5.378L2.03 22.01l4.795-1.554a9.98 9.98 0 0 0 5.215 1.554c5.522 0 10.01-4.488 10.01-10.01C22.05 6.488 17.562 2 12.04 2zm0 18.2a8.163 8.163 0 0 1-4.218-1.168l-.302-.18-2.964.778.791-2.89-.196-.312A8.168 8.168 0 0 1 3.8 12c0-4.521 3.679-8.2 8.2-8.2 4.521 0 8.2 3.679 8.2 8.2 0 4.521-3.679 8.2-8.2 8.2zm4.49-5.918c-.246-.123-1.455-.718-1.68-.8-.225-.083-.39-.123-.554.123s-.637.8-.781.965c-.144.164-.287.185-.533.062s-1.04-.383-1.98-1.22c-.733-.654-1.228-1.462-1.372-1.708s-.015-.38.108-.502c.11-.11.246-.287.369-.43s.164-.246.246-.41c.082-.164.041-.308-.02-.431s-.554-1.334-.76-1.827c-.2-.482-.404-.417-.554-.424l-.472-.008c-.164 0-.431.062-.656.308s-.862.842-.862 2.053.882 2.38 1.005 2.544c.123.164 1.736 2.65 4.205 3.717.587.254 1.046.406 1.404.52.59.188 1.127.161 1.552.098.474-.07 1.455-.595 1.66-1.17.205-.574.205-1.066.144-1.17-.062-.102-.226-.164-.472-.287z"/>
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
