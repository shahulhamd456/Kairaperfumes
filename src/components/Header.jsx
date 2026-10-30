import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

export default function Header({
  cartItemsCount = 0,
  onCartOpen,
  wishlistCount = 0,
  onWishlistOpen,
  onNavigateHome,
  onNavigateProducts,
  searchQuery = '',
  onSearchChange,
  onSearchResultSelect,
  searchResults = [],
}) {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigateHome) onNavigateHome();
    setTimeout(() => {
      if (targetId === '#' || !targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const elem = document.querySelector(targetId);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  };

  const handleShopClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigateProducts) {
      onNavigateProducts();
    } else {
      handleNavClick(e, '#modern-classics');
    }
  };

  return (
    <header className="kaira-ref-header-wrapper">
      {/* 1. Top Announcement Bar matching exact reference */}
      <div className="kaira-ref-top-bar">
        <Container fluid className="px-lg-5 px-3">
          <div className="d-flex justify-content-center align-items-center gap-3 text-center">
            <span className="d-none d-md-inline">✦ FREE SHIPPING ON ORDERS OVER ₹999</span>
            <span className="bar-pipe d-none d-md-inline">|</span>
            <span className="d-none d-md-inline">FREE SAMPLES WITH EVERY ORDER</span>
            <span className="bar-pipe d-none d-md-inline">|</span>
            <a
              href="https://maps.app.goo.gl/dEzjoPiXYKn1rqmd8"
              target="_blank"
              rel="noopener noreferrer"
              className="d-none d-md-inline text-white text-decoration-none"
              style={{ letterSpacing: '0.12em' }}
            >
              VISIT OUR STORE 📍
            </a>
            <span className="d-md-none kaira-top-ticker-mobile">✦ FREE SHIPPING &amp; SAMPLES ON ALL ORDERS ✦</span>
          </div>
        </Container>
      </div>

      {/* 2. Main Luxury Header Navbar */}
      <nav className={`kaira-ref-navbar ${scrolled ? 'scrolled' : ''}`}>
        <Container fluid className="px-lg-5 px-3">
          <div className="kaira-ref-navbar-grid">
            
            {/* Left Navigation */}
            <div className="kaira-nav-left d-none d-lg-flex align-items-center gap-4">
              <a
                href="#all-products"
                className="nav-item-link"
                onClick={handleShopClick}
              >
                SHOP <span className="material-symbols-outlined dropdown-arrow">expand_more</span>
              </a>
              <a
                href="#explore-collections"
                className="nav-item-link"
                onClick={(e) => handleNavClick(e, '#explore-collections')}
              >
                COLLECTIONS
              </a>
              <a
                href="#modern-classics"
                className="nav-item-link"
                onClick={(e) => handleNavClick(e, '#modern-classics')}
              >
                BESTSELLERS
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="d-lg-none kaira-mobile-toggle-col">
              <button
                type="button"
                className="mobile-toggle-btn border-0 bg-transparent p-0"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className="material-symbols-outlined">
                  {mobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>

            {/* Center Logo */}
            <div className="kaira-nav-center text-center">
              <a
                href="#"
                className="kaira-logo-link text-decoration-none"
                onClick={(e) => handleNavClick(e, '#')}
              >
                <span className="kaira-logo-title">KAIRA</span>
                <span className="kaira-logo-subtitle">PARFUMS</span>
              </a>
            </div>

            {/* Right Navigation & Icons */}
            <div className="kaira-nav-right d-flex align-items-center justify-content-end gap-3 gap-lg-4">
              <div className="d-none d-xl-flex align-items-center gap-4">
                <a
                  href="#nature-remembers"
                  className="nav-item-link"
                  onClick={(e) => handleNavClick(e, '#nature-remembers')}
                >
                  ABOUT
                </a>
                <a
                  href="#stories-in-scent"
                  className="nav-item-link"
                  onClick={(e) => handleNavClick(e, '#stories-in-scent')}
                >
                  JOURNAL
                </a>
                <a
                  href="https://maps.app.goo.gl/dEzjoPiXYKn1rqmd8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-item-link"
                >
                  STORE
                </a>
              </div>

              {/* Action Icons */}
              <div className="d-flex align-items-center gap-3">
                {/* Search Toggle */}
                <div className="kaira-header-search-wrap position-relative">
                  {searchOpen && (
                    <input
                      type="text"
                      placeholder="Search fragrances..."
                      value={searchQuery}
                      onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
                      className="kaira-header-search-input"
                      autoFocus
                    />
                  )}
                  <button
                    type="button"
                    className="action-icon-btn border-0 bg-transparent"
                    onClick={() => setSearchOpen(!searchOpen)}
                    aria-label="Search"
                  >
                    <span className="material-symbols-outlined">
                      {searchOpen ? 'close' : 'search'}
                    </span>
                  </button>

                  {/* Search Dropdown */}
                  {searchOpen && searchResults.length > 0 && (
                    <div className="kaira-header-search-dropdown">
                      {searchResults.slice(0, 5).map((item) => (
                        <div
                          key={item.id}
                          className="search-item d-flex align-items-center gap-2 p-2"
                          onClick={() => {
                            if (onSearchResultSelect) onSearchResultSelect(item);
                            setSearchOpen(false);
                          }}
                        >
                          <img src={item.image} alt={item.title} style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                          <div>
                            <div style={{ fontSize: '12px', fontWeight: '600' }}>{item.title}</div>
                            <div style={{ fontSize: '10px', color: '#6e635b' }}>{item.price}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Cart Drawer */}
                <button
                  type="button"
                  className="action-icon-btn position-relative border-0 bg-transparent"
                  onClick={onCartOpen}
                  aria-label="Cart"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                  <span className="cart-badge-count">{cartItemsCount}</span>
                </button>
              </div>
            </div>

          </div>
        </Container>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="kaira-mobile-nav-drawer">
          <a href="#all-products" onClick={handleShopClick}>ALL PRODUCTS</a>
          <a href="#explore-collections" onClick={(e) => handleNavClick(e, '#explore-collections')}>COLLECTIONS</a>
          <a href="#modern-classics" onClick={(e) => handleNavClick(e, '#modern-classics')}>BESTSELLERS</a>
          <a href="#nature-remembers" onClick={(e) => handleNavClick(e, '#nature-remembers')}>ABOUT</a>
          <a href="#stories-in-scent" onClick={(e) => handleNavClick(e, '#stories-in-scent')}>JOURNAL</a>
          <a href="#join-journey" onClick={(e) => handleNavClick(e, '#join-journey')}>CONTACT</a>
          <a
            href="https://maps.app.goo.gl/dEzjoPiXYKn1rqmd8"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#c59a3f' }}
          >
            STORE LOCATION 📍
          </a>
        </div>
      )}
    </header>
  );
}
