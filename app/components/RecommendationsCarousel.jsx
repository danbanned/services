'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './component-styles/RecommendationsCarousel.css'; // <-- Link to CSS

export default function RecommendationsCarousel({ recommendations }) {
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

  return (
    <section className="recommendations-section">
      <div className="container">
        <div className="section-header">
          <h2>You Might Also Like</h2>
          <p>Similar herbs and blends that pair well with your selection.</p>
        </div>

        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          className="recommendations-swiper"
        >
          {items.map((item) => {
            const badge = getAvailabilityBadge(item.availability);
            return (
              <SwiperSlide key={item.id}>
                <div className="card">
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
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
