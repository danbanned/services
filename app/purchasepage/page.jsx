'use client';
import React, { useState } from 'react';
import ProductRightPanel from '@/app/components/ProductRightPanel';
import './purchasepage.css';
import { useSearchParams } from 'next/navigation';


export default function PurchasePage({ selectedProduct }) {
  // Placeholder state for scheduling/time — these already exist in your main app
  const [scheduledDate, setScheduledDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');

  // Placeholder handlers (replace with your real logic later)
  const handleReserveNow = () => {
    console.log('Reserved!');
  };
  const addToCart = () => {
    console.log('Added to cart!');
  };

  return (
    <div className="pp-wrapper">
      {/* LEFT IMAGE GALLERY */}
      <div className="pp-image-column">
        <div className="pp-thumbnail-list">
          <div className="pp-thumb-item"></div>
          <div className="pp-thumb-item"></div>
          <div className="pp-thumb-item"></div>
          <div className="pp-thumb-item"></div>
        </div>

        <div className="pp-main-image"></div>
      </div>

      {/* RIGHT PRODUCT PANEL */}
      <div className="pp-right-panel">
        <ProductRightPanel
          product={selectedProduct}
          scheduledDate={scheduledDate}
          selectedTimeSlot={selectedTimeSlot}
          onAddToCart={() => addToCart(selectedProduct)}
          onReserve={handleReserveNow}
        />
      </div>
    </div>
  );
}
