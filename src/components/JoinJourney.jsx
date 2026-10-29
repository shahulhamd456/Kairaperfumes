import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import highResPetals from '../assets/scent_floral.jpg';

export default function JoinJourney() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3500);
    }
  };

  return (
    <section className="velora-join-section">
      <Container fluid className="px-lg-5 px-3">
        <div className="velora-join-banner">
          {/* High-Resolution Botanical Petal Art */}
          <div className="velora-join-petal-wrap">
            <img src={highResPetals} alt="Botanical Damask Petals" />
          </div>

          {/* Center text & Form */}
          <div className="velora-join-content">
            <div className="velora-join-text">
              <h3 className="velora-join-title">Join the Journey</h3>
              <p className="velora-join-sub">
                Be the first to know about new creations, private releases, and stories from our world.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="velora-join-form">
              {subscribed ? (
                <div className="velora-join-success">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                    check_circle
                  </span>
                  <span>Thank you for joining our fragrance circle.</span>
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="velora-join-input"
                  />
                  <button type="submit" className="velora-join-btn">
                    <span>SUBSCRIBE</span>
                    <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>
                      arrow_forward
                    </span>
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
