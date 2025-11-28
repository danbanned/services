'use client';
import Link from 'next/link';

export default function ProductsPage() {
  const products = [
    { id: 1, name: 'Herbal Tea' },
    { id: 2, name: 'Energy Blend' },
    { id: 3, name: 'Sleep Tea' },
  ];

  return (
    <div className="products-wrapper">
      <h1 className="products-title">Our Products</h1>

      <div className="products-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h2 className="product-name">{product.name}</h2>

            <Link href={`/purchasepage?id=${product.id}`}>
              <button className="purchase-btn">
                Go to Purchase Page
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
