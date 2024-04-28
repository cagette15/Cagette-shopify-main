'use client';
/* eslint-disable @next/next/no-img-element */
import type { CurrencyCode } from '@shopify/hydrogen-react/storefront-api-types';

import clsx from 'clsx';
import Price from 'components/price';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import LoadingDots from '../loading-dots';
import QuantityPicker from '../quantity-picker';

export function GridTileImage({
  isInteractive = true,
  background,
  active,
  labels,
  isPreview,
  isThumbnail,
  ...props
}: {
  isInteractive?: boolean;
  background?: 'white' | 'pink' | 'purple' | 'black' | 'purple-dark' | 'blue' | 'cyan' | 'gray';
  active?: boolean;
  labels?: {
    title: string;
    amount: string;
    currencyCode: CurrencyCode;
    isSmall?: boolean;
  };
  isPreview?: boolean;
  isThumbnail?: boolean;
  availableForSale?: boolean;
  variants: any[];
} & React.ComponentProps<typeof Image>) {
  const imageSrc = props?.src ?? '/no-image-placeholder.jpg';
  const { availableForSale, variants } = props;

  const router = useRouter();
  const [adding, setAdding] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isPending, startTransition] = useTransition();

  const isMutating = adding || isPending;

  async function handleAdd(e: any) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    e.nativeEvent.preventDefault();

    if (!availableForSale) return;
    if (isMutating) return;

    setAdding(true);

    try {
      const response = await fetch(`/api/cart`, {
        method: 'POST',
        body: JSON.stringify({
          merchandiseId: variants[0]?.id,
          quantity
        })
      });

      await response.json();
      setAdding(false);
      setQuantity(1);

      startTransition(() => {
        router.refresh();
      });
    } catch (e) {
      setAdding(false);

      if (e) {
        alert(e);
        return;
      }
    }
  }

  return (
    <div
      className={clsx('relative flex h-full flex-col items-center justify-center', {
        'bg-white': background === 'white',
        relative: labels,
        'md:flex-row': !labels?.isSmall
      })}
    >
      <div
        className={clsx('relative flex w-full justify-center overflow-hidden rounded-lg', {
          'max-h-[600px]': isPreview,
          'h-[270px]': !isPreview,
          'h-[140px]': isThumbnail
        })}
      >
        <img
          className={clsx('w-full rounded-lg border object-cover', {
            'rounded-lg border transition duration-300 ease-in-out hover:scale-105': isInteractive,
            'rounded-[10px]': isPreview,
            'rounded-lg border': labels?.isSmall
          })}
          alt={props.title || ''}
          src={imageSrc as any}
        />
      </div>

      {!isPreview && (
        <>
          {labels && (
            <>
              <div className="absolute left-[15px] top-[15px]">
                <Price
                  className="w-fit rounded-md bg-white/80 px-2 py-2 text-sm font-semibold text-second"
                  amount={labels.amount}
                  currencyCode={labels.currencyCode}
                />
              </div>

              <div
                className={clsx(
                  'relative w-full truncate text-center text-second',
                  labels.isSmall ? 'mt-2' : 'pt-[20vh] '
                )}
              >
                <h3
                  data-testid="product-name"
                  className={clsx(
                    'truncate px-4 py-[10px] font-semibold capitalize leading-loose md:px-8',
                    labels.isSmall ? ' text-center text-lg ' : 'text-lg'
                  )}
                >
                  {labels.title}
                </h3>

                {/*{!labels.isSmall && (
                <div className="mt-2">
                  <Price
                    className="w-fit rounded-md bg-second px-2 py-1 text-sm font-semibold text-white"
                    amount={labels.amount}
                    currencyCode={labels.currencyCode}
                  />
                </div>
              )}*/}

                {labels.isSmall && (
                  <div className="flex items-center justify-center">
                    <QuantityPicker value={quantity} onChange={setQuantity} />

                    <span
                      className="ml-4 flex items-center justify-center gap-[5px] text-[13px] font-bold uppercase tracking-[2px] text-[#2d2d2d]"
                      onClick={handleAdd}
                    >
                      Add to cart
                      {isMutating ? <LoadingDots className="bg-second " /> : null}
                    </span>
                  </div>
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
