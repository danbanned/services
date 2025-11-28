'use client';
import React, { useState } from 'react';
import './component-styles/ReviewsRatings.css';

export default function ReviewsRatings({ productId }) {
const [reviews, setReviews] = useState([
{
id: 1,
name: 'Sarah M.',
rating: 5,
date: '2025-11-15',
title: 'Amazing quality and aroma!',
text: 'The herbs are fresh and beautifully packaged. I love how transparent the sourcing information is.',
image: '[https://via.placeholder.com/100x100?text=Sarah](https://via.placeholder.com/100x100?text=Sarah)',
helpful: 24,
},
{
id: 2,
name: 'James D.',
rating: 5,
date: '2025-11-10',
title: 'Perfect for my evening routine',
text: 'Scheduling delivery was super easy, and the product arrived exactly on time.',
image: '[https://via.placeholder.com/100x100?text=James](https://via.placeholder.com/100x100?text=James)',
helpful: 18,
},
{
id: 3,
name: 'Emma L.',
rating: 4,
date: '2025-11-05',
title: 'Great product, fast delivery',
text: 'Love the selection and fresh ingredients. Would appreciate more brewing guides.',
image: '[https://via.placeholder.com/100x100?text=Emma](https://via.placeholder.com/100x100?text=Emma)',
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

const handleSubmitReview = (e) => {
e.preventDefault();
if (newReview.name && newReview.title && newReview.text) {
const review = {
id: reviews.length + 1,
...newReview,
date: new Date().toISOString().split('T')[0],
image: '[https://via.placeholder.com/100x100?text=](https://via.placeholder.com/100x100?text=)' + encodeURIComponent(newReview.name),
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
★ </span>
))} </div>
);

return ( <section className="reviews-section"> <div className="container"> <div className="header-section"> <h2>Reviews & Ratings</h2> <p>See what customers think about this herb blend.</p> </div>

```
    <div className="grid reviews-grid">
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
        <form onSubmit={handleSubmitReview}>
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Rating</label>
            <div className="rating-select">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
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
              required
            />
          </div>

          <div className="form-group">
            <label>Your Review</label>
            <textarea
              value={newReview.text}
              onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
              placeholder="Tell us about your experience..."
              rows="4"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit Review
          </button>
        </form>
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

);
}
