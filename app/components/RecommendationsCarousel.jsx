import React, { useState } from 'react';
import './component-styles/RecommendationsCarousel.css'; // <-- Link to CSS


export default function RecommendationsCarousel({ recommendations }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = recommendations || [
    {
      id: 1,
      name: 'Chamomile Blend',
      availability: 'in-stock',
      image: 'https://via.placeholder.com/250x300?text=Chamomile',
      price: 12.99,
    },
    {
      id: 2,
      name: 'Sleep Tea',
      availability: 'low-stock',
      image: 'https://via.placeholder.com/250x300?text=Sleep+Tea',
      price: 14.99,
    },
    {
      id: 3,
      name: 'Peppermint Fresh',
      availability: 'in-stock',
      image: 'https://via.placeholder.com/250x300?text=Peppermint',
      price: 10.99,
    },
    {
      id: 4,
      name: 'Ginger Root Tea',
      availability: 'in-stock',
      image: 'https://via.placeholder.com/250x300?text=Ginger',
      price: 13.99,
    },
  ];

  const getAvailabilityBadge = (status) => {
    switch (status) {
      case 'in-stock':
        return { text: '✓ In Stock', className: 'badge in-stock' };
      case 'low-stock':
        return { text: '⚠ Low Stock', className: 'badge low-stock' };
      case 'out-of-stock':
        return { text: '✗ Out', className: 'badge out-stock' };
      default:
        return { text: 'Unknown', className: 'badge unknown' };
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const visibleItems = 4;
  const displayedItems = [];
  for (let i = 0; i < visibleItems; i++) {
    displayedItems.push(items[(currentIndex + i) % items.length]);
  }

  return (
    <>

      <section className="recommendations-section">
        {/* Header with curved bottom */}
        <div className="recommendations-header">
          <h2>You Might Also Like</h2>
        </div>

        <div className="recommendations-container">
          <div className="section-subheader">
            <p>Similar herbs and blends that pair well with your selection.</p>
          </div>

          <div className="carousel-wrapper">
            <button className="carousel-nav prev" onClick={prevSlide}>
              ‹
            </button>

            <div className="carousel-container">
              <div className="carousel-track">
                {displayedItems.map((item) => {
                  const badge = getAvailabilityBadge(item.availability);
                  return (
                    <div key={item.id} className="card">
                      <div className="card-image">
                        <img
                          src={item.image}
                          alt={item.name}
                          onError={(e) => {
                            e.target.src =
                              'https://via.placeholder.com/250x300?text=' +
                              encodeURIComponent(item.name);
                          }}
                        />
                        <div className={badge.className}>{badge.text}</div>
                      </div>
                      <div className="card-content">
                        <h3>{item.name}</h3>
                        <div className="card-footer">
                          <span className="price">${item.price.toFixed(2)}</span>
                          <button className="schedule-btn">Schedule</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <button className="carousel-nav next" onClick={nextSlide}>
              ›
            </button>
          </div>
        </div>
      </section>
    </>
  );
}