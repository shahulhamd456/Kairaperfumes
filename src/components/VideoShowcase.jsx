import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="video-showcase-section" id="discover-video">
      <Container>
        <div className="perfume-section-header text-white">
          <span className="perfume-section-label" style={{ color: '#fff', opacity: 0.6 }}>Scent In Motion</span>
          <h2 className="perfume-section-title text-white">Fragrances Through Video</h2>
        </div>

        <div className="video-showcase-player-box">
          {isPlaying ? (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/n3W-n_dF3yY?autoplay=1&mute=1"
              title="Fragrance Video Showcase"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ border: 'none' }}
            ></iframe>
          ) : (
            <div className="video-overlay-play-cover" onClick={() => setIsPlaying(true)}>
              {/* Overlay Background image */}
              <img
                src="https://wpthemes.themehunk.com/perfume-mania/wp-content/uploads/sites/298/2024/04/img2.png"
                alt="Play Video"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.6,
                  zIndex: 1
                }}
              />
              <div className="video-play-btn-ring" style={{ zIndex: 2 }}>
                <span className="material-symbols-outlined">play_arrow</span>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
