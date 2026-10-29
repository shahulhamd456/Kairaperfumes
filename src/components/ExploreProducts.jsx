import React from 'react';
import { Container } from 'react-bootstrap';
import { allProducts } from '../data/products';
import exploreModelSmiling from '../assets/explore_model_smiling.png';
import exploreModelProfile from '../assets/explore_model_profile.png';
import exploreModelTall from '../assets/explore_model_tall.png';

export default function ExploreProducts({ onProductSelect }) {
  // Bind banners to select products from the database for direct routing
  const getProductById = (id) => {
    return allProducts.find(p => p.id === id) || allProducts[0];
  };

  return (
    <section className="py-5" id="explore" style={{ backgroundColor: '#fcfcfc' }}>
      <Container className="py-4">
        {/* Eyebrow Pill Badge */}
        <div className="perfume-pill-badge-wrap">
          <span className="perfume-pill-badge">Premium Fragrances</span>
        </div>

        {/* Section Heading */}
        <div className="perfume-section-header">
          <h2 className="perfume-section-title">Explore Our Signature Fragrances</h2>
        </div>

        {/* Asymmetric Banners Grid */}
        <div className="asymmetric-grid-container mt-5">
          {/* Left Column: Stacked Banners */}
          <div className="asymmetric-left-col">
            {/* Top Banner (Smiling model with description overlay) */}
            <div 
              className="asymmetric-card asymmetric-card-short"
              onClick={() => onProductSelect(getProductById(8))}
            >
              <img 
                src={exploreModelSmiling} 
                alt="Refreshing Floral Fragrance" 
              />
              <div className="asymmetric-overlay-content">
                <div className="asymmetric-overlay-line"></div>
                <p className="asymmetric-overlay-text">
                  A refreshing and graceful fragrance with soft floral notes, designed to brighten your everyday moments.
                </p>
              </div>
            </div>

            {/* Bottom Banner (Woman profile view) */}
            <div 
              className="asymmetric-card asymmetric-card-short"
              onClick={() => onProductSelect(getProductById(3))}
            >
              <img 
                src={exploreModelProfile} 
                alt="Bold Woody Aroma" 
              />
              <div className="asymmetric-overlay-content">
                <div className="asymmetric-overlay-line"></div>
                <p className="asymmetric-overlay-text">
                  Bold and warm signature notes that captivate attention and linger gracefully throughout the day.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Tall Banner */}
          <div className="asymmetric-right-col">
            <div 
              className="asymmetric-card asymmetric-card-tall"
              onClick={() => onProductSelect(getProductById(2))}
            >
              <img 
                src={exploreModelTall} 
                alt="KAIRA Premium Scent" 
              />
              <div className="asymmetric-overlay-content">
                <div className="asymmetric-overlay-line"></div>
                <p className="asymmetric-overlay-text">
                  Experience the timeless luxury of organic ingredients blended in perfect harmony.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
