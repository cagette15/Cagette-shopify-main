import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';

export async function EshopCarousel() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getCollectionProducts({ collection: 'christmas' });

  if (!products?.length) return null;

  return (
    <div className="relative w-full overflow-hidden ">
      <div className="flex animate-carousel ">
        {[...products, ...products].map((product, i) => (
          <Link
            key={`${product.handle}${i}`}
            href={`/products/${product.handle}`}
            className="lg relative flex min-h-[30vh] w-1/2 flex-none flex-col p-2 md:w-1/3 md:p-12 lg:min-h-[40vh]"
          >
            <div className="relative flex h-full flex-col ">
              {product.featuredImage ? (
                <Image
                  alt={product.title}
                  className="rounded-md object-contain"
                  layout="fill"
                  objectFit="fill"
                  sizes="33vw"
                  src={product.featuredImage.url}
                />
              ) : null}
              <div className="z-10 mt-auto flex w-full items-center justify-center bg-white p-4">
                <div className="text-normal truncate font-semibold text-second lg:text-xl">
                  {product.title}
                  <div className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-7 w-7 text-gray-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <span className="ml-2 text-gray-600">Add to cart</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
