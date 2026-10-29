import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Story() {
  return (
    <section className="py-5" style={{ backgroundColor: 'var(--surface-container-high)' }}>
      <Container className="my-5">
        <Row className="gy-5 align-items-center">
          <Col lg={5} className="order-2 order-lg-1">
            <div className="position-relative galleria-effect rounded-3 overflow-hidden" style={{ aspectRatio: '4/5' }}>
              <img
                className="w-100 h-100 object-fit-cover"
                style={{ filter: 'grayscale(100%) brightness(95%)' }}
                alt="Hands delicately handling rare perfume ingredients"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoKY7R7t-ERCD1lHPeQlK01ZlIpFE28ZZN52OIckJGuBvq2GeUkEg_n3fc6jNZrptnIcAHsdxSM0qCqaFoojie1d9S1-tT8LNy8rEuPLHGFdczlTIO6aTpmIi_3pL-CQ2bSKyD0Q-Gyx9D7ed2yUpayn0YCP-KSL_30MtlhCx-F2KGt25_Zyhavn--pBcBiK8MXZAQVFrU015bXL9d1tn0ZwyArl4uP_3pk-Dla0TSVf9YP-xan8g-5W9G0wIL2TnymsxmsVShHFM"
              />
              <div
                className="position-absolute top-0 start-0 bg-white p-4 shadow-sm d-none d-md-block"
                style={{ transform: 'translate(-10px, -10px)' }}
              >
                <span className="display-lg text-primary opacity-25 italic" style={{ fontSize: '48px' }}>
                  Artisan
                </span>
              </div>
            </div>
          </Col>
          <Col lg={6} className="offset-lg-1 order-1 order-lg-2 space-y-4">
            <span className="label-caps mb-3 d-block" style={{ color: 'var(--primary-color)' }}>
              OUR PHILOSOPHY
            </span>
            <h2 className="display-lg mb-4" style={{ fontSize: '2.5rem' }}>
              The Art of Distilling <br />
              <span className="fst-italic text-muted">Emotion</span>
            </h2>
            <p className="body-lg mb-4">
              We believe a fragrance is more than a scent—it is a memory, an armor, and a silent language. Each ELIXIR D'OR creation is meticulously blended in Grasse, utilizing the world's most precious oils to evoke deep personal narratives.
            </p>
            <Row className="gy-4 mb-4">
              <Col sm={6}>
                <h4 className="label-caps mb-2" style={{ color: 'var(--primary-color)' }}>
                  ORIGIN
                </h4>
                <p className="body-md text-muted mb-0">Sustainable crops from Provence and Morocco.</p>
              </Col>
              <Col sm={6}>
                <h4 className="label-caps mb-2" style={{ color: 'var(--primary-color)' }}>
                  PROCESS
                </h4>
                <p className="body-md text-muted mb-0">Traditional 6-week maceration for peak intensity.</p>
              </Col>
            </Row>
            <div>
              <button
                className="label-caps border-0 bg-transparent border-bottom border-dark pb-1 text-dark hover-text-primary transition-colors"
                style={{ fontWeight: '600' }}
              >
                OUR STORY
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
