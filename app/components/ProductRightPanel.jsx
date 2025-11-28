'use client';
import React from 'react';

import AvailabilityStockInfo from './AvailabilityStockInfo';
import PurchaseReservationSection from './PurchaseReservationSection';
import './component-styles/ProductRightPanel.css';

export default function ProductRightPanel({
  selectedProduct,
  scheduledDate,
  selectedTimeSlot,
  addToCart,
  handleReserveNow
}) {
  return (
    <aside className="psp-panel">

      {/* STOCK + DELIVERY INFO */}
      <div className="psp-block">
        <AvailabilityStockInfo product={selectedProduct} />
      </div>

      {/* PURCHASE + RESERVATION SECTION */}
      <div className="psp-block">
        <PurchaseReservationSection
          product={selectedProduct}
          scheduledDate={scheduledDate}
          selectedTimeSlot={selectedTimeSlot}
          onAddToCart={() => addToCart(selectedProduct)}
          onReserve={handleReserveNow}
        />
      </div>

    </aside>
  );
}
