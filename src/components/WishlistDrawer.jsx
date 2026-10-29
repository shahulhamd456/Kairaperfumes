import React from 'react';

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveFromWishlist,
  onAddToCart,
  onProductSelect,
}) {
  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`cart-drawer-overlay${isOpen ? ' open' : ''}`}
        onClick={onClose}
      />

      {/* Drawer panel */}
      <div className={`cart-drawer${isOpen ? ' open' : ''}`}>
        <div className="cart-drawer-header">
          <h3 className="label-caps mb-0" style={{ color: 'var(--on-surface)' }}>
            Your Wishlist ({wishlistItems.length})
          </h3>
          <button
            className="border-0 bg-transparent p-0 d-flex align-items-center"
            onClick={onClose}
            aria-label="Close wishlist"
          >
            <span className="material-symbols-outlined text-dark" style={{ fontSize: '20px' }}>
              close
            </span>
          </button>
        </div>

        <div className="cart-drawer-body">
          {wishlistItems.length === 0 ? (
            <div className="d-flex flex-column align-items-center justify-content-center h-100 text-muted p-4 text-center">
              <span
                className="material-symbols-outlined mb-3"
                style={{ fontSize: '40px', color: 'var(--primary-color)', opacity: 0.7 }}
              >
                favorite_border
              </span>
              <h4 className="font-serif-luxury mb-2" style={{ fontSize: '18px', color: 'var(--on-surface)' }}>
                Your Wishlist is Empty
              </h4>
              <p className="body-md mb-0 text-muted" style={{ fontSize: '13px', maxWidth: '240px' }}>
                Tap the heart on any luxury fragrance to curate your personal collection.
              </p>
            </div>
          ) : (
            wishlistItems.map((item) => (
              <div className="cart-item-row" key={item.id}>
                <div
                  className="cart-item-image"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    onClose();
                    onProductSelect(item);
                  }}
                >
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="flex-grow-1">
                  <h4
                    className="font-serif-luxury mb-1"
                    style={{ fontSize: '14px', color: 'var(--on-surface)', cursor: 'pointer' }}
                    onClick={() => {
                      onClose();
                      onProductSelect(item);
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-muted mb-2"
                    style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                  >
                    {item.concentration || 'Eau De Parfum'}
                  </p>

                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <span className="font-serif-luxury" style={{ fontSize: '13px', fontWeight: '600' }}>
                      {item.salePrice || item.price}
                    </span>

                    <div className="d-flex align-items-center gap-2">
                      <button
                        className="btn border-0 py-1 px-2"
                        style={{
                          backgroundColor: 'var(--primary-color)',
                          color: '#fff',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '10px',
                          fontWeight: '600',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          borderRadius: '2px',
                        }}
                        onClick={() => {
                          onAddToCart(item, 1, '50ml', item.salePrice || item.price);
                          onRemoveFromWishlist(item);
                        }}
                      >
                        Add to Bag
                      </button>

                      <button
                        className="border-0 bg-transparent p-1 text-muted"
                        onClick={() => onRemoveFromWishlist(item)}
                        title="Remove from Wishlist"
                        style={{ display: 'flex', alignItems: 'center' }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                          delete_outline
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {wishlistItems.length > 0 && (
          <div className="cart-drawer-footer">
            <button
              className="btn text-uppercase w-100 py-3 border-0"
              style={{
                backgroundColor: 'var(--inverse-surface)',
                color: 'var(--inverse-on-surface)',
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.15em',
                borderRadius: 0,
              }}
              onClick={() => {
                wishlistItems.forEach((item) => {
                  onAddToCart(item, 1, '50ml', item.salePrice || item.price);
                });
                onClose();
              }}
            >
              Move All to Bag
            </button>
          </div>
        )}
      </div>
    </>
  );
}
