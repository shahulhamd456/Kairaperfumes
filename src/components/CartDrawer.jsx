import React, { useState } from 'react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveFromCart,
  onClearCart,
}) {
  const [checkedOut, setCheckedOut] = useState(false);

  const WHATSAPP_NUMBER = "918086712325";
  const WHATSAPP_DISPLAY = "+91 80867 12325";

  const subtotal = cartItems.reduce((sum, item) => {
    // Robust parsing for INR or any currency format
    const numericPrice = parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0;
    return sum + numericPrice * item.quantity;
  }, 0);

  const getWhatsAppOrderUrl = () => {
    if (cartItems.length === 0) return '';
    const itemsList = cartItems
      .map((item, idx) => {
        return `${idx + 1}. *${item.title}* (${item.selectedVolume || '50ml'})
   • Qty: ${item.quantity}
   • Price: ${item.price}`;
      })
      .join('\n\n');

    const totalBottles = cartItems.reduce((acc, it) => acc + it.quantity, 0);

    const message = 
`✨ *NEW ORDER — KAIRA PERFUMES* ✨
━━━━━━━━━━━━━━━━━━━━━
Hello KAIRA, I would like to place an order:

🛍️ *ORDER ITEMS:*
${itemsList}

━━━━━━━━━━━━━━━━━━━━━
📦 *Total Bottles:* ${totalBottles}
💰 *Subtotal Amount:* ₹${subtotal.toLocaleString('en-IN')}
🚚 *Delivery:* Free Express Tracked Delivery
━━━━━━━━━━━━━━━━━━━━━
Please confirm my order and share payment instructions. Thank you!`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    const url = getWhatsAppOrderUrl();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
    setCheckedOut(true);
  };

  const handleCloseSuccess = () => {
    setCheckedOut(false);
    onClearCart();
    onClose();
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`cart-drawer-overlay${isOpen ? ' open' : ''}`}
        onClick={checkedOut ? handleCloseSuccess : onClose}
      />

      {/* Drawer panel */}
      <div className={`cart-drawer${isOpen ? ' open' : ''}`}>
        {checkedOut ? (
          /* Checkout Success Screen with WhatsApp Re-trigger option */
          <div className="d-flex flex-column align-items-center justify-content-center h-100 p-4 text-center bg-background">
            <div className="kaira-wa-success-badge mb-3">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.677.15-.2.301-.776.979-.952 1.18-.175.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.676-2.085-.175-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.15-.176.2-.301.3-.502.101-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.235-.245-.589-.494-.509-.677-.518-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.803.376-.276.301-1.053 1.029-1.053 2.509s1.079 2.908 1.229 3.109c.15.2 2.122 3.24 5.141 4.544.718.31 1.278.496 1.716.635.722.23 1.38.197 1.899.12.579-.087 1.78-.727 2.031-1.429.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.35zM12.04 2C6.518 2 2.03 6.488 2.03 12.01c0 1.98.583 3.824 1.597 5.378L2.03 22.01l4.795-1.554a9.98 9.98 0 0 0 5.215 1.554c5.522 0 10.01-4.488 10.01-10.01C22.05 6.488 17.562 2 12.04 2z"/>
              </svg>
            </div>
            <h3 className="font-serif-luxury mb-2" style={{ fontSize: '22px' }}>
              Order Routed to WhatsApp!
            </h3>
            <p className="body-md text-muted mb-3" style={{ fontSize: '13px', lineHeight: '1.6' }}>
              We have opened WhatsApp to message your order directly to KAIRA at <strong>{WHATSAPP_DISPLAY}</strong>.
            </p>
            <div
              className="p-3 mb-3 w-100"
              style={{ backgroundColor: '#f5f3ef', borderRadius: '8px', textAlign: 'left', border: '1px solid rgba(0,0,0,0.06)' }}
            >
              <span className="label-caps d-block text-muted mb-1" style={{ fontSize: '10px' }}>
                Order Summary
              </span>
              <p className="mb-1 text-dark fw-bold">
                Subtotal: ₹{subtotal.toLocaleString('en-IN')}
              </p>
              <small className="text-muted d-block">
                {cartItems.reduce((acc, it) => acc + it.quantity, 0)} bottle(s) • Handcrafted 35% Pure Perfume Oil
              </small>
            </div>

            <div className="d-flex flex-column gap-2 w-100">
              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark w-100 py-2 d-flex align-items-center justify-content-center gap-2"
                style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.1em' }}
              >
                <span>Re-send WhatsApp Order</span>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>open_in_new</span>
              </a>

              <button
                type="button"
                className="btn text-uppercase w-100 py-2 border-0"
                style={{
                  backgroundColor: 'var(--primary-color)',
                  color: '#fff',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  borderRadius: '4px',
                }}
                onClick={handleCloseSuccess}
              >
                Done &amp; Continue Browsing
              </button>
            </div>
          </div>
        ) : (
          /* Normal Cart Screen */
          <>
            <div className="cart-drawer-header">
              <h3 className="label-caps mb-0" style={{ color: 'var(--on-surface)' }}>
                Shopping Bag ({cartItems.reduce((acc, it) => acc + it.quantity, 0)})
              </h3>
              <button
                type="button"
                className="border-0 bg-transparent p-0 d-flex align-items-center"
                onClick={onClose}
              >
                <span className="material-symbols-outlined text-dark" style={{ fontSize: '20px' }}>
                  close
                </span>
              </button>
            </div>

            <div className="cart-drawer-body">
              {cartItems.length === 0 ? (
                <div className="d-flex flex-column align-items-center justify-content-center h-100 text-muted p-4">
                  <span className="material-symbols-outlined mb-3" style={{ fontSize: '42px', opacity: 0.5 }}>
                    shopping_bag
                  </span>
                  <p className="body-md mb-2 text-center text-dark fw-medium">
                    Your shopping bag is empty.
                  </p>
                  <p className="small text-muted text-center">
                    Discover our signature extraits starting from ₹349 for 30ml and ₹599 for 50ml.
                  </p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div className="cart-item-row" key={`${item.id}-${item.selectedVolume}`}>
                    <div className="cart-item-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="flex-grow-1">
                      <span className="d-block text-muted" style={{ fontSize: '10px', textTransform: 'uppercase' }}>
                        {item.brand}
                      </span>
                      <h4
                        className="font-serif-luxury mb-1"
                        style={{ fontSize: '15px', color: 'var(--on-surface)' }}
                      >
                        {item.title}
                      </h4>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="badge bg-light text-dark border" style={{ fontSize: '10px' }}>
                          {item.selectedVolume}
                        </span>
                        <span className="text-muted" style={{ fontSize: '10px' }}>
                          {item.selectedVolume === '30ml' ? 'Pocket Luxury' : 'Full Sized'}
                        </span>
                      </div>

                      <div className="d-flex align-items-center justify-content-between">
                        {/* Quantity adjusters */}
                        <div className="quantity-control">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, item.selectedVolume, -1)}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, item.selectedVolume, 1)}
                          >
                            +
                          </button>
                        </div>
                        <span
                          className="font-serif-luxury"
                          style={{ fontSize: '15px', fontWeight: '600' }}
                        >
                          {item.price}
                        </span>
                      </div>
                    </div>

                    {/* Delete action */}
                    <button
                      type="button"
                      className="border-0 bg-transparent p-0 text-muted hover-opacity ms-2"
                      onClick={() => onRemoveFromCart(item.id, item.selectedVolume)}
                      aria-label="Remove item"
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                        delete
                      </span>
                    </button>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="cart-drawer-footer">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span className="label-caps" style={{ color: 'var(--on-surface-variant)' }}>
                    Subtotal
                  </span>
                  <span
                    className="font-serif-luxury"
                    style={{ fontSize: '20px', fontWeight: '600', color: '#131111' }}
                  >
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <p className="text-muted mb-3" style={{ fontSize: '11px' }}>
                  Includes taxes • Free tracked express shipping across India
                </p>
                <button
                  type="button"
                  className="kaira-checkout-wa-btn btn text-uppercase w-100 py-3 border-0 d-flex align-items-center justify-content-center gap-2"
                  onClick={handleCheckout}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.677.15-.2.301-.776.979-.952 1.18-.175.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.676-2.085-.175-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.15-.176.2-.301.3-.502.101-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.235-.245-.589-.494-.509-.677-.518-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.803.376-.276.301-1.053 1.029-1.053 2.509s1.079 2.908 1.229 3.109c.15.2 2.122 3.24 5.141 4.544.718.31 1.278.496 1.716.635.722.23 1.38.197 1.899.12.579-.087 1.78-.727 2.031-1.429.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.35zM12.04 2C6.518 2 2.03 6.488 2.03 12.01c0 1.98.583 3.824 1.597 5.378L2.03 22.01l4.795-1.554a9.98 9.98 0 0 0 5.215 1.554c5.522 0 10.01-4.488 10.01-10.01C22.05 6.488 17.562 2 12.04 2z"/>
                  </svg>
                  <span>ORDER VIA WHATSAPP • ₹{subtotal.toLocaleString('en-IN')}</span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
