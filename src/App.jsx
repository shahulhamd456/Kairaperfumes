import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import SignatureCollections from './components/SignatureCollections';
import ScentFamilies from './components/ScentFamilies';
import ModernClassics from './components/ModernClassics';
import NatureRemembers from './components/NatureRemembers';
import StoriesInScent from './components/StoriesInScent';
import FounderStory from './components/FounderStory';
import PinpointMap from './components/PinpointMap';
import JoinJourney from './components/JoinJourney';
import ProductDetail from './components/ProductDetail';
import ProductsPage from './components/ProductsPage';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import Footer from './components/Footer';
import { allProducts } from './data/products';

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'products' | 'detail'
  const [previousView, setPreviousView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Show a temporary unobtrusive luxury toast notification
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 2800);
  };

  // Add fragrance item to shopping cart
  const handleAddToCart = (product, quantity, volume, priceString) => {
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex(
        (item) => item.id === product.id && item.selectedVolume === volume
      );

      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [
          ...prevCart,
          {
            ...product,
            quantity,
            selectedVolume: volume,
            price: priceString,
          },
        ];
      }
    });

    // Auto-open drawer to show visual confirmation of item added
    setCartOpen(true);
  };

  // Toggle item in Wishlist
  const handleAddToWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        showToast(`Removed "${product.title}" from your wishlist`);
        return prev.filter((item) => item.id !== product.id);
      } else {
        showToast(`Added "${product.title}" to your wishlist`);
        return [...prev, product];
      }
    });
  };

  // Remove item directly from Wishlist
  const handleRemoveFromWishlist = (product) => {
    setWishlist((prev) => prev.filter((item) => item.id !== product.id));
    showToast(`Removed "${product.title}" from wishlist`);
  };

  // Adjust item quantities from inside the Cart Drawer
  const handleUpdateQuantity = (itemId, volume, delta) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === itemId && item.selectedVolume === volume) {
            const newQty = item.quantity + delta;
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  // Remove specific item from cart
  const handleRemoveFromCart = (itemId, volume) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === itemId && item.selectedVolume === volume))
    );
  };

  // Clear cart upon checkout
  const handleClearCart = () => {
    setCart([]);
  };

  // Open details page for chosen fragrance
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setPreviousView(currentView);
    setCurrentView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Return back to main catalog / homepage
  const handleBackToCatalog = () => {
    setCurrentView('home');
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigate to dedicated Products page
  const handleNavigateToProducts = () => {
    setCurrentView('products');
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Back from product detail
  const handleBackFromDetail = () => {
    if (previousView === 'products') {
      setCurrentView('products');
    } else {
      setCurrentView('home');
    }
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter search results
  const searchResults = searchQuery.trim()
    ? allProducts.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (p.notes && p.notes.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <Header
        cartItemsCount={totalItemsCount}
        onCartOpen={() => setCartOpen(true)}
        wishlistCount={wishlist.length}
        onWishlistOpen={() => setWishlistOpen(true)}
        onNavigateHome={handleBackToCatalog}
        onNavigateProducts={handleNavigateToProducts}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        searchResults={searchResults}
        onSearchResultSelect={handleProductSelect}
      />

      {/* Luxury Toast Notification */}
      {toastMessage && (
        <div className="velora-toast-msg">
          <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#c59a3f' }}>
            favorite
          </span>
          {toastMessage}
        </div>
      )}

      <main>
        {currentView === 'home' && (
          <>
            {/* 1. Hero */}
            <Hero />

            {/* 2. Find Your Signature Scent (For Her, For Him, Unisex, Discovery Sets with KAIRA bottles) */}
            <SignatureCollections onSelectCategory={handleNavigateToProducts} />

            {/* 3. Scent Families */}
            <ScentFamilies onSelectCategory={handleBackToCatalog} />

            {/* 4. Single-Row Bestselling Perfumes (Teaser with See All link) */}
            <ModernClassics
              onProductSelect={handleProductSelect}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
              wishlist={wishlist}
              onSeeAll={handleNavigateToProducts}
            />

            {/* 5. Notes Breakdown */}
            <NatureRemembers onProductSelect={handleProductSelect} />

            {/* 6. Stories in Scent */}
            <StoriesInScent />

            {/* 7. Meet the Founder - Sirajudheen */}
            <FounderStory />

            {/* 8. Flagship Boutique Pinpoint Map */}
            <PinpointMap />
          </>
        )}

        {currentView === 'products' && (
          <ProductsPage
            onProductSelect={handleProductSelect}
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
            wishlist={wishlist}
            onBackToHome={handleBackToCatalog}
          />
        )}

        {currentView === 'detail' && (
          <ProductDetail
            product={selectedProduct}
            onBack={handleBackFromDetail}
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
            wishlist={wishlist}
            allProducts={allProducts}
            onProductSelect={handleProductSelect}
          />
        )}
      </main>

      {/* 7. VELORA Footer */}
      <Footer />

      {/* Cart Sliding Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Wishlist Sliding Drawer */}
      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlistItems={wishlist}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onAddToCart={handleAddToCart}
        onProductSelect={handleProductSelect}
      />
    </>
  );
}

export default App;
