import { getCollections, getProducts } from 'lib/shopify';
import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    '/the-restaurant',
    '/delicatessen',
    '/e-shop',
    '/contact-us',
    '/privacy-policy'
  ];

  const routesMap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString()
  }));

  const collectionsPromise = getCollections().then((collections) =>
    collections.map((collection) => ({
      url: `${baseUrl}${collection.path}`,
      lastModified: collection.updatedAt
    }))
  );

  const productsPromise = getProducts({}).then((products) =>
    products.map((product) => ({
      url: `${baseUrl}/products/${product.handle}`,
      lastModified: product.updatedAt
    }))
  );

  const [collectionRoutes, productRoutes] = await Promise.all([
    collectionsPromise,
    productsPromise
  ]);

  const fetchedRoutes = [...collectionRoutes, ...productRoutes];

  return [...routesMap, ...fetchedRoutes];
}
