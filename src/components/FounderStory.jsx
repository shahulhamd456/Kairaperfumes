import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import founderImg from '../assets/founder_sirajudheen.jpg';

export default function FounderStory() {
  const founderInstaUrl = "https://www.instagram.com/siraajjjfrgance?utm_source=ig_web_button_share_sheet&obrf=ZDNlZDc0MzIxNw==";
  const brandInstaUrl = "https://www.instagram.com/kairaperfumes?mdxt=MzZkcTM1ZGZxMDdm";
  const founderPhone = "+91 80867 12325";
  const whatsappUrl = "https://wa.me/918086712325?text=Hello%20Sirajudheen,%20I%20would%20like%20to%20know%20more%20about%20KAIRA%20fragrances.";

  return (
    <section className="kaira-founder-ref-section" id="founder-story">
      <Container fluid className="px-lg-5 px-3">
        <div className="kaira-founder-ref-card">
          <Row className="g-4 align-items-center">
            {/* Left: Professional Portrait */}
            <Col md={5} lg={5}>
              <div className="kaira-founder-ref-photo-wrap">
                <img
                  src={founderImg}
                  alt="Sirajudheen - Founder & Master Perfumer"
                  className="kaira-founder-ref-photo"
                  loading="lazy"
                />
              </div>
            </Col>

            {/* Right: Clean Editorial Details */}
            <Col md={7} lg={7}>
              <div className="kaira-founder-ref-info">
                <span className="kaira-founder-ref-tag">FOUNDER &amp; PERFUMER</span>
                <h2 className="kaira-founder-ref-name">Sirajudheen</h2>

                <p className="kaira-founder-ref-bio">
                  Dedicated to pure perfume craftsmanship, Sirajudheen hand-blends every fragrance with a rich 35% perfume oil concentration. Each scent combines pure Arabian oud and golden amber with premium French essences for a rich scent that stays strong for over 14 hours.
                </p>

                {/* Social Icons row (square light gray buttons matching reference) */}
                <div className="kaira-founder-ref-socials">
                  {/* Founder Instagram */}
                  <a
                    href={founderInstaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kaira-ref-social-btn"
                    aria-label="Founder Instagram"
                    title="Founder Instagram: @siraajjjfrgance"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kaira-ref-social-btn"
                    aria-label="WhatsApp"
                    title={`WhatsApp: ${founderPhone}`}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.04 2C6.518 2 2.03 6.488 2.03 12.01c0 1.98.583 3.824 1.597 5.378L2.03 22.01l4.795-1.554a9.98 9.98 0 0 0 5.215 1.554c5.522 0 10.01-4.488 10.01-10.01C22.05 6.488 17.562 2 12.04 2zm0 18.2a8.163 8.163 0 0 1-4.218-1.168l-.302-.18-2.964.778.791-2.89-.196-.312A8.168 8.168 0 0 1 3.8 12c0-4.521 3.679-8.2 8.2-8.2 4.521 0 8.2 3.679 8.2 8.2 0 4.521-3.679 8.2-8.2 8.2zm4.49-5.918c-.246-.123-1.455-.718-1.68-.8-.225-.083-.39-.123-.554.123s-.637.8-.781.965c-.144.164-.287.185-.533.062s-1.04-.383-1.98-1.22c-.733-.654-1.228-1.462-1.372-1.708s-.015-.38.108-.502c.11-.11.246-.287.369-.43s.164-.246.246-.41c.082-.164.041-.308-.02-.431s-.554-1.334-.76-1.827c-.2-.482-.404-.417-.554-.424l-.472-.008c-.164 0-.431.062-.656.308s-.862.842-.862 2.053.882 2.38 1.005 2.544c.123.164 1.736 2.65 4.205 3.717.587.254 1.046.406 1.404.52.59.188 1.127.161 1.552.098.474-.07 1.455-.595 1.66-1.17.205-.574.205-1.066.144-1.17-.062-.102-.226-.164-.472-.287z"/>
                    </svg>
                  </a>

                  {/* Brand Instagram */}
                  <a
                    href={brandInstaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kaira-ref-social-btn"
                    aria-label="KAIRA Official Instagram"
                    title="KAIRA Official: @kairaperfumes"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                      <circle cx="12" cy="13" r="4"></circle>
                    </svg>
                  </a>
                </div>

                {/* Primary Action Button */}
                <div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kaira-ref-cta-btn"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}>
                      <path d="M12.04 2C6.518 2 2.03 6.488 2.03 12.01c0 1.98.583 3.824 1.597 5.378L2.03 22.01l4.795-1.554a9.98 9.98 0 0 0 5.215 1.554c5.522 0 10.01-4.488 10.01-10.01C22.05 6.488 17.562 2 12.04 2zm0 18.2a8.163 8.163 0 0 1-4.218-1.168l-.302-.18-2.964.778.791-2.89-.196-.312A8.168 8.168 0 0 1 3.8 12c0-4.521 3.679-8.2 8.2-8.2 4.521 0 8.2 3.679 8.2 8.2 0 4.521-3.679 8.2-8.2 8.2zm4.49-5.918c-.246-.123-1.455-.718-1.68-.8-.225-.083-.39-.123-.554.123s-.637.8-.781.965c-.144.164-.287.185-.533.062s-1.04-.383-1.98-1.22c-.733-.654-1.228-1.462-1.372-1.708s-.015-.38.108-.502c.11-.11.246-.287.369-.43s.164-.246.246-.41c.082-.164.041-.308-.02-.431s-.554-1.334-.76-1.827c-.2-.482-.404-.417-.554-.424l-.472-.008c-.164 0-.431.062-.656.308s-.862.842-.862 2.053.882 2.38 1.005 2.544c.123.164 1.736 2.65 4.205 3.717.587.254 1.046.406 1.404.52.59.188 1.127.161 1.552.098.474-.07 1.455-.595 1.66-1.17.205-.574.205-1.066.144-1.17-.062-.102-.226-.164-.472-.287z"/>
                    </svg>
                    <span>Chat on WhatsApp • {founderPhone}</span>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
