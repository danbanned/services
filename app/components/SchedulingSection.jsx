import React, { useState } from 'react';

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
      <style>{`
        .scheduling-section {
          background-color: #ffffff;
          padding: 40px 16px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .scheduling-section .container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .scheduling-section .section-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .scheduling-section .section-header h2 {
          font-size: 28px;
          font-weight: 600;
          color: #000000;
          margin: 0 0 8px 0;
          letter-spacing: -0.5px;
        }

        .scheduling-section .section-header p {
          font-size: 14px;
          color: #666666;
          margin: 0;
        }

        .scheduling-section .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 28px;
        }

        .scheduling-section .card {
          background: #ffffff;
          border: 1px solid #e5e5e5;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .scheduling-section .card h3 {
          font-size: 17px;
          font-weight: 600;
          color: #000000;
          margin: 0 0 16px 0;
        }

        /* Custom Calendar Styles */
        .custom-calendar {
          width: 100%;
        }

        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }

        .calendar-header h4 {
          font-size: 15px;
          font-weight: 600;
          color: #000000;
          margin: 0;
        }

        .calendar-nav {
          display: flex;
          gap: 6px;
        }

        .calendar-nav button {
          background: #f5f5f5;
          border: 1px solid #e5e5e5;
          border-radius: 6px;
          width: 30px;
          height: 30px;
          cursor: pointer;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .calendar-nav button:hover {
          background: #e5e5e5;
        }

        .calendar-weekdays {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
          margin-bottom: 4px;
        }

        .calendar-weekday {
          text-align: center;
          font-size: 11px;
          font-weight: 600;
          color: #999999;
          padding: 6px 0;
        }

        .calendar-days {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
        }

        .calendar-day {
          aspect-ratio: 1;
          border: 1px solid #e5e5e5;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s ease;
          background: #ffffff;
        }

        .calendar-day:hover:not(.disabled):not(.empty) {
          border-color: #8B4513;
          background: #fafafa;
        }

        .calendar-day.selected {
          background: #8B4513;
          color: #ffffff;
          border-color: #8B4513;
          font-weight: 600;
        }

        .calendar-day.disabled {
          color: #cccccc;
          cursor: not-allowed;
          background: #fafafa;
        }

        .calendar-day.empty {
          border: none;
          cursor: default;
        }

        .selected-date {
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid #e5e5e5;
          font-size: 13px;
          color: #666666;
        }

        .selected-date span {
          color: #000000;
          font-weight: 600;
        }

        /* Time Slots */
        .time-slots {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .time-slot {
          padding: 12px;
          border: 2px solid #e5e5e5;
          border-radius: 8px;
          background: #ffffff;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
          gap: 4px;
          text-align: left;
        }

        .time-slot:hover {
          border-color: #8B4513;
        }

        .time-slot.selected {
          border-color: #8B4513;
          background: #fafafa;
        }

        .time-slot span:first-child {
          font-size: 14px;
          font-weight: 600;
          color: #000000;
        }

        .time-slot .stock {
          font-size: 11px;
          font-weight: 500;
        }

        .stock-high {
          color: #16a34a;
        }

        .stock-medium {
          color: #ea580c;
        }

        .stock-low {
          color: #dc2626;
        }

        /* Delivery Options */
        .delivery-options {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .delivery-option {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px;
          border: 2px solid #e5e5e5;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .delivery-option:hover {
          border-color: #8B4513;
        }

        .delivery-option input[type="radio"] {
          margin-top: 2px;
          accent-color: #8B4513;
          cursor: pointer;
        }

        .option-text p {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          color: #000000;
        }

        .option-desc {
          font-size: 12px !important;
          font-weight: 400 !important;
          color: #666666 !important;
          margin-top: 3px !important;
        }

        /* Recurring */
        .recurring {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }

        .recurring input[type="checkbox"] {
          width: 18px;
          height: 18px;
          accent-color: #8B4513;
          cursor: pointer;
        }

        .recurring span {
          font-size: 14px;
          font-weight: 500;
          color: #000000;
        }

        .recurring-note {
          margin-top: 12px;
          padding: 12px;
          background: #f0f9ff;
          border: 1px solid #bae6fd;
          border-radius: 8px;
        }

        .recurring-note p {
          margin: 0;
          font-size: 12px;
          color: #0369a1;
          line-height: 1.5;
        }

        /* Actions */
        .actions {
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .btn {
          padding: 12px 28px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
        }

        .btn.primary {
          background: #8B4513;
          color: #ffffff;
        }

        .btn.primary:hover {
          background: #6d3410;
        }

        .btn.secondary {
          background: #ffffff;
          color: #8B4513;
          border: 2px solid #8B4513;
        }

        .btn.secondary:hover {
          background: #fafafa;
        }

        @media (max-width: 1024px) {
          .scheduling-section .grid {
            grid-template-columns: 1fr;
          }

          .time-slots {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .scheduling-section {
            padding: 40px 16px;
          }

          .scheduling-section .section-header h2 {
            font-size: 28px;
          }

          .scheduling-section .card {
            padding: 20px;
          }

          .actions {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>

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