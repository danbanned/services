'use client';
import React from 'react';
import './component-styles/ProductHeroSection.css';

export default function ProductHeroSection({ product }) {
  const { name, description, price, availability, image, discount } = product;

  const getAvailabilityClass = (status) => {
    switch (status) {
      case 'in-stock':
        return 'availability in-stock';
      case 'low-stock':
        return 'availability low-stock';
      case 'out-of-stock':
        return 'availability out-of-stock';
      default:
        return 'availability unknown';
    }
  };

  const getAvailabilityText = (status) => {
    switch (status) {
      case 'in-stock':
        return '✓ In Stock';
      case 'low-stock':
        return '⚠ Low Stock';
      case 'out-of-stock':
        return '✗ Out of Stock';
      default:
        return 'Unknown';
    }
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Image */}
          <div className="hero-image-wrapper">
            <img
              src={image}
              alt={name}
              className="hero-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/500x600?text=' + encodeURIComponent(name);
              }}
            />
            {discount && (
              <div className="discount-badge">
                {discount}% OFF
              </div>
            )}
          </div>

          {/* Hero Content */}
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-kicker">Premium Herb Collection</p>
              <h1 className="hero-title">{name}</h1>
              <p className="hero-description">{description}</p>
            </div>

            {/* Price & Availability */}
            <div className="hero-price-availability">
              <div className="price">${price.toFixed(2)}</div>
              <div className={getAvailabilityClass(availability)}>
                {getAvailabilityText(availability)}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-buttons">
              <button className="btn primary">Schedule Purchase</button>
              <button className="btn secondary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
