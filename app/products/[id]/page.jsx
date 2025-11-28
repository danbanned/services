'use client';
import Link from 'next/link';

export default function ProductDetailsPage({ params }) {
  const { id } = params; // read URL /products/1

  // Same mock product list as your products page
  const products = [
    { id: 1, name: 'Herbal Tea', description: 'A calming herbal blend.' },
    { id: 2, name: 'Energy Blend', description: 'Boost your energy naturally.' },
    { id: 3, name: 'Sleep Tea', description: 'Perfect for relaxing before bed.' },
  ];

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div style={{ padding: 20 }}>
        <h1>Product Not Found</h1>
        <Link href="/products">
          <button>Back to Products</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>{product.name}</h1>
      <p>{product.description}</p>

      <Link href={`/purchasepage?id=${product.id}`}>
        <button style={{ marginTop: 20 }}>
          Go to Purchase Page
        </button>
      </Link>

      <br />
      <Link href="/products">
        <button style={{ marginTop: 10 }}>
          Back to Products
        </button>
      </Link>
    </div>
  );
}
