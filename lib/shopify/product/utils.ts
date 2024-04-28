import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { removeEdgesAndNodes } from 'lib/graphql';

import { ProductFragment } from './fragments';

export const reshapeProduct = (product: ProductFragment, filterHiddenProducts: boolean = true) => {
  if (!product || (filterHiddenProducts && product.tags?.includes(HIDDEN_PRODUCT_TAG))) {
    return undefined;
  }

  const { images, variants, ...rest } = product;

  return {
    ...rest,
    images: removeEdgesAndNodes(images),
    variants: removeEdgesAndNodes(variants)
  };
};

export const reshapeProducts = (products: ProductFragment[]) => {
  const reshapedProducts = [];

  for (const product of products) {
    if (product) {
      const reshapedProduct = reshapeProduct(product);

      if (reshapedProduct) {
        reshapedProducts.push(reshapedProduct);
      }
    }
  }

  return reshapedProducts;
};

export type SimpleProduct = NonNullable<ReturnType<typeof reshapeProduct>>;
