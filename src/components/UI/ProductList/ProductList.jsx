import React from 'react';
import ProductCart from '../ProductCard/ProductCart';
function ProductList({ data }) {
    return (
        <ul>
            {data.map((product, index) => (
                <li key={index}>
                    <ProductCart product={product} />
                </li>
            ))}
        </ul>
    );
}

export default ProductList;
