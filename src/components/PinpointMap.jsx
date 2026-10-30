import React from 'react';
import { Container } from 'react-bootstrap';

export default function PinpointMap() {
  const directionsUrl = "https://maps.app.goo.gl/dEzjoPiXYKn1rqmd8";
  const conciergeWhatsApp = "https://wa.me/918086712325?text=Hello%20KAIRA,%20I%20am%20visiting%20the%20Puthanathani%20store.";

  return (
    <section className="kaira-pinpoint-section" id="boutique-map">
      <Container fluid className="px-lg-5 px-3">
        {/* Section Header */}
        <div className="d-flex flex-wrap justify-content-between align-items-end mb-4">
          <div>
            <span className="kaira-editorial-label">VISIT OUR STORE</span>
            <h2 className="kaira-editorial-heading mb-1">Our Store in Puthanathani</h2>
            <p className="kaira-editorial-subheading mb-0">
              Try all our 35% long-lasting perfumes in person at our store in Puthanathani, Kerala.
            </p>
          </div>
          <div className="mt-3 mt-md-0 d-flex align-items-center gap-3">
            <span className="kaira-coord-badge d-none d-sm-inline-flex">
              <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>my_location</span>
              10.9379° N, 76.0046° E
            </span>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="kaira-directions-top-btn"
            >
              <span>OPEN IN GOOGLE MAPS</span>
              <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>
                north_east
              </span>
            </a>
          </div>
        </div>

        {/* Framer-Style Side-by-Side Pinpoint Card (Zero Overlap, 100% Visible) */}
        <div className="kaira-pinpoint-card">
          {/* Left / Bottom: Boutique Details & Directions Info Pane */}
          <div className="kaira-pinpoint-info-pane">
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="kaira-radar-beacon">
                <span className="radar-wave"></span>
                <span className="radar-dot"></span>
              </span>
              <span className="kaira-pinpoint-live-tag">
                STORE OPEN DAILY • 10:00 AM – 9:30 PM
              </span>
            </div>

            <h3 className="kaira-pinpoint-store-title">
              KAIRA Perfumes • Store
            </h3>
            <p className="kaira-pinpoint-address mb-2">
              AAK Hypermarket, NH 66, Puthanathani,<br />
              Kurumbathur, Kerala 676552
            </p>

            <div className="kaira-pinpoint-timing mb-3">
              <span className="material-symbols-outlined" style={{ fontSize: '14px', color: '#8c8577' }}>
                schedule
              </span>
              <span>Mon – Sun: 10:00 AM – 9:30 PM</span>
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-column gap-2 mt-auto">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="kaira-pinpoint-cta-btn w-100 justify-content-center"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                  near_me
                </span>
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={conciergeWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="kaira-pinpoint-wa-btn w-100 justify-content-center"
                title="Chat on WhatsApp"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.518 2 2.03 6.488 2.03 12.01c0 1.98.583 3.824 1.597 5.378L2.03 22.01l4.795-1.554a9.98 9.98 0 0 0 5.215 1.554c5.522 0 10.01-4.488 10.01-10.01C22.05 6.488 17.562 2 12.04 2zm0 18.2a8.163 8.163 0 0 1-4.218-1.168l-.302-.18-2.964.778.791-2.89-.196-.312A8.168 8.168 0 0 1 3.8 12c0-4.521 3.679-8.2 8.2-8.2 4.521 0 8.2 3.679 8.2 8.2 0 4.521-3.679 8.2-8.2 8.2zm4.49-5.918c-.246-.123-1.455-.718-1.68-.8-.225-.083-.39-.123-.554.123s-.637.8-.781.965c-.144.164-.287.185-.533.062s-1.04-.383-1.98-1.22c-.733-.654-1.228-1.462-1.372-1.708s-.015-.38.108-.502c.11-.11.246-.287.369-.43s.164-.246.246-.41c.082-.164.041-.308-.02-.431s-.554-1.334-.76-1.827c-.2-.482-.404-.417-.554-.424l-.472-.008c-.164 0-.431.062-.656.308s-.862.842-.862 2.053.882 2.38 1.005 2.544c.123.164 1.736 2.65 4.205 3.717.587.254 1.046.406 1.404.52.59.188 1.127.161 1.552.098.474-.07 1.455-.595 1.66-1.17.205-.574.205-1.066.144-1.17-.062-.102-.226-.164-.472-.287z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right / Top: Completely Unobstructed Pinpoint Map Stage */}
          <div className="kaira-pinpoint-map-pane">
            <svg
              className="kaira-map-vector-bg"
              viewBox="0 0 800 400"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="mapBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ebe7df" />
                  <stop offset="50%" stopColor="#f3f0e8" />
                  <stop offset="100%" stopColor="#e5e0d6" />
                </linearGradient>
                <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(24,23,22,0.035)" strokeWidth="1" />
                </pattern>
              </defs>

              {/* Base Surface */}
              <rect width="800" height="400" fill="url(#mapBgGrad)" />
              <rect width="800" height="400" fill="url(#mapGrid)" />

              {/* Regional Terrain Areas */}
              <path
                d="M0,220 Q160,260 340,210 T620,240 T800,190 L800,400 L0,400 Z"
                fill="rgba(197, 154, 63, 0.04)"
              />

              {/* Minor Arterials */}
              <path d="M 100,0 L 210,400" stroke="#ded8cc" strokeWidth="2.5" fill="none" />
              <path d="M 300,0 L 370,400" stroke="#ded8cc" strokeWidth="2" fill="none" />
              <path d="M 0,160 L 800,140" stroke="#ded8cc" strokeWidth="2" fill="none" />
              <path d="M 0,290 L 800,320" stroke="#ded8cc" strokeWidth="2.5" fill="none" />
              <path d="M 510,0 L 470,400" stroke="#ded8cc" strokeWidth="2.5" fill="none" />
              <path d="M 680,0 L 650,400" stroke="#ded8cc" strokeWidth="2.5" fill="none" />

              {/* Main Highway NH 66 (Bold route through Puthanathani) */}
              <path
                d="M 40,400 C 200,300 380,230 430,180 C 480,130 600,60 760,0"
                stroke="#ffffff"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 40,400 C 200,300 380,230 430,180 C 480,130 600,60 760,0"
                stroke="#c2bba8"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
              />

              {/* Road Label */}
              <text x="240" y="275" fill="#8c8577" fontSize="10" fontFamily="sans-serif" letterSpacing="0.1em" transform="rotate(-18 240 275)">
                NH 66 HIGHWAY
              </text>
              <text x="530" y="115" fill="#8c8577" fontSize="10" fontFamily="sans-serif" letterSpacing="0.1em" transform="rotate(-24 530 115)">
                TO CALICUT / COCHIN
              </text>

              {/* Geographic Markers */}
              <circle cx="210" cy="285" r="4" fill="#a8a192" />
              <text x="220" y="289" fill="#787266" fontSize="11" fontFamily="sans-serif">Tirur</text>

              <circle cx="600" cy="90" r="4" fill="#a8a192" />
              <text x="610" y="94" fill="#787266" fontSize="11" fontFamily="sans-serif">Kottakkal</text>
            </svg>

            {/* Completely Unobstructed Pulsing Radar Pinpoint Beacon */}
            <div className="kaira-framer-pinpoint-beacon">
              <div className="pin-radar-ring pin-radar-ring-1"></div>
              <div className="pin-radar-ring pin-radar-ring-2"></div>
              <div className="pin-radar-core">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="pin-tooltip-tag">
                <span className="tag-dot"></span>
                <span>KAIRA PERFUMES • PUTHANATHANI</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
