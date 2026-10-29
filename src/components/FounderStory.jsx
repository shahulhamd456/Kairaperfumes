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
                      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.677.15-.2.301-.776.979-.952 1.18-.175.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.676-2.085-.175-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.15-.176.2-.301.3-.502.101-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.235-.245-.589-.494-.509-.677-.518-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.803.376-.276.301-1.053 1.029-1.053 2.509s1.079 2.908 1.229 3.109c.15.2 2.122 3.24 5.141 4.544.718.31 1.278.496 1.716.635.722.23 1.38.197 1.899.12.579-.087 1.78-.727 2.031-1.429.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.35zM12.04 2C6.518 2 2.03 6.488 2.03 12.01c0 1.98.583 3.824 1.597 5.378L2.03 22.01l4.795-1.554a9.98 9.98 0 0 0 5.215 1.554c5.522 0 10.01-4.488 10.01-10.01C22.05 6.488 17.562 2 12.04 2z"/>
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
                    <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>
                      photo_camera
                    </span>
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
                      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.677.15-.2.301-.776.979-.952 1.18-.175.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.676-2.085-.175-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.15-.176.2-.301.3-.502.101-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.235-.245-.589-.494-.509-.677-.518-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.803.376-.276.301-1.053 1.029-1.053 2.509s1.079 2.908 1.229 3.109c.15.2 2.122 3.24 5.141 4.544.718.31 1.278.496 1.716.635.722.23 1.38.197 1.899.12.579-.087 1.78-.727 2.031-1.429.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.35zM12.04 2C6.518 2 2.03 6.488 2.03 12.01c0 1.98.583 3.824 1.597 5.378L2.03 22.01l4.795-1.554a9.98 9.98 0 0 0 5.215 1.554c5.522 0 10.01-4.488 10.01-10.01C22.05 6.488 17.562 2 12.04 2z"/>
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
