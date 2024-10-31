import React from 'react';

export default function SingleProduct() {
  return (
    <div>
      {/* Main container for the single product display */}
      <h1>Single Product</h1>
      {/* Placeholder for product image */}
      <img src="placeholder-image-url.jpg" alt="Product" style={{ width: '300px', height: 'auto' }} />
      
      {/* Placeholder for product name */}
      <h2>Product Name</h2>
      
      {/* Placeholder for product description */}
      <p>This is a brief description of the product, highlighting its features and benefits.</p>
      
      {/* Placeholder for product price */}
      <p style={{ fontWeight: 'bold', fontSize: '1.5em' }}>$99.99</p>

      {/* Placeholder for Add to Cart button */}
      <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
        Add to Cart
      </button>
    </div>
  );
}
