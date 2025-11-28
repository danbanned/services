'use client';
import React, { useState, useMemo } from 'react';
import "./globals.css";
import Link from 'next/link';

import ProductHeroSection from './components/ProductHeroSection';
import IngredientOrigins from './components/IngredientOrigins';
import SchedulingSection from './components/SchedulingSection';
import RecommendationsCarousel from './components/RecommendationsCarousel';
import ReviewsRatings from './components/ReviewsRatings';
import SupportFAQ from './components/SupportFAQ';

export default function ServicePage() {
// ---------------------------
// Images
// ---------------------------
const heroImg = "/image1.jpg";
const leftAngle = "/image2.jpg";
const rightAngle = "/image3.jpg";
const card1 = "/image4.jpg";
const card2 = "/image5.jpg";
const card3 = "/image6.jpg";
const scheduleImg = "/image7.jpg";
const reserveImg = "/image8.jpg";
const image1 = "/image9.jpg";
const image2 = "/image10.jpg";

// ---------------------------
// Mock data
// ---------------------------
const mockProduct = useMemo(() => ({
id: 1,
sku: 'HERB-001-CHAM',
name: 'Premium Chamomile Blend',
description: 'Soothe stress and anxiety with our curated organic chamomile blend.',
longDescription: 'Hand-harvested chamomile, naturally dried, blended with lavender and passionflower.',
price: 18.99,
originalPrice: 22.99,
discount: 15,
currency: 'USD',
availability: 'in-stock',
image: '/image1.jpg',
gallery: ['/image9.jpg', '/image10.jpg'],
category: 'Sleep & Relaxation',
tags: ['Organic', 'Calming', 'Sleep Support'],
stockPercentage: 75,
stockCount: 156,
deliveryDays: '3-5',
backInStockDate: null,
rating: 4.8,
reviewCount: 127,
bestSeller: true,
}), []);

const mockHerb = useMemo(() => ({
id: 1,
name: 'Premium Chamomile Blend',
scientificName: 'Matricaria chamomilla L.',
description: 'A soothing blend of organic chamomile with calming herbs.',
ingredients: [
'Organic chamomile flowers (70%)',
'Lavender buds (15%)',
'Organic passionflower (10%)',
'Natural vanilla essence (5%)',
],
origin: 'Willamette Valley, Oregon — family-owned farms',
farmPartners: ['Peaceful Acres Farm', 'Lavender Hills Cooperative', 'Herbal Heritage Farm'],
plantPart: 'Flowers and buds',
uses: ['Tea', 'Aromatherapy', 'Bath blends', 'Culinary uses'],
shelfLife: '12 months',
}), []);

const mockRecommendations = useMemo(() => ([
{ id: 2, name: 'Sleep Tea Blend', image: '/image4.jpg', price: 16.99, discount: 10 },
{ id: 3, name: 'Stress Relief Mix', image: '/image5.jpg', price: 19.99 },
{ id: 4, name: 'Lavender Dreams', image: '/image6.jpg', price: 17.99, discount: 12 },
]), []);

const processSteps = useMemo(() => ([
{ id: 1, title: 'Sourcing', description: 'Partnering with certified farms', icon: '🌱' },
{ id: 2, title: 'Inspection', description: 'Batch inspection at harvest', icon: '✓' },
{ id: 3, title: 'Drying', description: 'Air-dried to preserve oils', icon: '☀' },
{ id: 4, title: 'Blending', description: 'Small-batch handcrafted blends', icon: '🎨' },
{ id: 5, title: 'Testing', description: 'Third-party purity testing', icon: '🔬' },
{ id: 6, title: 'Packaging', description: 'Eco-friendly freshness-lock packaging', icon: '📦' },
]), []);

// ---------------------------
// State
// ---------------------------
const [selectedProduct] = useState(mockProduct);
const [cartItems, setCartItems] = useState([]);
const [scheduledDate, setScheduledDate] = useState(null);
const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
const [isCartOpen, setCartOpen] = useState(false);

// ---------------------------
// Handlers
// ---------------------------
const addToCart = (product) => {
setCartItems(prev => {
const existing = prev.find(i => i.id === product.id);
if (existing) return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
return [...prev, { ...product, quantity: 1 }];
});
setCartOpen(true);
};

const removeFromCart = (productId) => setCartItems(prev => prev.filter(i => i.id !== productId));

const changeQuantity = (productId, delta) => {
setCartItems(prev => prev.map(i => {
if (i.id !== productId) return i;
const q = Math.max(1, (i.quantity || 1) + delta);
return { ...i, quantity: q };
}));
};

const handleScheduleDate = (dateIsoString) => setScheduledDate(dateIsoString);
const handleSelectTimeSlot = (slotString) => setSelectedTimeSlot(slotString);

const handleReserveNow = () => {
if (!scheduledDate || !selectedTimeSlot) {
alert('Please choose a date and time slot before reserving.');
return;
}
alert(`Reserved ${selectedProduct.name} for ${scheduledDate} at ${selectedTimeSlot}`);
};

const subtotal = cartItems.reduce((s, it) => s + (it.price || it.originalPrice || 0) * (it.quantity || 1), 0);

// ---------------------------
// CSS isolation
// ---------------------------
const isolationStyle = { all: 'initial', display: 'block' };
const isolationInnerStyle = {
fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
color: '#0f2340',
boxSizing: 'border-box',
width: '100%',
};

// ---------------------------
// Render
// ---------------------------
return ( <div className="service-page">

```
  {/* HERO */}
  <header className="hero" style={{ backgroundImage: `url('${heroImg}')` }} aria-label="Hero banner">
    <img className="hero-angle left" src={leftAngle} alt="Decorative left product" />
    <img className="hero-angle right" src={rightAngle} alt="Decorative right product" />
    <div className="hero-overlay">
      <div className="hero-inner">
        <p className="kicker">Subscribe, save, and simplify your routine</p>
        <h1 className="hero-title">Services & schedule</h1>
        <p className="hero-sub">
          Subscribe now to get up to <strong>20% off</strong> and free limited-edition gifts.
        </p>
        <div className="hero-ctas">
          <Link href="/purchasepage" className="btn primary" title="Browse all products">Get started</Link>
          <button className="btn ghost" onClick={() => {
            const el = document.querySelector('.how-it-works');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }} title="Scroll to How it works">Learn more</button>
        </div>
      </div>
    </div>
  </header>

  {/* HOW IT WORKS */}
  <section className="how-it-works">
    <h2>How it works</h2>
    <div className="cards">{/* Add cards or steps here if needed */}</div>
  </section>

  {/* SCHEDULING */}
  <section className="section-light scheduling-section">
    <div className="container">
      <div className="left">
        <h2>Schedule your purchase</h2>
        <p>Select a date and delivery option, or reserve in-store pickup.</p>
        <div className="mini-card"><p><strong>Available:</strong> In stock — limited quantities</p></div>
        <div className="actions-row">
          <button className="btn primary" onClick={() => {
            const today = new Date().toISOString().split('T')[0];
            handleScheduleDate(today);
            alert(`Selected date: ${today}`);
          }}>Choose today</button>
          <button className="btn ghost" onClick={() => {
            const el = document.querySelector('.scheduling-section');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>View availability</button>
        </div>
      </div>
      <div className="right">
        <div className="visual" style={{ backgroundImage: `url('${scheduleImg}')` }} />
      </div>
    </div>
  </section>

  {/* Isolated Components */}
  <div style={isolationStyle}>
    <div style={isolationInnerStyle}>
      <ProductHeroSection product={selectedProduct} onAddToCart={() => addToCart(selectedProduct)} />
        {/* Ingredient Origins Section - NEW STYLE */}
      <IngredientOrigins herb={mockHerb} />
      <SchedulingSection
        product={selectedProduct}
        onDateSelect={handleScheduleDate}
        onTimeSlotSelect={handleSelectTimeSlot}
      />
      <RecommendationsCarousel recommendations={mockRecommendations} onAdd={(i) => addToCart({ ...i })} />
      <ReviewsRatings productId={selectedProduct.id} />
      <SupportFAQ />
    </div>
  </div>

  {/* RESERVATION */}
  <section className="section-plain purchase-section">
    <div className="container">
      <div className="col">
        <h2>Reserve & buy</h2>
        <p>Reserve the item to guarantee stock for your chosen date.</p>
        <ul>
          <li>Reserve up to 5 days in advance</li>
          <li>Cancel or reschedule at no cost</li>
        </ul>
        <div className="actions-row">
          <button className="btn primary" onClick={handleReserveNow}>Reserve now</button>
          <button className="btn ghost" onClick={() => addToCart(selectedProduct)}>Add to cart</button>
        </div>
      </div>
      <div className="col">
        <div className="visual-small" style={{ backgroundImage: `url('${reserveImg}')` }} />
      </div>
    </div>
  </section>

  {/* FOOTER */}
  <footer className="site-footer">
    <div className="container narrow">
      <p>© {new Date().getFullYear()} Rise & Ritual · Terms · Privacy</p>
    </div>
  </footer>

  {/* CART DRAWER */}
  <div
    style={{
      position: 'fixed', right: 20, bottom: 20,
      width: isCartOpen ? 360 : 60, height: isCartOpen ? 420 : 60,
      background: '#fff', boxShadow: '0 10px 30px rgba(15,35,64,0.12)',
      borderRadius: 12, overflow: 'hidden', transition: 'all 240ms ease', zIndex: 9999,
      border: '1px solid rgba(13,51,90,0.06)',
    }}
    aria-live="polite"
  >
    {/* Collapsed/Expanded toggle */}
    <div
      style={{
        display: 'flex', alignItems: 'center', justifyContent: isCartOpen ? 'space-between' : 'center',
        padding: '12px 14px', background: '#f7fafc', cursor: 'pointer',
      }}
      onClick={() => setCartOpen(prev => !prev)}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="#0f2340" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <strong style={{ color: '#0f2340' }}>{isCartOpen ? 'Your cart' : `${cartItems.length}`}</strong>
      </div>
      {isCartOpen && (
        <div style={{ color: '#6b6b6b', fontSize: 14 }}>
          <div style={{ marginBottom: 4 }}>Subtotal</div>
          <div style={{ fontWeight: 700 }}>${subtotal.toFixed(2)}</div>
        </div>
      )}
    </div>

    {isCartOpen ? (
      <div style={{ padding: 12, height: 340, overflowY: 'auto', background: 'white' }}>
        {cartItems.length === 0 ? (
          <div style={{ padding: 20, color: '#666' }}>Your cart is empty. Add items to get started.</div>
        ) : (
          cartItems.map(item => (
            <div key={item.id} style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'center' }}>
              <div style={{
                width: 64, height: 64, borderRadius: 8,
                backgroundImage: `url('${item.image || item.gallery?.[0] || '/image4.jpg'}')`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                boxShadow: '0 6px 14px rgba(0,0,0,0.06)'
              }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700 }}>{item.name}</div>
                <div style={{ color: '#888', fontSize: 13 }}>${(item.price || item.originalPrice || 0).toFixed(2)}</div>
                <div style={{ marginTop: 8, display: 'flex', gap: 8, alignItems: 'center' }}>
                  <button className="btn ghost" onClick={() => changeQuantity(item.id, -1)}>-</button>
                  <div style={{ minWidth: 28, textAlign: 'center' }}>{item.quantity || 1}</div>
                  <button className="btn ghost" onClick={() => changeQuantity(item.id, 1)}>+</button>
                  <button className="btn" style={{ marginLeft: 8 }} onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))
        )}

        {cartItems.length > 0 && (
          <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontWeight: 700 }}>Total ${subtotal.toFixed(2)}</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn ghost" onClick={() => { setCartItems([]); setCartOpen(false); }}>Clear</button>
              <button className="btn primary" onClick={() => alert('Proceed to checkout (implement link)')}>Checkout</button>
            </div>
          </div>
        )}
      </div>
    ) : null}
  </div>

</div>
);
}
