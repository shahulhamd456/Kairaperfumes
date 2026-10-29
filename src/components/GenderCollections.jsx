import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { allProducts } from '../data/products';
import ProductCard from './ProductCard';

export default function GenderCollections({
  onProductSelect,
  onAddToCart,
  onAddToWishlist,
  wishlist = [],
}) {
  // Tabs states for For Him & For Her sections independently
  const [himTab, setHimTab] = useState('best-seller'); // 'best-seller' | 'on-sale'
  const [herTab, setHerTab] = useState('best-seller'); // 'best-seller' | 'on-sale'

  // Filter products for Him (IDs 5, 6, 7) and Her (IDs 8, 9, 10)
  const himProducts = allProducts.filter(p => [5, 6, 7].includes(p.id));
  const herProducts = allProducts.filter(p => [8, 9, 10].includes(p.id));

  // Filter by tabs
  const getFilteredProducts = (products, activeTab) => {
    if (activeTab === 'best-seller') {
      return products.filter(p => p.isBestSeller);
    } else {
      return products.filter(p => p.isOnSale);
    }
  };

  const activeHimProducts = getFilteredProducts(himProducts, himTab);
  const activeHerProducts = getFilteredProducts(herProducts, herTab);

  const renderProductGrid = (productsList) => {
    if (productsList.length === 0) {
      return (
        <Col className="text-center py-4 text-muted">
          No fragrances match this filter selection.
        </Col>
      );
    }

    return productsList.map(product => {
      const isWishlisted = wishlist.some(item => item.id === product.id);

      return (
        <Col key={product.id} xs={12} sm={6} md={4} lg={4}>
          <ProductCard
            product={product}
            onProductSelect={onProductSelect}
            onAddToCart={onAddToCart}
            onAddToWishlist={onAddToWishlist}
            isWishlisted={isWishlisted}
          />
        </Col>
      );
    });
  };

  return (
    <div id="gender-collections">
      {/* ── Section 1: For Him ── */}
      <section className="py-5" id="for-him" style={{ backgroundColor: '#fcfcfc', borderBottom: '1px solid var(--outline-variant)' }}>
        <Container className="py-4">
          <div className="perfume-section-header">
            <span className="perfume-section-label">KAIRA Pour Homme</span>
            <h2 className="perfume-section-title">Bold Scents for the Modern Man</h2>
          </div>

          {/* Tab switches */}
          <div className="perfume-tabs-nav">
            <button
              className={`perfume-tab-trigger ${himTab === 'best-seller' ? 'active' : ''}`}
              onClick={() => setHimTab('best-seller')}
            >
              Best Seller
            </button>
            <button
              className={`perfume-tab-trigger ${himTab === 'on-sale' ? 'active' : ''}`}
              onClick={() => setHimTab('on-sale')}
            >
              On Sale
            </button>
          </div>

          <Row className="g-4 justify-content-center">
            {renderProductGrid(activeHimProducts)}
          </Row>
        </Container>
      </section>

      {/* ── Section 2: For Her ── */}
      <section className="py-5" id="for-her" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--outline-variant)' }}>
        <Container className="py-4">
          <div className="perfume-section-header">
            <span className="perfume-section-label">KAIRA Pour Femme</span>
            <h2 className="perfume-section-title">Elegant Fragrances for Every Woman</h2>
          </div>

          {/* Tab switches */}
          <div className="perfume-tabs-nav">
            <button
              className={`perfume-tab-trigger ${herTab === 'best-seller' ? 'active' : ''}`}
              onClick={() => setHerTab('best-seller')}
            >
              Best Seller
            </button>
            <button
              className={`perfume-tab-trigger ${herTab === 'on-sale' ? 'active' : ''}`}
              onClick={() => setHerTab('on-sale')}
            >
              On Sale
            </button>
          </div>

          <Row className="g-4 justify-content-center">
            {renderProductGrid(activeHerProducts)}
          </Row>
        </Container>
      </section>
    </div>
  );
}
