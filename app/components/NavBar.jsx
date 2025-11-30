'use client';
import Link from 'next/link';
import './component-styles/NavBar.css';

export default function NavBar() {
  return (
    <nav className="rr-nav">
      <div className="rr-nav-inner">

        {/* LOGO BLOCK */}
        <Link href="/" className="rr-logo">

          {/* IMAGE LOGO ADDED HERE */}
          <img 
            src="//images.squarespace-cdn.com/content/v1/655538741a3b8761a809601d/85459f10-bfd6-4e9e-81b4-ce60bc293434/R%26R_Beige.png?format=1500w"
            alt="Rise & Ritual Logo" className="rr-logo-img"
          />


          <div className="rr-logo-text">
            <span className="rr-logo-main">RISE & RITUAL</span>
            <span className="rr-logo-sub">SERVICES AND SCHEDULING</span>
          </div>
        </Link>

        {/* LINKS */}
        <div className="rr-links">
          <Link href="/products" className="rr-link">About</Link>
          <Link href="/products" className="rr-link">Shop</Link>
          <Link href="/events" className="rr-link">Events</Link>
          <Link href="/contact" className="rr-link">Contact</Link>
          <Link href="/purchase" className="rr-link">Purchase</Link>

          <Link href="/cart" className="rr-icon-link">
            🛒
          </Link>


           {/* Instagram */}
          <Link href="https://www.instagram.com/riseandritual/" target="_blank" className="rr-icon-link">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5"
                stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4.5"
                stroke="currentColor" strokeWidth="2"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
            </svg>
          </Link>

           {/* Email */}
          <Link href="mailto:youremail@example.com" className="rr-icon-link">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="4" width="20" height="16" rx="3"
                stroke="currentColor" strokeWidth="2"/>
              <path d="M3 6l9 7 9-7"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </Link>
        </div>
      </div>

      <div className="rr-divider"></div>
    </nav>
  );
}
