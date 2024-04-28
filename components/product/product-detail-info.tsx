'use client';

import React, { useState } from 'react';
import Price from '../price';
import VariantAndPriceWrapper from './variant-and-price-wrapper';
import ProductDescription from '../../app/products/[handle]/product-description';
import { AddToCart } from './add-to-cart';
import { ProductFragment } from '../../lib/shopify';

interface ProductDetailInfoProps {
  product?: ProductFragment;
}

const ProductDetailInfo: React.FC<ProductDetailInfoProps> = ({ product }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold">{product?.title}</h1>

      {(product?.variants ?? ([] as any))?.length === 1 && (
        <Price
          className="mb-4 text-xl font-semibold text-gray-900"
          amount={(Number(product?.priceRange?.maxVariantPrice?.amount) * selectedQuantity) as any}
          currencyCode={product?.priceRange?.maxVariantPrice?.currencyCode as any}
        />
      )}

      <VariantAndPriceWrapper product={product as any} selectedQuantity={selectedQuantity} />

      {product?.descriptionHtml ? (
        <ProductDescription descriptionHtml={product?.descriptionHtml} />
      ) : null}

      <AddToCart
        variants={(product?.variants ?? []) as any}
        availableForSale={product?.availableForSale ?? false}
        onChangeQuantity={(q) => setSelectedQuantity(q)}
      />
    </div>
  );
};

export default ProductDetailInfo;
