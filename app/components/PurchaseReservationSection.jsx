'use client';
import React, { useState } from 'react';
import './component-styles/PurchaseReservationSection.css';

export default function PurchaseReservationSection({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('prepay');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const subtotal = (product?.price || 0) * quantity;
  const discount = product?.discount || 0;
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount;

  const handleReserve = () => {
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 5000);
  };

  return (
    <section className="prs-section">
      <div className="prs-panel">

        {/* Title */}
        <header className="prs-header">
          <h2 className="prs-title">Reserve & Purchase</h2>
          <p className="prs-subtitle">
            Reserve your item to guarantee stock for your chosen date. Cancel or reschedule anytime.
          </p>
        </header>

        {/* Quantity */}
        <div className="prs-card">
          <h3 className="prs-card-title">Quantity</h3>

          <div className="prs-quantity-box">
            <button className="prs-qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
            <span classname="prs-qty-value">{quantity}</span>
            <button className="prs-qty-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
        </div>

        {/* Reservation Benefits */}
        <div className="prs-card prs-benefits-card">
          <h3 className="prs-card-title">Reservation Benefits</h3>

          <ul className="prs-benefits-list">
            <li>✓ Reserve up to 5 days in advance</li>
            <li>✓ Stock guaranteed for your date</li>
            <li>✓ Cancel or reschedule at no cost</li>
            <li>✓ Automated reminders before delivery</li>
          </ul>
        </div>

        {/* Payment Method */}
        <div className="prs-card">
          <h3 className="prs-card-title">Payment Method</h3>

          <div className="prs-payment-options">
            {[
              { id: 'prepay', label: 'Pay Now (Prepay)', desc: 'Secure payment, immediate confirmation', icon: '💳' },
              { id: 'pay-delivery', label: 'Pay on Delivery', desc: 'Pay when your order arrives', icon: '🚚' },
              { id: 'wallet', label: 'Account Wallet', desc: 'Use store credit or wallet balance', icon: '💰' },
            ].map((method) => (
              <label key={method.id} className={`prs-payment-option ${paymentMethod === method.id ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="payment"
                  value={method.id}
                  checked={paymentMethod === method.id}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <div className="prs-payment-info">
                  <span className="prs-payment-icon">{method.icon}</span>
                  <div>
                    <p className="prs-payment-label">{method.label}</p>
                    <p className="prs-payment-desc">{method.desc}</p>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="prs-summary-card">
          <h3 className="prs-summary-title">Order Summary</h3>

          <div className="prs-summary-row">
            <p className="prs-summary-label">Product</p>
            <p className="prs-summary-value">{product?.name}</p>
          </div>

          <div className="prs-summary-line" />

          <div className="prs-summary-row">
            <span>Quantity: {quantity}</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          {discount > 0 && (
            <div className="prs-summary-row prs-discount">
              <span>Discount ({discount}%)</span>
              <span>- ${discountAmount.toFixed(2)}</span>
            </div>
          )}

          <div className="prs-summary-line" />

          <div className="prs-total-row">
            <span className="prs-total-label">Total</span>
            <span className="prs-total-value">${total.toFixed(2)}</span>
          </div>

          <button className="prs-main-btn" onClick={handleReserve}>
            Reserve Now
          </button>

          {showConfirmation && (
            <div className="prs-confirm-box">
              ✓ Reservation confirmed! Check your email for details.
            </div>
          )}

          <button className="prs-secondary-btn">Add to Cart</button>
        </div>

      </div>
    </section>
  );
}
