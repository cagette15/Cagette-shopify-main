import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';

export async function Carousel() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getCollectionProducts({ collection: 'hidden-homepage-carousel' });

  if (!products?.length) return null;

  return (
    <div className="relative w-full overflow-hidden ">
      <div className="flex animate-carousel ">
        {[...products, ...products].map((product, i) => (
          <Link
            key={`${product.handle}${i}`}
            href={`/products/${product.handle}`}
            className="relative flex h-[30vh] w-1/2 flex-none flex-col md:w-1/3 "
          >
            {product.featuredImage ? (
              <Image
                alt={product.title}
                className="h-full object-contain"
                fill
                sizes="33vw"
                src={product.featuredImage.url}
              />
            ) : null}
            <div className="flex w-full items-center justify-center bg-white p-4">
              <div className="text-xl font-semibold text-black">{product.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
