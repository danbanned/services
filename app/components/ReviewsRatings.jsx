import React, { useState } from 'react';

export default function ReviewsRatings({ productId }) {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Sarah M.',
      rating: 5,
      date: '2025-11-15',
      title: 'Amazing quality and aroma!',
      text: 'The herbs are fresh and beautifully packaged. I love how transparent the sourcing information is.',
      image: 'https://via.placeholder.com/100x100?text=Sarah',
      helpful: 24,
    },
    {
      id: 2,
      name: 'James D.',
      rating: 5,
      date: '2025-11-10',
      title: 'Perfect for my evening routine',
      text: 'Scheduling delivery was super easy, and the product arrived exactly on time.',
      image: 'https://via.placeholder.com/100x100?text=James',
      helpful: 18,
    },
    {
      id: 3,
      name: 'Emma L.',
      rating: 4,
      date: '2025-11-05',
      title: 'Great product, fast delivery',
      text: 'Love the selection and fresh ingredients. Would appreciate more brewing guides.',
      image: 'https://via.placeholder.com/100x100?text=Emma',
      helpful: 12,
    },
  ]);

  const [newReview, setNewReview] = useState({
    rating: 5,
    title: '',
    text: '',
    name: '',
  });

  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
  const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.forEach((r) => ratingCounts[r.rating]++);

  const handleSubmitReview = () => {
    if (newReview.name && newReview.title && newReview.text) {
      const review = {
        id: reviews.length + 1,
        ...newReview,
        date: new Date().toISOString().split('T')[0],
        image: 'https://via.placeholder.com/100x100?text=' + encodeURIComponent(newReview.name),
        helpful: 0,
      };
      setReviews([review, ...reviews]);
      setNewReview({ rating: 5, title: '', text: '', name: '' });
    }
  };

  const StarRating = ({ rating, size = 'medium' }) => (
    <div className={`star-rating ${size}`}>
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? 'filled' : 'empty'}>
          ★
        </span>
      ))}
    </div>
  );

  return (
    <>
      <style>{`
        .reviews-section {
          background: #F5EDE4;
          padding: 0;
          font-family: 'Georgia', 'Times New Roman', serif;
        }

        .reviews-hero {
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                      url('https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=1600') center/cover;
          padding: 100px 20px 140px;
          position: relative;
          overflow: hidden;
        }

        .reviews-hero::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 80px;
          background: #F5EDE4;
          border-radius: 50% 50% 0 0 / 100% 100% 0 0;
        }

        .reviews-hero h2 {
          font-size: 48px;
          font-weight: 400;
          text-align: center;
          color: #FFFFFF;
          margin: 0;
          position: relative;
          z-index: 2;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .header-section {
          text-align: center;
          margin-bottom: 40px;
        }

        .header-section p {
          font-size: 16px;
          color: #6B4423;
          margin: 8px 0 0 0;
          font-weight: 300;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 48px;
        }

        .card {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 4px 12px rgba(139, 90, 60, 0.15);
        }

        .summary-card {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .summary-center {
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #E5D4C1;
        }

        .avg-rating {
          font-size: 56px;
          font-weight: 600;
          color: #8B5A3C;
          margin: 0 0 8px 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .review-count {
          font-size: 14px;
          color: #6B4423;
          margin: 8px 0 0 0;
        }

        .star-rating {
          display: flex;
          gap: 4px;
          justify-content: center;
        }

        .star-rating.small span {
          font-size: 18px;
        }

        .star-rating.medium span {
          font-size: 24px;
        }

        .star-rating .filled {
          color: #D4AF37;
        }

        .star-rating .empty {
          color: #E5D4C1;
        }

        .rating-distribution {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .rating-bar {
          display: grid;
          grid-template-columns: 40px 1fr 40px;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .star-label {
          color: #6B4423;
          font-weight: 500;
        }

        .bar-bg {
          height: 8px;
          background: #E5D4C1;
          border-radius: 4px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          background: #D4AF37;
          transition: width 0.3s ease;
        }

        .count {
          color: #6B4423;
          text-align: right;
        }

        .review-form-card h3 {
          font-size: 24px;
          font-weight: 500;
          color: #8B5A3C;
          margin: 0 0 24px 0;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #6B4423;
          margin-bottom: 8px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px;
          border: 2px solid #E5D4C1;
          border-radius: 8px;
          font-size: 14px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          transition: border-color 0.3s ease;
          box-sizing: border-box;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #8B5A3C;
        }

        .rating-select {
          display: flex;
          gap: 8px;
        }

        .rating-select button {
          background: none;
          border: none;
          font-size: 32px;
          cursor: pointer;
          transition: transform 0.2s ease;
          padding: 0;
        }

        .rating-select button.filled {
          color: #D4AF37;
        }

        .rating-select button.empty {
          color: #E5D4C1;
        }

        .rating-select button:hover {
          transform: scale(1.1);
        }

        .submit-btn {
          background: #8B5A3C;
          color: #FFFFFF;
          border: none;
          padding: 14px 32px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          width: 100%;
        }

        .submit-btn:hover {
          background: #6B4423;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(139, 90, 60, 0.3);
        }

        .reviews-list {
          margin-top: 48px;
        }

        .reviews-list > h3 {
          font-size: 28px;
          font-weight: 500;
          color: #8B5A3C;
          margin: 0 0 24px 0;
        }

        .review-card {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 28px;
          margin-bottom: 20px;
          box-shadow: 0 4px 12px rgba(139, 90, 60, 0.15);
          transition: all 0.3s ease;
        }

        .review-card:hover {
          box-shadow: 0 6px 20px rgba(139, 90, 60, 0.25);
          transform: translateY(-2px);
        }

        .review-header {
          display: flex;
          gap: 16px;
          margin-bottom: 16px;
        }

        .review-header img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #E5D4C1;
        }

        .review-info {
          flex: 1;
        }

        .reviewer-name {
          font-size: 18px;
          font-weight: 600;
          color: #8B5A3C;
          margin: 0 0 6px 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .review-date {
          font-size: 13px;
          color: #999999;
          margin: 6px 0 0 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .review-title {
          font-size: 20px;
          font-weight: 600;
          color: #6B4423;
          margin: 0 0 12px 0;
        }

        .review-text {
          font-size: 15px;
          color: #333333;
          line-height: 1.6;
          margin: 0 0 16px 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .helpful-btn {
          background: #F5EDE4;
          color: #8B5A3C;
          border: 2px solid #E5D4C1;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .helpful-btn:hover {
          background: #E5D4C1;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .reviews-hero {
            padding: 80px 20px 120px;
          }

          .reviews-hero h2 {
            font-size: 36px;
          }

          .container {
            padding: 40px 16px;
          }

          .reviews-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .card {
            padding: 24px;
          }

          .avg-rating {
            font-size: 48px;
          }

          .review-header {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .review-header img {
            width: 80px;
            height: 80px;
          }
        }
      `}</style>

      <section className="reviews-section">
        {/* Hero Section with curved bottom */}
        <div className="reviews-hero">
          <h2>Reviews & Ratings</h2>
        </div>

        <div className="container">
          <div className="header-section">
            <p>See what customers think about this herb blend.</p>
          </div>

          <div className="reviews-grid">
            {/* Rating Summary */}
            <div className="card summary-card">
              <div className="summary-center">
                <p className="avg-rating">{avgRating}</p>
                <StarRating rating={Math.round(avgRating)} size="small" />
                <p className="review-count">{reviews.length} verified reviews</p>
              </div>

              {/* Rating Distribution */}
              <div className="rating-distribution">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="rating-bar">
                    <span className="star-label">{star}★</span>
                    <div className="bar-bg">
                      <div
                        className="bar-fill"
                        style={{ width: `${(ratingCounts[star] / reviews.length) * 100}%` }}
                      ></div>
                    </div>
                    <span className="count">{ratingCounts[star]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Write a Review */}
            <div className="card review-form-card">
              <h3>Share Your Experience</h3>
              <div>
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label>Rating</label>
                  <div className="rating-select">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className={star <= newReview.rating ? 'filled' : 'empty'}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>Review Title</label>
                  <input
                    type="text"
                    value={newReview.title}
                    onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                    placeholder="Summarize your experience"
                  />
                </div>

                <div className="form-group">
                  <label>Your Review</label>
                  <textarea
                    value={newReview.text}
                    onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                    placeholder="Tell us about your experience..."
                    rows="4"
                  />
                </div>

                <button onClick={handleSubmitReview} className="submit-btn">
                  Submit Review
                </button>
              </div>
            </div>
          </div>

          {/* Reviews List */}
          <div className="reviews-list">
            <h3>Customer Reviews</h3>
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <img
                    src={review.image}
                    alt={review.name}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/100x100?text=' + encodeURIComponent(review.name);
                    }}
                  />
                  <div className="review-info">
                    <p className="reviewer-name">{review.name}</p>
                    <StarRating rating={review.rating} size="small" />
                    <p className="review-date">{review.date}</p>
                  </div>
                </div>
                <h4 className="review-title">{review.title}</h4>
                <p className="review-text">{review.text}</p>
                <button className="helpful-btn">👍 Helpful ({review.helpful})</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}