'use client';

import clsx from 'clsx';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';

import LoadingDots from 'components/loading-dots';
import { ProductVariantFragment } from 'lib/shopify';
import QuantityPicker from '../quantity-picker';

export function AddToCart({
  variants,
  availableForSale,
  onChangeQuantity
}: {
  variants: ProductVariantFragment[];
  availableForSale: boolean;
  onChangeQuantity?(q: number): void;
}) {
  const [selectedVariantId, setSelectedVariantId] = useState(variants[0]?.id);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [adding, setAdding] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const variant = variants.find((variant) =>
      variant.selectedOptions.every(
        (option) => option.value === searchParams.get(option.name.toLowerCase())
      )
    );

    if (variant) {
      setSelectedVariantId(variant.id);
    }
  }, [searchParams, variants, setSelectedVariantId]);

  const isMutating = adding || isPending;

  async function handleAdd() {
    if (!availableForSale) return;

    setAdding(true);

    const response = await fetch(`/api/cart`, {
      method: 'POST',
      body: JSON.stringify({
        merchandiseId: selectedVariantId,
        quantity
      })
    });

    const data = await response.json();
    setAdding(false);
    setQuantity(1);

    if (data.error) {
      alert(data.error);
      return;
    }

    startTransition(() => {
      router.refresh();
    });
  }

  useEffect(() => {
    if (onChangeQuantity) {
      onChangeQuantity(quantity);
    }
  }, [quantity]);

  return (
    <div className="inline-flex items-center justify-center space-x-4 pt-6">
      {availableForSale && <QuantityPicker value={quantity} onChange={setQuantity} />}
      <button
        aria-label="Add item to cart"
        disabled={isMutating}
        onClick={handleAdd}
        className={clsx(
          'flex w-full items-center justify-center rounded-lg bg-second p-4 text-sm uppercase tracking-wide text-white opacity-100 hover:opacity-90 ',
          {
            'cursor-not-allowed opacity-60': !availableForSale,
            'cursor-not-allowed': isMutating
          }
        )}
      >
        <span>{availableForSale ? 'Add To Cart' : 'Out Of Stock'}</span>
        {isMutating ? <LoadingDots className="bg-white " /> : null}
      </button>
    </div>
  );
}
