'use client';
import React from 'react';
import './component-styles/AvailabilityStockInfo.css';

export default function AvailabilityStockInfo({ product={} }) {
  const { name, stockPercentage = 75, deliveryDays = '3-5', backInStockDate } = product;

  return (
    <section className="asi-section">
      <div className="asi-inner">

        <header className="asi-header">
          <h2>Stock & Delivery Information</h2>
          <p>Real-time availability and estimated delivery windows.</p>
        </header>

        <div className="asi-grid">

          {/* Stock Box */}
          <div className="asi-card">
            <h3>Current Stock Level</h3>

            <div className="asi-stock-row">
              <span className="asi-stock-label">Availability</span>
              <span className="asi-stock-value">{stockPercentage}%</span>
            </div>

            <div className="asi-stock-bar">
              <div
                className="asi-stock-fill"
                style={{ width: `${stockPercentage}%` }}
              ></div>
            </div>

            <div className="asi-stock-note">
              <p className="asi-stock-note-title">✓ Plenty in Stock</p>
              <p className="asi-stock-note-sub">This product has good availability. Order with confidence!</p>
            </div>
          </div>

          {/* Delivery Card */}
          <div className="asi-card">
            <h3>Estimated Delivery</h3>

            <div className="asi-delivery-box">
              <p className="asi-delivery-label">Standard Shipping</p>
              <p className="asi-delivery-days">{deliveryDays}</p>
              <p className="asi-delivery-sub">Business Days</p>
            </div>

            <ul className="asi-delivery-list">
              <li>
                <span className="asi-emoji">📦</span>
                <div>
                  <p className="asi-list-title">Free Shipping</p>
                  <p className="asi-list-sub">On orders over $50</p>
                </div>
              </li>

              <li>
                <span className="asi-emoji">🔒</span>
                <div>
                  <p className="asi-list-title">Secure Packaging</p>
                  <p className="asi-list-sub">Freshness guaranteed</p>
                </div>
              </li>

              <li>
                <span className="asi-emoji">🔔</span>
                <div>
                  <p className="asi-list-title">Shipping Updates</p>
                  <p className="asi-list-sub">Track your order in real-time</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Back In Stock */}
          <div className="asi-wide-card">
            <h3>Back-in-Stock Notifications</h3>

            <div className="asi-wide-flex">
              <div className="asi-wide-text">
                <p>
                  {backInStockDate
                    ? `This product will be back in stock on ${backInStockDate}.`
                    : 'Subscribe to be notified when items you want come back in stock.'}
                </p>
                <p className="asi-wide-sub">
                  We'll send you an email notification as soon as the item is available.
                </p>
              </div>

              <button className="asi-btn">
                {backInStockDate ? 'Set Reminder' : 'Notify Me'}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
