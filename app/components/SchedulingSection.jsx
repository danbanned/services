import React, { useState } from 'react';
import './component-styles/SchedulingSection.css'

export default function SchedulingSection({ product }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [deliveryOption, setDeliveryOption] = useState('shipping');
  const [recurring, setRecurring] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const availableSlots = ['9:00 AM', '12:00 PM', '3:00 PM', '6:00 PM'];
  const stockLevels = {
    '9:00 AM': 12,
    '12:00 PM': 8,
    '3:00 PM': 15,
    '6:00 PM': 5,
  };

  const getStockClass = (stock) => {
    if (stock > 10) return 'stock-high';
    if (stock > 5) return 'stock-medium';
    return 'stock-low';
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);

  const handleDateClick = (day) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    if (newDate >= new Date().setHours(0, 0, 0, 0)) {
      setSelectedDate(newDate);
      setSelectedTimeSlot(null);
    }
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const isDateSelected = (day) => {
    return selectedDate.getDate() === day &&
           selectedDate.getMonth() === currentMonth.getMonth() &&
           selectedDate.getFullYear() === currentMonth.getFullYear();
  };

  const isDateDisabled = (day) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return date < new Date().setHours(0, 0, 0, 0);
  };

  return (
    <>

      <section className="scheduling-section">
        <div className="container">
          <div className="section-header">
            <h2>Schedule Your Purchase</h2>
            <p>Select a date and delivery option. We'll reserve your order and send reminders.</p>
          </div>

          <div className="grid">
            {/* Calendar Picker */}
            <div className="card">
              <h3>Pick a Date</h3>
              <div className="custom-calendar">
                <div className="calendar-header">
                  <h4>{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</h4>
                  <div className="calendar-nav">
                    <button onClick={prevMonth}>‹</button>
                    <button onClick={nextMonth}>›</button>
                  </div>
                </div>
                
                <div className="calendar-weekdays">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="calendar-weekday">{day}</div>
                  ))}
                </div>
                
                <div className="calendar-days">
                  {[...Array(startingDayOfWeek)].map((_, i) => (
                    <div key={`empty-${i}`} className="calendar-day empty"></div>
                  ))}
                  {[...Array(daysInMonth)].map((_, i) => {
                    const day = i + 1;
                    return (
                      <div
                        key={day}
                        className={`calendar-day ${isDateSelected(day) ? 'selected' : ''} ${isDateDisabled(day) ? 'disabled' : ''}`}
                        onClick={() => handleDateClick(day)}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>
              <p className="selected-date">
                Selected: <span>{selectedDate.toDateString()}</span>
              </p>
            </div>

            {/* Right Column */}
            <div>
              {/* Time Slots */}
              <div className="card" style={{ marginBottom: '16px' }}>
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
              <div className="card" style={{ marginBottom: '16px' }}>
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
      </section>
    </>
  );
}