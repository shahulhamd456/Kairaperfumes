import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const notes = [
  {
    name: "Bergamot",
    type: "Top Note",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgCd-oP83e2esdlKZUa7nmMWaUEmF3JtobXKdw-hndMNEwpNAqmg2yEU_RDqhvR9JHpkT_EJrHUxhI9f6s8GcCmq5J5SBTobzTxn5Zi8o6k1lMcoUPFyCiVGxIXomgEUZ4FuN4Cjtwfkddem2gZTgKaND7ReRK5_-WB_Tit56yxcs4-VVxYD1mAwypJCSKknivdZs1lL4tzxfKfHw7PDiBbxF98RqwnMSpMA9o_hTuE01V_FL7xKJ5ovVzmvYQkRxAV0oSaYMoATk"
  },
  {
    name: "Madagascan Vanilla",
    type: "Base Note",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdSWDhTgUWmuCfafA5FDhdbUoXawvvZgkVdY9X3CbT9MUyRncAEXJgW5jXV9Az9hUEwl4mZURsDWhGrwakPlqucJq5HyrsLfFTVvvL4VPq_VdWbPyrsgBq1YptAeXuzBzUVNe-4PeMAM2YDZMOKmvNSDDt8OBy8ZPIl-XsdgnBZAL5ZlT1JK3IA5VdPPtdurncSuJ5pDbWmgcs8KXhv9m125OAbtcJMXLUA7S3ttasKGYsGJ98frtUmXP31M82N4sg7PR7T9qiMPc"
  },
  {
    name: "Damask Rose",
    type: "Heart Note",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuT6RjUF1a6AWtEOKHQC7xk75yqkTn7_Ohzrrk4JYNsWbo0xIgwJ1DwPgvFPYlG5IsaDnVCfQRL4P0SrCTt207XkK9z9CDjtkUw38Et0Ra23_EjZ-YPqm0L68In7iSk7G_2q8Nq9v9XCaSx8YVjNZ3B64XU6ocnvishvjYxcI2tn_gnCSk6XTA37OBFASdWlTG6__iqftKYF5wMIbMSB1ytmXbgCu4A0Nh6RFOBlK5L7m-iRaLORgFdWdEt0VW56NZdTofVhDepQI"
  },
  {
    name: "Rare Oud",
    type: "Base Note",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZIyUvedOSAkrt6n3hyQ1ycK9FhPSOeHoyjR6i0F_i4ipriapX9B2GLNR7MGfllVfLlT0oBedF3XESfkLRx7_L4TErq3-W-YIIMYCus95pOSrcR68-j-NRkM1TiSy1bt1VCtOy7UEf3_olJ2tapj9E3_JZsQDablRta9ZS_7Ok2U9jGoiuImFZwtrhz7zyKe4XXwOqNAHgLpep2bTTCdOKq1FAUX91z4CionibN69zoTIu1AtLvUOwwah6vBuVWp3ikj98k7Mx1dk"
  },
  {
    name: "Black Pepper",
    type: "Top Note",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWUc8Dw68yuL-nnBFW9ur_SUfBR5XZd-3wEYmZzji0e6aRmblR9zQlscMQr6cMxO1MC0r0hGTdZGaS0URfTs_qnYvykjesW06QVAMBt3oKrIJQtzNwsELuzXToIc6vIrExNWMry78EvqMB2LjLbI6thxcpN6yjafpfw6awFl6pfwhfaNx_GHJdKP2e40VUGXsLNWjQAW-cBniBUGcE9TS0kfqY8hqoll4Ei2oLfRyVDMJdfW2JzPzyA208xG0atWD4gi-BNfVBeKg",
    hiddenMobile: true
  }
];

export default function ScentAnatomy() {
  return (
    <section className="py-5" style={{ backgroundColor: 'var(--surface-color)' }}>
      <Container className="my-5 text-center">
        <span className="label-caps d-block mb-3" style={{ color: 'var(--primary-color)' }}>
          THE RAW ELEMENTS
        </span>
        <h2 className="headline-md mb-5">Scent Anatomy</h2>

        <Row className="justify-content-center g-4">
          {notes.map((note, index) => (
            <Col
              key={index}
              xs={6}
              md={3}
              lg={2}
              className={`d-flex flex-column align-items-center group ${
                note.hiddenMobile ? 'd-none d-lg-flex' : ''
              }`}
            >
              <div
                className="hover-lift rounded-circle overflow-hidden mb-4 border bg-white"
                style={{
                  width: '120px',
                  height: '120px',
                  borderColor: 'rgba(214, 194, 187, 0.3)',
                }}
              >
                <img className="w-100 h-100 object-fit-cover" alt={note.name} src={note.image} />
              </div>
              <span className="label-caps text-center" style={{ fontSize: '11px', color: 'var(--on-surface)' }}>
                {note.name}
              </span>
              <span
                className="text-uppercase tracking-widest mt-1 text-muted"
                style={{ fontSize: '9px', fontWeight: '500' }}
              >
                {note.type}
              </span>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
