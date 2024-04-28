import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { SimpleProduct } from 'lib/shopify';
import Link from 'next/link';

export default function ProductGridItems({ products }: { products: SimpleProduct[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-fadeIn">
          <Link className="h-full w-full" href={`/products/${product.handle}`}>
            <GridTileImage
              alt={product.title}
              labels={{
                isSmall: true,
                title: product.title,
                amount: product.priceRange.maxVariantPrice.amount,
                currencyCode: product.priceRange.maxVariantPrice.currencyCode
              }}
              src={product.featuredImage?.url}
              width={600}
              height={600}
              variants={product?.variants}
              availableForSale={product?.availableForSale}
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
