'use client';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './component-styles/SchedulingSection.css';

export default function SchedulingSection({ product }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [deliveryOption, setDeliveryOption] = useState('shipping');
  const [recurring, setRecurring] = useState(false);

  const availableSlots = ['9:00 AM', '12:00 PM', '3:00 PM', '6:00 PM'];
  const stockLevels = {
    '9:00 AM': 12,
    '12:00 PM': 8,
    '3:00 PM': 15,
    '6:00 PM': 5,
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
  };

  const getStockClass = (stock) => {
    if (stock > 10) return 'stock-high';
    if (stock > 5) return 'stock-medium';
    return 'stock-low';
  };

  return (
    <section className="scheduling-section">
      <div className="container">
        <div className="max-width">

          <div className="section-header">
            <h2>Schedule Your Purchase</h2>
            <p>Select a date and delivery option. We'll reserve your order and send reminders.</p>
          </div>

          <div className="grid">
            {/* Calendar Picker */}
            <div className="card">
              <h3>Pick a Date</h3>
              <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                minDate={new Date()}
                className="react-calendar-custom"
              />
              <p className="selected-date">
                Selected: <span>{selectedDate.toDateString()}</span>
              </p>
            </div>

            {/* Time Slots & Delivery */}
            <div className="time-delivery-stack">
              {/* Time Slots */}
              <div className="card">
                <h3>Choose Time Slot</h3>
                <div className="time-slots">
                  {availableSlots.map((slot) => {
                    const stock = stockLevels[slot];
                    return (
                      <button
                        key={slot}
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`time-slot ${selectedTimeSlot === slot ? 'selected' : ''}`}
                      >
                        <span>{slot}</span>
                        <span className={`stock ${getStockClass(stock)}`}>{stock} in stock</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Delivery Options */}
              <div className="card">
                <h3>Delivery Method</h3>
                <div className="delivery-options">
                  {[
                    { id: 'shipping', label: 'Shipping', desc: 'Delivered in 3-5 business days' },
                    { id: 'pickup', label: 'Store Pickup', desc: 'Pick up at your local store' },
                    { id: 'delivery', label: 'Same-Day Delivery', desc: 'Available in select areas' },
                  ].map((option) => (
                    <label key={option.id} className="delivery-option">
                      <input
                        type="radio"
                        name="delivery"
                        value={option.id}
                        checked={deliveryOption === option.id}
                        onChange={(e) => setDeliveryOption(e.target.value)}
                      />
                      <div className="option-text">
                        <p>{option.label}</p>
                        <p className="option-desc">{option.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Recurring Purchase */}
              <div className="card">
                <label className="recurring">
                  <input
                    type="checkbox"
                    checked={recurring}
                    onChange={(e) => setRecurring(e.target.checked)}
                  />
                  <span>Make this a recurring subscription</span>
                </label>
                {recurring && (
                  <div className="recurring-note">
                    <p>📦 Save 10% on all recurring orders. Pause or cancel anytime with no penalties.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="actions">
            <button className="btn primary">Choose This Date</button>
            <button className="btn secondary">View Full Calendar</button>
          </div>

        </div>
      </div>
    </section>
  );
}
