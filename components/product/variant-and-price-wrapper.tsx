'use client';
import React from 'react';
import Price from '../price';
import { ProductFragment } from '../../lib/shopify';
import { VariantSelector } from './variant-selector';
import { useSearchParams } from 'next/navigation';

interface VariantAndPriceWrapperProps {
  product: ProductFragment;
  selectedQuantity: number;
}

type ParamsMap = {
  [key: string]: string; // ie. { color: 'Red', size: 'Large', ... }
};

type OptimizedVariant = {
  id: string;
  availableForSale: boolean;
  params: URLSearchParams;
  [key: string]: string | boolean | URLSearchParams; // ie. { color: 'Red', size: 'Large', ... }
};

const VariantAndPriceWrapper: React.FC<VariantAndPriceWrapperProps> = (props) => {
  const { product, selectedQuantity } = props;
  const options = product?.options;
  const variants: any = product?.variants;

  const currentParams = useSearchParams();
  const hasNoOptionsOrJustOneOption =
    !options.length || (options.length === 1 && options[0]?.values.length === 1);

  if (hasNoOptionsOrJustOneOption) {
    return null;
  }

  // Discard any unexpected options or values from url and create params map.
  const paramsMap: ParamsMap = Object.fromEntries(
    Array.from(currentParams.entries()).filter(([key, value]) =>
      options.find((option) => option.name.toLowerCase() === key && option.values.includes(value))
    )
  );

  // Optimize variants for easier lookups.
  const optimizedVariants: OptimizedVariant[] = (variants ?? []).map((variant: any) => {
    const optimized: OptimizedVariant = {
      id: variant.id,
      availableForSale: variant.availableForSale,
      params: new URLSearchParams()
    };

    variant.selectedOptions.forEach((selectedOption: any) => {
      const name = selectedOption.name.toLowerCase();
      const value = selectedOption.value;

      optimized[name] = value;
      optimized.params.set(name, value);
    });

    return optimized;
  });

  // Find the first variant that is:
  //
  // 1. Available for sale
  // 2. Matches all options specified in the url (note that this
  //    could be a partial match if some options are missing from the url).
  //
  // If no match (full or partial) is found, use the first variant that is
  // available for sale.
  const selectedVariant: OptimizedVariant | undefined =
    optimizedVariants.find(
      (variant) =>
        variant.availableForSale &&
        Object.entries(paramsMap).every(([key, value]) => variant[key] === value)
    ) || optimizedVariants.find((variant) => variant.availableForSale);

  const selectedVariantPrice = selectedVariant
    ? variants?.find((v: any) => v?.id === selectedVariant?.id)?.price?.amount
    : null;
  return (
    <>
      <Price
        className="mb-4 text-xl font-semibold text-gray-900"
        amount={
          ((selectedVariantPrice ?? product.priceRange.maxVariantPrice.amount) *
            selectedQuantity) as any
        }
        currencyCode={product.priceRange.maxVariantPrice.currencyCode}
      />

      {/* @ts-expect-error Server Component */}
      <VariantSelector options={options} variants={variants as any} />
    </>
  );
};

export default VariantAndPriceWrapper;
