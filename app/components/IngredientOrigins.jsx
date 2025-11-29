import React from 'react';
import './component-styles/IngredientOrigins.css'

export default function IngredientOrigins({ herb }) {
  const { name, ingredients, origin, harvest, purity, allergens, plantPart } = herb;

  return (
    <>
      <section className="ingredient-origins">
        <div className="container">
          <h2 className="title">Why Our Magic Is Different</h2>
          <p className="subtitle">
            We pride ourselves on complete transparency. Here's exactly what's in each blend and where it comes from.
          </p>

          <div className="cards">
            {/* Ingredients */}
            <div className="card">
              <div className="icon">🌿</div>
              <h3 className="heading">Full Ingredient List</h3>
              <ul className="ingredient-list">
                {ingredients && ingredients.map((ing, idx) => (
                  <li key={idx}>
                    <span className="check">✓</span>
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Origin & Sourcing */}
            <div className="card">
              <div className="icon">🌎</div>
              <h3 className="heading">Source & Sourcing</h3>
              <div className="origin-details">
                <div className="detail-item">
                  <p className="detail-label">Origin Location</p>
                  <p className="detail-value">{origin}</p>
                </div>
                <div className="detail-item">
                  <p className="detail-label">Harvest Method</p>
                  <p className="detail-value">{harvest}</p>
                </div>
                <div className="detail-item">
                  <p className="detail-label">Plant Part Used</p>
                  <p className="detail-value">{plantPart}</p>
                </div>
              </div>
            </div>

            {/* Purity & Safety */}
            <div className="card">
              <div className="icon">⭐</div>
              <h3 className="heading">Purity Standards</h3>
              <ul className="purity-list">
                {purity && purity.map((standard, idx) => (
                  <li key={idx}>
                    <span className="star">★</span>
                    <span>{standard}</span>
                  </li>
                ))}
              </ul>
              
            </div>

            {/* Allergens & Cautions */}
            <div className="card card-warning">
              <div className="icon">⚠️</div>
              <h3 className="heading">Allergen Notes & Cautions</h3>
              {allergens && allergens.length > 0 ? (
                <ul className="allergen-list">
                  {allergens.map((allergen, idx) => (
                    <li key={idx}>
                      <span className="warning-icon">⚠️</span>
                      <span>{allergen}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="allergen-text">No major known allergens. Always consult a healthcare provider if pregnant or nursing.</p>
              )}

              
            </div>
            
          </div>

        </div>


          {/* Trust Badge */}
          <div className="trust-badge">
            <span className="badge-icon">🌿</span>
            <span className="badge-text">All herbs are ethically sourced, tested for purity, and handled with care from harvest to your doorstep.</span>
          </div>
      </section>
    </>
  );
}