import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const products = [
  {
    id: 1,
    type: "EAU DE PARFUM",
    title: "L'Aube Dorée",
    price: "$245.00 — 50ml",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKeU1M4qDjZ055wtVtkTJHfSAF6ChAbBKx2V23IfBCSnqO7Ka7M_BBZgrntyVX9h81LWPXdzvWGhoixe5I1BsE35FHTIJo50PlmYbZm3qVLBrxUil3afbvl4H1L56CBQCs4JpE1sh5cCJb9UIfRGjMR0uqpm4sH6BZUO1qZeG19faFhiCnvsKCr2OdBxc2ywUHDx9-KrHyjiaEodskks3Tp--b9PR5XLcDvkguDKlsUh6LNqdgLvU-3ysBxZDfOsi4wHNE5yWIhPU"
  },
  {
    id: 2,
    type: "PARFUM EXTRAIT",
    title: "Nuit de Velours",
    price: "$310.00 — 50ml",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4ZHnnvWgHhiYqZlLH7ZGVwWAdrBBVQdpJNvIWIdEijmecL7whGtb6UpGvff88Hn8OtPTZRNjU4w7rQCMl200l6N-2-rBwwnAsMcKye4xopaj1I9Si1U36twtYkZ6ig-VgZU2Q-8VPNC3DX5L-ImVzsmKpOGcQ4D9V-ZdcmPx0dxBZOLAASJWnH7SPRotakfMNHbSh8SNRtHWkNxDKJcjix7MCSJFVnaSBXtHN6ua7vUAP1y0AYDaVMCfPj-nqKhSDwr8EJeyL8Zs"
  },
  {
    id: 3,
    type: "EAU DE PARFUM",
    title: "Jardin Secret",
    price: "$245.00 — 50ml",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaUou5b0vtneHHUHS4Wx2_PiKB1eqL_oZJrG3IOpaIQx5RoFpN0lkKrgfMorlo2Uuo0VyuNi12fA-ES-2hnW3YmaeHokgKMI0JJ3Mg0lDgG0PN_ZLf8vOvfTfcWav4HQUfxca0a6jQxWtsImJfSHTEDnMWZ8PrxnT32w0AZzJlgpSrxcCmSZzkL3HQMfcelHdVu7hM5fuql406_ZQwJcrvrdnah3YrqGIDSyWRi7_tPHw28ILuB40uv9EU-lQU5NFqGR3bazqdfP8"
  }
];

export default function SignatureScents() {
  return (
    <section className="py-5" style={{ backgroundColor: 'var(--surface-color)' }} id="collections">
      <Container className="my-5">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 gap-3">
          <div>
            <span className="label-caps mb-2 d-block" style={{ color: 'var(--primary-color)' }}>
              THE CURATED SELECTION
            </span>
            <h2 className="headline-md mb-0">Signature Scents</h2>
          </div>
          <div>
            <a
              className="label-caps text-decoration-none border-bottom pb-2 hover-text-primary transition-colors"
              style={{ color: 'var(--on-surface)', borderColor: 'rgba(132, 82, 61, 0.2)' }}
              href="#"
            >
              VIEW ALL FRAGRANCES
            </a>
          </div>
        </div>

        <Row className="g-5">
          {products.map((product) => (
            <Col key={product.id} md={4} className="group cursor-pointer">
              <div
                className="position-relative overflow-hidden mb-4"
                style={{
                  aspectRatio: '3/4',
                  backgroundColor: 'var(--surface-container-low)',
                }}
              >
                <img
                  className="w-100 h-100 object-fit-cover transition-transform duration-1000"
                  style={{
                    transition: 'transform 1s ease',
                  }}
                  alt={product.title}
                  src={product.image}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  className="position-absolute inset-0 opacity-0 transition-opacity duration-500"
                  style={{
                    backgroundColor: 'rgba(132, 82, 61, 0.05)',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    pointerEvents: 'none',
                  }}
                />
              </div>
              <div>
                <span
                  className="label-caps d-block mb-1 text-muted"
                  style={{ fontSize: '10px', letterSpacing: '0.2em' }}
                >
                  {product.type}
                </span>
                <h3 className="headline-sm mb-1">{product.title}</h3>
                <p className="body-md text-muted mb-0">{product.price}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
