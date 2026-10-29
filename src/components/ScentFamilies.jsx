import React from 'react';
import { Container } from 'react-bootstrap';
import highResFloral from '../assets/scent_floral.jpg';
import highResAmber from '../assets/scent_amber.jpg';

export default function ScentFamilies({ onSelectCategory }) {
  const families = [
    {
      name: 'FLORAL',
      desc: 'Damask Rose. Jasmine. Luminous.',
      image: highResFloral,
    },
    {
      name: 'AMBER',
      desc: 'Golden Resin. Warm Honey. Sensual.',
      image: highResAmber,
    },
    {
      name: 'WOODY',
      desc: 'Smoky Birch. Agarwood. Enduring.',
      image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'SPICY',
      desc: 'Pink Pepper. Saffron. Cardamom.',
      image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'CITRUS',
      desc: 'Amalfi Lemon. Bergamot. Uplifting.',
      image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section className="velora-scent-families-section" id="scent-families">
      <Container fluid className="px-lg-5 px-3">
        {/* Section Header */}
        <div className="velora-section-header-row mb-3 mb-md-4">
          <div>
            <span className="velora-section-eyebrow">FIND YOUR STORY</span>
            <h2 className="velora-section-title">Scent Families</h2>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="velora-section-motto d-none d-md-inline">
              DISTINCT WORLDS. ONE HIGHER STANDARD.
            </span>
            <a href="#modern-classics" className="velora-explore-link">
              <span>EXPLORE ALL</span>
              <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>
                arrow_forward
              </span>
            </a>
          </div>
        </div>

        {/* Responsive Rail: Smooth Horizontal Scroll on Mobile, 5-col Grid on Desktop */}
        <div className="kaira-family-rail-wrap">
          <div className="kaira-family-rail">
            {families.map((fam, idx) => (
              <div key={idx} className="kaira-family-item">
                <a
                  href="#modern-classics"
                  className="velora-family-card text-decoration-none"
                  onClick={() => onSelectCategory && onSelectCategory(fam.name)}
                >
                  <div className="velora-family-img-wrap">
                    <img src={fam.image} alt={fam.name} loading="lazy" />
                  </div>
                  <div className="velora-family-info">
                    <h4 className="velora-family-name">{fam.name}</h4>
                    <p className="velora-family-desc">{fam.desc}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
