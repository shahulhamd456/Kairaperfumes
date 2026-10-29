import React, { useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import oilAlchemyImg from '../assets/kaira_journal_layering.jpg';
import incenseSmokeImg from '../assets/kaira_journal_bakhoor.jpg';
import roseHarvestImg from '../assets/kaira_journal_rose.jpg';

export default function StoriesInScent() {
  const [activeStory, setActiveStory] = useState(null);

  const stories = [
    {
      id: 'layering',
      title: 'How to Layer Your Perfumes',
      tag: 'SCENT GUIDE',
      readTime: '3 MIN READ',
      image: oilAlchemyImg,
      summary:
        'Combine fresh, light notes with deep amber and oud. Learn how pairing two scents creates a unique fragrance that is all yours.',
      fullText:
        'Fragrance layering is easy and fun. Start by spraying your warmer, deeper perfume—like amber or oud—on your neck and wrists. Let it settle for a minute. Then, spray a lighter, fresh perfume like citrus or oceanic notes on top. As the day goes on, both scents blend naturally to create a custom fragrance that belongs only to you.',
    },
    {
      id: 'bakhoor',
      title: 'The Art of Bakhoor & Incense',
      tag: 'HERITAGE',
      readTime: '4 MIN READ',
      image: incenseSmokeImg,
      summary:
        'How to use aromatic agarwood smoke on your clothes before spraying perfume to keep your scent fresh for 24 hours.',
      fullText:
        'In traditional Arabian perfumery, rich fragrance starts with bakhoor. Slow-burning wood chips infused with pure oud oil and amber release fragrant smoke. Let this warm smoke gently touch your clothes before putting them on. When you spray your liquid perfume afterwards, the wood smoke holds the perfume oils tight—giving you an incredible scent that lasts all day and night.',
    },
    {
      id: 'rose',
      title: 'Fresh Morning Damask Roses',
      tag: 'INGREDIENTS',
      readTime: '3 MIN READ',
      image: roseHarvestImg,
      summary:
        'Why rose petals picked early in the morning create the richest, most natural floral scent in luxury perfumes.',
      fullText:
        'At dawn, before the morning sun gets too hot, Damask rose petals hold their purest, richest natural oils. Picked gently by hand, these fresh petals give our perfumes a velvety floral heart that is neither too sweet nor overwhelming. Blended with warm amber and pure oud, it creates a balanced scent loved equally by men and women.',
    },
  ];

  return (
    <section className="kaira-stories-section" id="stories-in-scent">
      <Container fluid className="px-lg-5 px-3">
        {/* Section Header */}
        <div className="kaira-stories-header text-center mb-4">
          <span className="kaira-stories-eyebrow">✦ KAIRA FRAGRANCE JOURNAL ✦</span>
          <h2 className="kaira-stories-title">Fragrance Guides &amp; Stories</h2>
          <p className="kaira-stories-subtitle mx-auto">
            Learn how our perfumes are made, how to wear them, and tips to make your scent last all day.
          </p>
          <div className="kaira-signature-divider mt-2 mb-3">
            <span className="divider-line" />
            <span className="divider-ornament">✦</span>
            <span className="divider-line" />
          </div>
        </div>

        {/* Responsive Rail: Smooth Horizontal Scroll on Mobile, 3-col Grid on Desktop */}
        <div className="kaira-stories-rail-wrap">
          <div className="kaira-stories-rail">
            {stories.map((story) => (
              <div key={story.id} className="kaira-story-rail-col">
                <article className="kaira-story-card h-100">
                  <div className="kaira-story-img-container">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="kaira-story-img"
                      loading="lazy"
                    />
                    <div className="kaira-story-tag-badge">{story.tag}</div>
                  </div>

                  <div className="kaira-story-body">
                    <div className="kaira-story-meta-top">
                      <span className="kaira-story-read-time">{story.readTime}</span>
                    </div>

                    <h3 className="kaira-story-card-title">{story.title}</h3>
                    <p className="kaira-story-card-summary">{story.summary}</p>

                    <button
                      type="button"
                      className="kaira-story-read-btn"
                      onClick={() => setActiveStory(story)}
                    >
                      <span>READ GUIDE</span>
                      <span className="read-arrow">→</span>
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Story Detail Modal */}
      {activeStory && (
        <Modal
          show={!!activeStory}
          onHide={() => setActiveStory(null)}
          centered
          size="lg"
          className="kaira-story-modal"
        >
          <Modal.Header closeButton className="kaira-modal-header border-0 pb-0">
            <span className="kaira-modal-tag">{activeStory.tag}</span>
          </Modal.Header>
          <Modal.Body className="kaira-modal-body pt-2 px-3 px-md-4 pb-4">
            <div className="kaira-modal-img-wrap mb-3 mb-md-4">
              <img src={activeStory.image} alt={activeStory.title} className="w-100 rounded" />
            </div>
            <h3 className="kaira-modal-title mb-2 mb-md-3">{activeStory.title}</h3>
            <p className="kaira-modal-text">{activeStory.fullText}</p>
          </Modal.Body>
          <Modal.Footer className="border-0 pt-0 justify-content-between px-3 px-md-4 pb-4">
            <a href="#modern-classics" className="kaira-modal-cta" onClick={() => setActiveStory(null)}>
              SEE ALL PERFUMES →
            </a>
            <button
              type="button"
              className="kaira-modal-close-btn"
              onClick={() => setActiveStory(null)}
            >
              CLOSE
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
}
