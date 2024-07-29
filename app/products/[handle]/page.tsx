import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import Grid from 'components/grid';
import Footer from 'components/layout/footer';
import ProductGridItems from 'components/layout/product-grid-items';

import { Gallery } from 'components/product/gallery';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { ImageFragment as Image, getProduct, getProductRecommendations } from 'lib/shopify';

import ProductDetailInfo from '../../../components/product/product-detail-info';

export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const hide = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: hide,
      follow: hide,
      googleBot: {
        index: hide,
        follow: hide
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);

  if (!product) notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <div className="container mx-auto lg:grid lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Gallery
            product={product as any}
            title={product.title}
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            images={product.images.map((image: Image) => ({
              src: image.url,
              altText: image.altText
            }))}
            isPreview={true}
          />
        </div>

        <div className="p-2 md:p-6 md:pt-12 lg:col-span-6">
          <ProductDetailInfo product={product as any} />
        </div>
      </div>
      <Suspense>
        {/* @ts-expect-error Server Component */}
        <RelatedProducts id={product.id} />
        <Suspense>
          {/* @ts-expect-error Server Component */}
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="container mx-auto">
      <div className="px-4 py-8">
        <div className="mb-4 text-3xl font-bold">Related Products</div>
        <Grid className="grid-cols-1 gap-y-4 md:gap-y-8 lg:grid-cols-5 lg:gap-y-12">
          <ProductGridItems products={relatedProducts} />
        </Grid>
      </div>
    </div>
  );
}
