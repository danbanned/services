'use client';
import React, { useState } from 'react';
import './component-styles/SupportFAQ.css';

export default function SupportFAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [email, setEmail] = useState('');

  const faqs = [
    {
      id: 1,
      question: 'How do I reschedule my order?',
      answer:
        'You can reschedule your order anytime through your account dashboard. Simply go to "My Orders," select the order you want to reschedule, and choose a new date. There are no penalties or fees for rescheduling.',
    },
    {
      id: 2,
      question: 'What if my item is out of stock?',
      answer:
        'If an item goes out of stock before your scheduled date, we\'ll automatically notify you and offer alternatives. You can also choose to wait for restocking with a back-in-stock alert.',
    },
    {
      id: 3,
      question: 'What payment options do you accept?',
      answer:
        'We accept all major credit cards, debit cards, digital wallets, account credit, and pay-on-delivery options. Choose the method that works best for you at checkout.',
    },
    {
      id: 4,
      question: 'Is there a refund policy?',
      answer:
        'Yes! We offer a 30-day money-back guarantee on all products. If you\'re not satisfied, contact support and we\'ll process your refund within 3-5 business days.',
    },
    {
      id: 5,
      question: 'How are the herbs sourced?',
      answer:
        'All our herbs are ethically sourced from certified local and international farms. We verify organic certifications and ensure pesticide-free handling. See the product page for detailed origin information.',
    },
    {
      id: 6,
      question: 'Do you offer same-day delivery?',
      answer:
        'Same-day delivery is available in select metropolitan areas. Check availability at checkout by entering your zip code. Standard shipping takes 3-5 business days.',
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`✓ Subscribed! Check ${email} for updates.`);
      setEmail('');
    }
  };

  return (
    <section className="support-faq-section">
      <div className="container">
        <div className="section-header">
          <h2>Support & FAQ</h2>
          <p>Have questions? We're here to help. Find answers to common questions or reach out to our support team.</p>
        </div>

       {/* Support Cards Dropdown */}
          <div className="support-cards-dropdown">
            <button
              className={`dropdown-toggle ${openFAQ === 'support-cards' ? 'open' : ''}`}
              onClick={() =>
                setOpenFAQ(openFAQ === 'support-cards' ? null : 'support-cards')
              }
            >
              Support Options
              <span className={`dropdown-icon ${openFAQ === 'support-cards' ? 'rotate' : ''}`}>
                ▼
              </span>
            </button>

            {openFAQ === 'support-cards' && (
              <div className="support-cards">
                <div className="support-card chat">
                  <h3>💬 Need Help?</h3>
                  <p>Our support team is available 24/7 to answer your questions.</p>
                  <button>Start Live Chat</button>
                </div>

                <div className="support-card email">
                  <h3>✉️ Email Support</h3>
                  <p>Send us an email anytime. We respond within 2 hours.</p>
                  <a href="mailto:support@herbwellness.com">support@herbwellness.com</a>
                </div>

                <div className="support-card phone">
                  <h3>☎️ Phone Support</h3>
                  <p>Call us Mon–Fri. Average wait time: 2 minutes.</p>
                  <a href="tel:+1-800-HERBS-01">1-800-HERBS-01</a>
                </div>
              </div>
            )}
          </div>


        {/* FAQ Accordion */}
          <div className="faq-accordion">
            {faqs.map((faq) => (
              <div key={faq.id} className="faq-item">
                <button
                  className={`faq-question ${openFAQ === faq.id ? "open" : ""}`}
                  onClick={() =>
                    setOpenFAQ(openFAQ === faq.id ? null : faq.id)
                  }
                >
                  {faq.question}
                  <span
                    className={`faq-icon ${
                      openFAQ === faq.id ? "rotate" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {openFAQ === faq.id && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        {/* Newsletter Signup */}
        <div className="newsletter-signup">
          <h3>Stay Updated</h3>
          <p>Subscribe for restocking alerts, seasonal blends, and exclusive wellness tips.</p>
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}
