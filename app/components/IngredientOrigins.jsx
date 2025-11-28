'use client';
import React from 'react';
import './component-styles/IngredientOrigins.css';

export default function IngredientOrigins({ herb }) {
  const { name, ingredients, origin, harvest, purity, allergens, plantPart } = herb;

  return (
    <section className="ingredient-origins">
      <div className="container">
        <h2 className="title">Why Our Magic Is Different</h2>
        <p className="subtitle">
          We pride ourselves on complete transparency. Here's exactly what’s in each blend and where it comes from.
        </p>

        <div className="cards">
          {/* Ingredients */}
          <div className="card">
            <div className="icon">🌿</div>
            <h3 className="heading">Full Ingredient List</h3>
            <ul className="text">
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
            <div className="text">
              <p className="small-label">Origin Location</p>
              <p>{origin}</p>
              <p className="small-label">Harvest Method</p>
              <p>{harvest}</p>
              <p className="small-label">Plant Part Used</p>
              <p>{plantPart}</p>
            </div>
          </div>

          {/* Purity & Safety */}
          <div className="card">
            <div className="icon">⭐</div>
            <h3 className="heading">Purity Standards</h3>
            <ul className="text">
              {purity && purity.map((standard, idx) => (
                <li key={idx}>
                  <span className="star">★</span>
                  <span>{standard}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Allergens & Cautions */}
          <div className="card red">
            <div className="icon">⚠</div>
            <h3 className="heading">Allergen Notes & Cautions</h3>
            {allergens && allergens.length > 0 ? (
              <ul className="text">
                {allergens.map((allergen, idx) => (
                  <li key={idx}>
                    <span>⚠</span>
                    <span>{allergen}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text">No major known allergens. Always consult a healthcare provider if pregnant or nursing.</p>
            )}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="trust-badge">
          🌿 All herbs are ethically sourced, tested for purity, and handled with care from harvest to your doorstep.
        </div>
      </div>
    </section>
  );
}
