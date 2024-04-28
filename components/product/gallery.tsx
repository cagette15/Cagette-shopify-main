'use client';

import { useState } from 'react';

import type { CurrencyCode, Product } from '@shopify/hydrogen-react/storefront-api-types';
import clsx from 'clsx';
import { GridTileImage } from 'components/grid/tile';
import ArrowLeftIcon from 'components/icons/arrow-left';

export function Gallery({
  title,
  amount,
  currencyCode,
  images,
  isPreview,
  product
}: {
  title: string;
  amount: string;
  currencyCode: CurrencyCode;
  isPreview?: boolean;
  images: { src: string; altText: string }[];
  product?: Product;
}) {
  const [currentImage, setCurrentImage] = useState(0);

  function handleNavigate(direction: 'next' | 'previous') {
    if (direction === 'next') {
      setCurrentImage(currentImage + 1 < images.length ? currentImage + 1 : 0);
    } else {
      setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
    }
  }

  return (
    <div className="h-full">
      <div className="relative">
        {images[currentImage] && (
          <GridTileImage
            variants={product?.variants as any}
            src={images[currentImage]?.src as string}
            alt={images[currentImage]?.altText as string}
            width={600}
            height={600}
            isInteractive={false}
            priority={true}
            background="white"
            labels={{
              title,
              amount,
              currencyCode
            }}
            isPreview={isPreview}
          />
        )}

        {images.length > 1 ? (
          <div className="absolute left-[10px] right-[10px] top-[47%]  flex justify-between text-white">
            <button
              className={clsx(
                'flex h-[45px] w-[45px] transform items-center justify-center rounded-full bg-gray-700 opacity-75 transition-opacity duration-300 hover:bg-gray-900 focus:outline-none'
              )}
              onClick={() => handleNavigate('previous')}
            >
              <ArrowLeftIcon className="mr-[-5px] h-6" />
            </button>

            <button
              className={clsx(
                'flex h-[45px] w-[45px] transform items-center justify-center rounded-full bg-gray-700 opacity-75 transition-opacity duration-300 hover:bg-gray-900 focus:outline-none'
              )}
              onClick={() => handleNavigate('next')}
            >
              <ArrowLeftIcon className="ml-[-5px] h-6 rotate-180" />
            </button>
          </div>
        ) : null}
      </div>

      {images.length > 1 ? (
        <div className="mt-[10px] flex gap-[10px]">
          {images.map((image, index) => {
            const isActive = index === currentImage;
            return (
              <button
                aria-label="Enlarge product image"
                key={image.src}
                className="h-full w-1/4"
                onClick={() => setCurrentImage(index)}
              >
                <GridTileImage
                  variants={product?.variants as any}
                  alt={image?.altText}
                  src={image.src}
                  width={600}
                  height={600}
                  background="white"
                  active={isActive}
                  isPreview={isPreview}
                  isThumbnail={true}
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
