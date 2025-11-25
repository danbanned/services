// src/components/ServicePage.jsx
'use client';
import React from 'react';
import "./globals.css";

export default function ServicePage() {

  // assign images stored in /public
  const heroImg = "/image1.jpg";

  const leftAngle = "/image2.jpg";
  const rightAngle = "/image3.jpg";

  const card1 = "/image4.jpg";
  const card2 = "/image5.jpg";
  const card3 = "/image6.jpg";

  const scheduleImg = "/image7.jpg";
  const reserveImg = "/image8.jpg";
  const image1 = "/image9.jpg";
  const image2 = "/image10.jpg";

  return (
    <div className="service-page">

      {/* HERO */}
      <header
        className="hero"
        style={{ backgroundImage: `url('${heroImg}')` }}
        aria-label="Hero banner"
      >
        <img className="hero-angle left" src={leftAngle} alt="Decorative left product" />
        <img className="hero-angle right" src={rightAngle} alt="Decorative right product" />

        <div className="hero-overlay">
          <div className="hero-inner">
            <p className="kicker">Subscribe, save, and simplify your routine</p>
            <h1 className="hero-title">Services & schedule</h1>
            <p className="hero-sub">
              Subscribe now to get up to <strong>20% off</strong> and free limited-edition gifts.
            </p>
            <div className="hero-ctas">
              <button className="btn primary">Get started</button>
              <button className="btn ghost">Learn more</button>
            </div>
          </div>
        </div>
      </header>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <h2>How it works</h2>
        <div className="cards">

          <article className="card">
            <div className="card-media" style={{ backgroundImage: `url('${card1}')` }} />
            <h3>Choose your product</h3>
            <p>Pick what you love and choose a plan that fits your routine.</p>
          </article>

          <article className="card">
            <div className="card-media" style={{ backgroundImage: `url('${card2}')` }} />
            <h3>Schedule delivery</h3>
            <p>Select delivery cadence and preferred shipping windows.</p>
          </article>

          <article className="card">
            <div className="card-media" style={{ backgroundImage: `url('${card3}')` }} />
            <h3>Enjoy & adjust</h3>
            <p>Skip, pause or change anytime with easy account controls.</p>
          </article>

        </div>
      </section>

      {/* SCHEDULING */}
      <section className="section-light scheduling-section">
        <div className="container">
          <div className="left">
            <h2> Schedule your purchase </h2>
            <p>Select a date and delivery option, or reserve in-store pickup.</p>
            <div className="mini-card">
              <p><strong>Available:</strong> In stock — limited quantities</p>
            </div>
            <div className="actions-row">
              <button className="btn primary">Choose a date</button>
              <button className="btn ghost">View availability</button>
            </div>
          </div>

          <div className="right">
            <div className="visual" style={{ backgroundImage: `url('${scheduleImg}')` }} />
          </div>
        </div>
      </section>

      {/* RESERVATION */}
      <section className="section-plain purchase-section">
        <div className="container">
          <div className="col">
            <h2>Reserve & buy</h2>
            <p>Reserve the item to guarantee stock for your chosen date.</p>
            <ul>
              <li>Reserve up to 5 days in advance</li>
              <li>Cancel or reschedule at no cost</li>
            </ul>
            <div className="actions-row">
              <button className="btn primary">Reserve now</button>
              <button className="btn ghost">Add to cart</button>
            </div>
          </div>

          <div className="col">
            <div className="visual-small" style={{ backgroundImage: `url('${reserveImg}')` }} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light support-section">
        <div className="container narrow"  style={{ backgroundImage: `url('${image1}')` }}>
          <h2>Support & FAQ</h2>
          <p>Questions about scheduling, shipping, or stock? We're here to help.</p>

          <div className="faq-grid">
            <div className="faq">How do I reschedule?</div>
            <div className="faq">What if my item is out of stock?</div>
            <div className="faq">Payment options?</div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container narrow">
          <p>© {new Date().getFullYear()} Rise & Ritual · Terms · Privacy</p>
        </div>
      </footer>

    </div>
  );
}
