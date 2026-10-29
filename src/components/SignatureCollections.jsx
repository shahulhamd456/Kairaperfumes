import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import cardHerImg from '../assets/card_kaira_her.png';
import cardHimImg from '../assets/card_kaira_him.png';
import cardUnisexImg from '../assets/card_kaira_unisex.png';
import cardDiscoveryImg from '../assets/card_kaira_discovery.png';

export default function SignatureCollections({ onSelectCategory, onProductSelect }) {
  const collections = [
    {
      id: 'for-her',
      title: 'FOR HER',
      tagline: 'Feminine. Elegant. Timeless.',
      linkText: 'SHOP NOW',
      image: cardHerImg,
      alt: 'KAIRA For Her - Feminine. Elegant. Timeless.',
      targetFragrance: 'Inspired by Oud Roses',
    },
    {
      id: 'for-him',
      title: 'FOR HIM',
      tagline: 'Bold. Confident. Unforgettable.',
      linkText: 'SHOP NOW',
      image: cardHimImg,
      alt: 'KAIRA For Him - Bold. Confident. Unforgettable.',
      targetFragrance: 'Hawas Ice',
    },
    {
      id: 'unisex',
      title: 'UNISEX',
      tagline: 'Balanced. Refined. Distinctive.',
      linkText: 'SHOP NOW',
      image: cardUnisexImg,
      alt: 'KAIRA Unisex - Balanced. Refined. Distinctive.',
      targetFragrance: 'Marj',
    },
    {
      id: 'discovery-sets',
      title: 'DISCOVERY SETS',
      tagline: 'Explore. Experience. Find your scent.',
      linkText: 'SHOP NOW',
      image: cardDiscoveryImg,
      alt: 'KAIRA Discovery Sets - Explore. Experience. Find your scent.',
      targetFragrance: 'Club De Nuit Intense Man',
    },
  ];

  return (
    <section className="kaira-signature-section" id="explore-collections">
      <Container fluid className="px-lg-5 px-3">
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="kaira-signature-eyebrow">EXPLORE OUR COLLECTIONS</span>
          <h2 className="kaira-signature-title">Find Your Signature Scent</h2>
          <div className="kaira-signature-divider">
            <span className="divider-line" />
            <span className="divider-ornament">✦</span>
            <span className="divider-line" />
          </div>
        </div>

        {/* 4 Seamless Composite Cards: 2x2 Grid on Mobile for Fast Scanning */}
        <Row className="g-2 g-sm-3 g-xl-4 justify-content-center">
          {collections.map((item) => (
            <Col key={item.id} xs={6} lg={3}>
              <a
                href="#modern-classics"
                className="kaira-collection-card"
                onClick={(e) => {
                  if (onSelectCategory) {
                    onSelectCategory(item.title);
                  }
                }}
                aria-label={`${item.title} - ${item.tagline}`}
              >
                <div className="kaira-collection-card-img-wrap">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="kaira-collection-card-img"
                    loading="lazy"
                  />
                  <div className="kaira-collection-card-glow" />
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
